document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        const isDropdownActive = currentDropdown.classList.contains('active');

        currentDropdown.classList.toggle('active');
        e.target.setAttribute('aria-expanded', !isDropdownActive);
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;

        dropdown.classList.remove('active');

        const dropdownButton = dropdown.querySelector('[data-dropdown-button]');
        if (dropdownButton) {
            dropdownButton.setAttribute('aria-expanded', 'false');
        }
    })
})