// Toggle icon of navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (fromTop >= offset && fromTop < offset + sec.offsetHeight) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        }
    });
});
