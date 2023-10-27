const primaryNav = document.querySelector('.nav-list');
const navToggle = document.querySelector('.mobile-nav-toggle');
const logo = document.querySelector('.logo-div');

const targetLinks = document.querySelectorAll('.target-link');

let visibility;

const menuToggle = () => {
    visibility = primaryNav.getAttribute('data-visible');
    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', "true");
        navToggle.setAttribute('aria-expanded', "true");
        logo.setAttribute('data-expanded', "true");
    } else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', "false");
        navToggle.setAttribute('aria-expanded', "false");
        logo.setAttribute('data-expanded', "false");
    } else {
        return;
    }
}

navToggle.addEventListener('click', menuToggle);

targetLinks.forEach((link) => {
    link.addEventListener('click', menuToggle);
})