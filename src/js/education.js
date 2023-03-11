
export const renderEducation = ( indexEducation ) => {
    indexEducation.innerHTML = `
        <div class="container mt-5">
            <h1 id="homeTitle">Courses.</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="card" id="udemy" style="width: 18rem;">
                        <a href="/assets/images/solid.jpg" download>
                            <img class="card-img-top" id="img1" src="/assets/images/solid.jpg" alt="solid">
                        </a>
                        <div class="card-body">
                            <p class="card-text">SOLID Principles and Clean Code.</p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card" id="udemy" style="width: 18rem;">
                        <a href="/assets/images/scrum-estimation.jpg" download>
                            <img class="card-img-top" id="img1" src="/assets/images/scrum-estimation.jpg" alt="scrum-estimation">
                        </a>
                        <div class="card-body">
                            <p class="card-text">Master Agile Estimation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <h1 id="homeTitle">Education.</h1>
        </div>
        <div class="container">
            <div class="row mb-5">
                <div class="col-3">
                    <div class="card" id="university" style="width: 18rem;">
                        <a href="https://sitio.unnoba.edu.ar/" target="_blank">
                            <img class="card-img-top" id="img1" src="/assets/images/unnoba.png" alt="unnoba">
                        </a>
                        <div class="card-body">
                            <p class="card-text">Software Development</p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card" id="university" style="width: 18rem;">
                        <a href="https://www.cepec.edu.ar/" target="_blank">
                            <img class="card-img-top" id="img1" src="/assets/images/suisse.png" alt="la-suisse">
                        </a>
                        <div class="card-body">
                            <p class="card-text">Hotel Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


