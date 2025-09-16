#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys
from urllib.parse import urlparse

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for Replit proxy compatibility
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        
        # Set appropriate caching based on file type
        if self.path.endswith(('.html', '.htm')):
            # No caching for HTML files to ensure updates are visible
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        elif self.path.endswith(('.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ttf', '.woff', '.woff2')):
            # Long-term caching for static assets
            self.send_header('Cache-Control', 'public, max-age=31536000, immutable')
        else:
            # Default to no cache for unknown file types
            self.send_header('Cache-Control', 'no-cache')
            
        super().end_headers()

    def do_GET(self):
        # Handle requests to root and serve index.html
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()
    
    def do_OPTIONS(self):
        # Handle preflight requests
        self.send_response(200)
        self.end_headers()

    def send_error(self, code, message=None):
        # Serve custom 404 page if it exists
        if code == 404 and os.path.exists('404.html'):
            try:
                with open('404.html', 'rb') as f:
                    content = f.read()
                self.send_response(404)
                self.send_header('Content-Type', 'text/html')
                self.send_header('Content-Length', str(len(content)))
                self.end_headers()
                self.wfile.write(content)
                return
            except Exception:
                pass  # Fall back to default error handling
        
        # Fall back to default error handling
        super().send_error(code, message)

if __name__ == "__main__":
    # Use PORT environment variable if available (for Replit Autoscale deployment)
    PORT = int(os.getenv('PORT', 5000))
    HOST = "0.0.0.0"
    
    # Change to the directory containing the static files
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    print(f"Starting server on {HOST}:{PORT}")
    print(f"Serving files from: {os.getcwd()}")
    
    # Use ThreadingTCPServer for better concurrency
    with socketserver.ThreadingTCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
        print(f"Server running at http://{HOST}:{PORT}/")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            sys.exit(0)