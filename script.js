const langButtons = document.querySelectorAll('.lang');
const elementsToModify = document.querySelectorAll('.element-to-modify');
const html = document.querySelector('html');

elementsToModify.forEach(element => {
    element.dataset.esText = element.innerText;
});

function toggleLanguageBar(languageChoice) {
    langButtons.forEach(button => {
        button.classList.toggle('hidden', button.id === `lang-${languageChoice}`);
    });
}

function changeLanguage(event) {
    const languageChoice = event.target.innerText.toLowerCase();
    html.lang = languageChoice;

    // Update elements using languageChoice
    elementsToModify.forEach(element => {
        const langKey = `${languageChoice}Text`;
        element.innerText = element.dataset[langKey];
    });

    // Toggle language bar
    toggleLanguageBar(languageChoice);
}

langButtons.forEach(button => {
    button.addEventListener('click', changeLanguage);
});