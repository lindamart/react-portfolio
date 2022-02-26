import React from 'react';
import resume from "../assets/lindaResume.pdf"

function Resume() {

    return (
        <section class="mb-5">
            <h1 className="resume">Linda Martinez</h1>
            <hr></hr>
            <div class="row justify-content-center" id="resume">
                <div class="mt-5 pl-5 pr-5">
                    

                    <p class="mt-5">
                    Trainer, Tester and full stack developer with experience Computer Science fundamentals other technologies.
                    </p>
                    <p>
                        Download my full <a href={resume} class="link">resume</a>
                        <br></br>
                    </p>
                </div>
            </div>

            <div class="justify-content-center mt-5">
                <div id="front-back">
                    <h2>Front End Experience</h2>
                    <p>HTML, CSS using Bootstrap and Bulma, JavaScript, jQuery, React.js, IndexedDB</p>
                </div>

                <div id="front-back" class="mt-5">
                    <h2>Back End Experience</h2>
                    <p>
                        Node.js, Express.js, mySQL, Sequelize, NoSQL using MongoDB and Mongoose, API's both third-party, RESTful, server-side, as well as PWAs and Handlebars
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Resume;