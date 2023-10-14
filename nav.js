const primaryNav = document.querySelector('.nav-list');
const navToggle = document.querySelector('.mobile-nav-toggle');
const logo = document.querySelector('.logo-div');
const langMenu = document.querySelector('.lang-navigation');
const langButton = document.querySelector('.lang-icon-button');

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

let langVisibility;
let isMobile;

const langToggle = () => {
    langVisibility = langMenu.getAttribute('data-visible');
    isMobile = langMenu.getAttribute('data-mobile');
    console.log(langVisibility)
    if (langVisibility === 'false' && isMobile === 'true') {
        langMenu.setAttribute('data-visible', "true");
        langMenu.setAttribute('data-mobile', 'false');
        langButton.setAttribute('aria-expanded', "true");
    } else if (langVisibility === 'true' && isMobile === 'false') {
        langMenu.setAttribute('data-visible', "false");
        langMenu.setAttribute('data-mobile', 'true');
        langButton.setAttribute('aria-expanded', "false");
    } else {
        return;
    }
}

navToggle.addEventListener('click', menuToggle);
langButton.addEventListener('click', langToggle);

targetLinks.forEach((link) => {
    link.addEventListener('click', menuToggle);
})