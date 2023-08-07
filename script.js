const langButton = document.querySelector('.lang-icon');
const elementsToModify = document.querySelectorAll('.element-to-modify');
const html = document.querySelector('html');

elementsToModify.forEach(element => {
    element.dataset.esText = element.innerText;
});

function changeLanguage(event) {
    // const languageChoice = event.target.innerText.toLowerCase();
    if (html.lang === 'es') {
        elementsToModify.forEach(element => {
            const langKey = `enText`;
            element.innerText = element.dataset[langKey];
            html.lang = 'en';
        });
    } else if (html.lang === 'en') {
        elementsToModify.forEach(element => {
            const langKey = `deText`;
            element.innerText = element.dataset[langKey];
            html.lang = 'de';
        });
    } else {
        elementsToModify.forEach(element => {
            const langKey = `esText`;
            element.innerText = element.dataset[langKey];
            html.lang = 'es';
        });
    }
}

langButton.addEventListener('click', changeLanguage);