import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">Resume: Linda Martinez</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                Trainer, Tester and full stack developer with experience Computer Science fundamentals other technologies. 

                <p class="mt-5">
                <a href="www.linkedin.com/in/linda-m-319246217"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="LindaM LinkedIn"/></a>
                </p>
                <p>
                Download my full <a href="resume??????.pdf" class="link">resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2>front end experience</h2>
                <p>HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery, React.js, Angular.js, IndexedDB</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>back end experience</h2>
                <p>
                Node.js, Express.js, SQL (sqlite, mySQL, postgreSQL), Sequelize, NoSQL (MongoDB, Mongoose), Python, Django, API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;