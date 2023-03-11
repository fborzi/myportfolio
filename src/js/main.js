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

renderHeader( indexHeader );

renderHome( indexHome );

const homeButton = document.querySelector('#homeButton');
const aboutButton = document.querySelector('#aboutButton');
const skillButton = document.querySelector('#skillButton');
const experienceButton = document.querySelector('#experienceButton');
const educationButton = document.querySelector('#educationButton');

homeButton.addEventListener( 'click', () => {

    if(indexHome.style.display === 'none'){
        indexHome.style.display = 'block';
        indexAbout.style.display = 'none';
        indexSkills.style.display = 'none';
        indexExperience.style.display = 'none';
        indexEducation.style.display = 'none';
    }
});

aboutButton.addEventListener( 'click', () => {
    renderAbout( indexAbout );
  
    if(indexAbout.style.display === 'none'){
        indexHome.style.display = 'none';
        indexAbout.style.display = 'block';
        indexSkills.style.display = 'none';
        indexExperience.style.display = 'none';
        indexEducation.style.display = 'none';
    }
});

skillButton.addEventListener( 'click', () => {
    renderSkills( indexSkills );

    if(indexSkills.style.display === 'none'){
        indexHome.style.display = 'none';
        indexAbout.style.display = 'none';
        indexSkills.style.display = 'block';
        indexExperience.style.display = 'none';
        indexEducation.style.display = 'none';
    }
});

experienceButton.addEventListener( 'click', () => {
    renderExperience( indexExperience );

    if(indexExperience.style.display === 'none'){
        indexHome.style.display = 'none';
        indexAbout.style.display = 'none';
        indexSkills.style.display = 'none';
        indexExperience.style.display = 'block';
        indexEducation.style.display = 'none';
    }
});

educationButton.addEventListener( 'click', () => {
    renderEducation( indexEducation );

    if(indexEducation.style.display === 'none'){
        indexHome.style.display = 'none';
        indexAbout.style.display = 'none';
        indexSkills.style.display = 'none';
        indexExperience.style.display = 'none';
        indexEducation.style.display = 'block';
    }
});




