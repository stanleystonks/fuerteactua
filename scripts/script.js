// Mobile Menu
const mobileMenu = {
  primaryNav: document.querySelector('.nav-list'),
  navToggle: document.querySelector('.mobile-nav-toggle'),
  logo: document.querySelector('.logo-div'),
  targetLinks: document.querySelectorAll('.target-link'),

  toggleMenuVisibility() {
    const visibility = this.primaryNav.getAttribute('data-visible') === 'false';
    this.primaryNav.setAttribute('data-visible', visibility ? "true" : "false");
    this.navToggle.setAttribute('aria-expanded', visibility ? "true" : "false");
    this.logo.setAttribute('data-expanded', visibility ? "true" : "false");
  },

  init() {
    this.navToggle.addEventListener('click', this.toggleMenuVisibility.bind(this));
    this.targetLinks.forEach(link => link.addEventListener('click', this.toggleMenuVisibility.bind(this)));
  }
};

// Sticky Header
const stickyHeader = {
  nav: document.querySelector("nav"),

  toggleScrolledClass() {
    this.nav.classList.toggle("scrolled", window.scrollY > 0);
  },

  init() {
    window.addEventListener("scroll", this.toggleScrolledClass.bind(this));
  }
};

// Dropdown
const dropdownHandler = {
  dropdownButtons: document.querySelectorAll('[data-dropdown-button]'),

  handleDropdown(e) {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) return;

    let currentDropdown = e.target.closest('[data-dropdown]');
    const isDropdownActive = currentDropdown && currentDropdown.classList.contains('active');

    if (isDropdownButton) {
      currentDropdown.classList.toggle('active');
      e.target.setAttribute('aria-expanded', !isDropdownActive);
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
      if (dropdown === currentDropdown) return;

      dropdown.classList.remove('active');
      const dropdownButton = dropdown.querySelector('[data-dropdown-button]');
      dropdownButton?.setAttribute('aria-expanded', 'false');
    });
  },

  init() {
    document.addEventListener('click', this.handleDropdown);
  }
};

// Accordion
class Accordion {
  constructor(domNode) {
    this.rootEl = domNode;
    this.buttonEl = this.rootEl.querySelector('button[aria-expanded]');
    const controlsId = this.buttonEl.getAttribute('aria-controls');
    this.contentEl = document.getElementById(controlsId);
    this.open = this.buttonEl.getAttribute('aria-expanded') === 'true';
    this.buttonEl.addEventListener('click', this.onButtonClick.bind(this));
  }

  onButtonClick() {
    this.toggle(!this.open);
  }

  toggle(open) {
    if (open === this.open) return;
    this.open = open;
    this.buttonEl.setAttribute('aria-expanded', `${open}`);
    this.open ? this.contentEl.removeAttribute('hidden') : this.contentEl.setAttribute('hidden', '');
  }
}

// Download Button Color Change
const buttonColorChange = {
  accordionButton: document.querySelector('.accordion-trigger'),
  downloadButton: document.querySelector('.download-button'),

  changeButtonColor() {
    this.downloadButton.classList.toggle('button-black');
    this.downloadButton.classList.toggle('button-invert');
  },

  init() {
    this.accordionButton.addEventListener('click', this.changeButtonColor.bind(this));
  }
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  mobileMenu.init();
  stickyHeader.init();
  dropdownHandler.init();
  buttonColorChange.init();

  // Init accordions
  const accordions = document.querySelectorAll('.accordion h3');
  accordions.forEach(accordionEl => new Accordion(accordionEl));
});
