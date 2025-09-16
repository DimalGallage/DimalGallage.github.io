# New-Hutt-Studio

## Overview
This is a static website built with Webflow and imported from GitHub. The project is a portfolio/studio website for Hutt Studio with a modern design showcasing various services and client work.

## Project Architecture
- **Type**: Static website (Webflow export)
- **Technology Stack**: HTML5, CSS3, JavaScript (Webflow framework)
- **Server**: Python HTTP server for static file serving
- **Port**: 5000 (configured for Replit environment)

## Current State
The website is fully functional and deployed on Replit with:
- Custom Python HTTP server with CORS headers for proxy compatibility
- Proper cache control headers to ensure updates are visible
- All static assets (HTML, CSS, JS, images, fonts) served correctly
- Configured for deployment on autoscale infrastructure

## Recent Changes
- **Sep 16, 2025**: Initial import and setup for Replit environment
  - Created `server.py` with custom HTTP request handler
  - Configured workflow to run on port 5000 with webview output
  - Set up deployment configuration for autoscale hosting
  - Added CORS and cache control headers for Replit proxy compatibility

## Project Structure
```
/
├── css/                    # Stylesheets
│   ├── hutt-studio.webflow.css
│   ├── normalize.css
│   └── webflow.css
├── fonts/                  # Font files (Poppins family)
├── images/                 # Image assets and logos
├── js/                     # JavaScript files
│   └── webflow.js
├── index.html              # Main page
├── 404.html               # Error page
├── 401.html               # Unauthorized page  
├── style-guide.html       # Style guide page
├── server.py              # Custom Python HTTP server
└── README.md              # Original project README

```

## Development
- **Server**: Run `python server.py` to start the development server
- **Port**: Always use port 5000 for frontend (Replit requirement)
- **Host**: Server binds to 0.0.0.0 for external access

## Deployment
- **Target**: Autoscale (suitable for static websites)
- **Command**: `python server.py`
- **Features**: Automatic scaling, no persistent state needed

## User Preferences
- Prefer minimal changes to existing Webflow structure
- Keep original design and functionality intact
- Use simple, reliable hosting solutions