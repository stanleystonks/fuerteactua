const langButton = document.querySelector('.lang-icon');
const elementsToModify = document.querySelectorAll('.element-to-modify');
const html = document.querySelector('html');
const languages = ['es', 'en', 'de'];
let currentLanguageIndex = 0;

elementsToModify.forEach(element => {
    element.dataset.esText = element.innerText;
});

function updateLanguage() {
    elementsToModify.forEach(element => {
        const langKey = `${languages[currentLanguageIndex]}Text`;
        element.innerText = element.dataset[langKey];
    });
    html.lang = languages[currentLanguageIndex];
}

function changeLanguage() {
    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    console.log(currentLanguageIndex);
    updateLanguage();
}

langButton.addEventListener('click', changeLanguage);