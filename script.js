const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})

navLinks.forEach((el) => {
    el.addEventListener('click', () => { 
    bsCollapse.toggle();
    })
})


