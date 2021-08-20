const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
navLinks.forEach((l) => {
    l.addEventListener('click', () => { 
        const bsCollapse = new bootstrap.Collapse(menuToggle)
        bsCollapse.toggle() 
    
    })
})