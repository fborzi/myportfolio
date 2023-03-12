import '../scss/styles.scss';
import '../scss/background.scss'
import '../scss/experience.scss'
import * as bootstrap from 'bootstrap';

import { renderHeader } from './header';
import { renderHome } from './home';
import { renderAbout } from './about';
import { renderSkills } from './skills';
import { renderExperience } from './experience';
import { renderEducation } from './education';

const indexHeader = document.querySelector('#header');
const indexHome = document.querySelector('#home');
const indexAbout = document.querySelector('#about');
const indexSkills = document.querySelector('#skills');
const indexExperience = document.querySelector('#experience');
const indexEducation = document.querySelector('#education');

renderHeader(indexHeader);

renderHome(indexHome);

renderAbout(indexAbout);

renderExperience(indexExperience);

const homeButton = document.querySelector('#homeButton');
const aboutButton = document.querySelector('#aboutButton');
const skillButton = document.querySelector('#skillButton');
const experienceButton = document.querySelector('#experienceButton');
const educationButton = document.querySelector('#educationButton');

homeButton.addEventListener('click', () => {

    if (indexHome.style.display === 'none') {
        indexHome.style.display = 'block';
        indexAbout.style.display = 'none';
        indexSkills.style.display = 'none';
        indexExperience.style.display = 'none';
        indexEducation.style.display = 'none';
    }
});

aboutButton.addEventListener('click', () => {

    if (indexAbout.style.display === 'none') {
        indexHome.style.display = 'none';
        indexAbout.style.display = 'block';
        indexSkills.style.display = 'none';
        indexExperience.style.display = 'none';
        indexEducation.style.display = 'none';
    }
});

const paragraphAbout = document.querySelector('#paragraphAbout');
const parrafoAbout = document.querySelector('#parrafoAbout');
const translateButton = document.querySelector('#translateButton');

translateButton.addEventListener('click', () => {
    console.log('translate button clicked');
    if (paragraphAbout.style.display === 'none') {
        paragraphAbout.style.display = 'block';
        parrafoAbout.style.display = 'none';
    } else {
        paragraphAbout.style.display = 'none';
        parrafoAbout.style.display = 'block';
    }
});

skillButton.addEventListener('click', () => {
    renderSkills(indexSkills);

    if (indexSkills.style.display === 'none') {
        indexHome.style.display = 'none';
        indexAbout.style.display = 'none';
        indexSkills.style.display = 'block';
        indexExperience.style.display = 'none';
        indexEducation.style.display = 'none';
    }
});

experienceButton.addEventListener('click', () => {

    if (indexExperience.style.display === 'none') {
        indexHome.style.display = 'none';
        indexAbout.style.display = 'none';
        indexSkills.style.display = 'none';
        indexExperience.style.display = 'block';
        indexEducation.style.display = 'none';
    }
});
const englishNeoris = document.querySelector('#englishNeoris');
const spanishNeoris = document.querySelector('#spanishNeoris');
const englishDigital = document.querySelector('#englishDigital');
const spanishDigital = document.querySelector('#spanishDigital');
const englishCyan = document.querySelector('#englishCyan');
const spanishCyan = document.querySelector('#spanishCyan');
const englishRotary = document.querySelector('#englishRotary');
const spanishRotary = document.querySelector('#spanishRotary');

const translateButtonExperience = document.querySelector('#translateButtonExperience');

translateButtonExperience.addEventListener('click', () => {

    if (
        englishNeoris.style.display === 'none' &&
        englishDigital.style.display === 'none' &&
        englishCyan.style.display === 'none' &&
        englishRotary.style.display === 'none'
    ) {
        englishNeoris.style.display = 'block';
        englishDigital.style.display = 'block';
        englishCyan.style.display = 'block';
        englishRotary.style.display = 'block';
        spanishNeoris.style.display = 'none';
        spanishDigital.style.display = 'none';
        spanishCyan.style.display = 'none';
        spanishRotary.style.display = 'none';

    } else {
        englishNeoris.style.display = 'none';
        englishDigital.style.display = 'none';
        englishCyan.style.display = 'none';
        englishRotary.style.display = 'none';
        spanishNeoris.style.display = 'block';
        spanishDigital.style.display = 'block';
        spanishCyan.style.display = 'block';
        spanishRotary.style.display = 'block';
    }
});


educationButton.addEventListener('click', () => {
    renderEducation(indexEducation);

    if (indexEducation.style.display === 'none') {
        indexHome.style.display = 'none';
        indexAbout.style.display = 'none';
        indexSkills.style.display = 'none';
        indexExperience.style.display = 'none';
        indexEducation.style.display = 'block';
    }
});




