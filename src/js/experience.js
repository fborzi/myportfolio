const neorisEnglish = `
    Worked on REST APIs with a custom-made framework based on Java Spring boot for the BBVA bank.
    Functional analysis of assigned projects, working pair to pair with the client.
    Worked with Jira as a backlog, bitbucket for repositories, and Git for code versioning on Agile Scrum teams.
    Worked with DBMS such as Oracle, PostgreSQL, and MySQL.
    Co-worked with Cobol Host Services (TS Queues).
`;

const digitalSoundEnglish = `
    Automation of the company through management software.
    Developed and designed social media content.
    Worked in the Sales and Customer Service Department.
    Cleaned and did support for PS3/ PS4.
    Worked in technical service and PC assembly.
    Repaired smartphones.
`;

const cyanEnglish = `
    Best recruiter for the company’s loyalty system for eight consecutive months.
    Trained new personnel for the Front Office Department.
    Solved several problems that linked different areas of the company.
    General Manager offered me the Reception Manager position before leaving the company.
`;

const rotaryEnglish = `
    Automation of the company through managementsoftware.
    Worked in the Sales and Customer Service Department.
    Developed and designed social media content.
    Worked in technical service and PC assembly.
    Cleaned and did support for PS3/ PS4.
    Repaired smartphones.
`;

const neorisSpanish = `
    Desarrollo de API REST para BBVA con framework propio basado en Java Spring boot.
    Análisis funcional de proyectos en reuniones con el cliente.
    Desarrollo de la correspondiente documentación.
    Utilización de Jira como backlog, bitbucket como repositorio y Git como versionado de código.
    Utilización de bases de datos Oracle, PostgreSQL y MySQL.
    Trabajo en conjunto con Cobol Host Services (Colas TS).
`;

const digitalSoundSpanish = `
    Automatización de la empresa a través de un software de gestión.
    Ventas y atención al público.
    Desarrollo y diseño de contendido para las redes sociales.
    Servicio técnico y armado de PCs.
    Limpieza y soporte de PS3 / PS4.
    Reparación de celulares.
`;

const cyanSpanish = `
    Mejor afiliador de huéspedes a sistema de fidelización de la empresa por 8 meses consecutivos.
    Encargado de entrenar personal nuevo para la recepción.
    Ofrecimiento de Jefe de Recepción antes de dejar la empresa.
    Resolución de problemas que concatenaban varias áreas de la empresa.
`;

const rotarySpanish = `
    Mejor afiliador de huéspedes a sistema de fidelización de la empresa por 8 meses consecutivos.
    Encargado de entrenar personal nuevo para la recepción.
    Ofrecimiento de Jefe de Recepción antes de dejar la empresa.
    Resolución de problemas que concatenaban varias áreas de la empresa.
`;

export const renderExperience = ( indexExperience ) => {
    const experienceSection = document.createElement('div');
    experienceSection.innerHTML = `
        <div class="container d-flex justify-content-end">
            <button role="button" id="translateButtonExperience" class="btn btn-light float-md-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
                </svg>
            </button>
        </div>
        <!-- The Timeline -->
        <ul class="timeline">
            <!-- Item 1 -->
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="flag">Developer</span>
                        <span class="time-wrapper"><span class="time rounded-1">Aug, 2022 - present</span></span>
                    </div>
                    <div class="desc rounded" id="englishNeoris" style="display: block;">
                        ${neorisEnglish}
                    </div>
                    <div class="desc rounded" id="spanishNeoris" style="display: none;">
                        ${neorisSpanish}
                    </div>
                </div>
            </li>
        
            <!-- Item 2 -->
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="flag">Digital Sound</span>
                        <span class="time-wrapper"><span class="time rounded-1">Jan, 2019 - Aug, 2022</span></span>
                    </div>
                    <div class="desc rounded" id="englishDigital" style="display: block;">
                        ${digitalSoundEnglish}
                    </div>
                    <div class="desc rounded" id="spanishDigital" style="display: none;">
                        ${digitalSoundSpanish}
                    </div>
                </div>
            </li>
        
            <!-- Item 3 -->
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="flag">Cyan Recoleta Hotel</span>
                        <span class="time-wrapper"><span class="time rounded-1">May, 2016 - Dec, 2018</span></span>
                    </div>
                    <div class="desc rounded" id="englishCyan" style="display: block;">
                        ${cyanEnglish}
                    </div>
                    <div class="desc rounded" id="spanishCyan" style="display: none;">
                        ${cyanSpanish}
                    </div>
                </div>
            </li>
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="flag">Rotary Club</span>
                        <span class="time-wrapper"><span class="time rounded-1">Jan, 2012 - Jul, 2012</span></span>
                    </div>
                    <div class="desc rounded" id="englishRotary" style="display: block;">
                        ${rotaryEnglish}
                    </div>
                    <div class="desc rounded" id="spanishRotary" style="display: none;">
                        ${rotarySpanish}
                    </div>
                </div>
            </li>
        </ul>
    `;

    indexExperience.appendChild(experienceSection);

}

