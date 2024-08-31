window.addEventListener('scroll', function() {
    let navbar = document.querySelector('nav');
    if (window.pageYOffset > 100) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

console.log('Sticky Navbar initialized.');

