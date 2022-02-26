import React from 'react';
import resume from "../assets/lindaResume.pdf"
import image from "../assets/linda.jpg"

function About() {
  return (
    <section className="title">
      <h1 class="name">About Linda Martinez</h1>
      <hr></hr>

      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
        <img className='mypic' src={image} alt="Logo" />

          <p>After years in the life insurance industry I was given the assignment to help create a new system for our
            new applications and at that moment I was hooked. Every time I had the opportunity I took advantage of any
            chance I could to learn more and more about systems makeup, coding and testing.</p>

          <p>My specialties include quickly learning new skills, technical writing, problem solving, programing languages
            such as Computer Science fundamentals, Javascript, ReactJS, Redux, VueJS, Vuex, NodeJS, MongoDB, CSS,
            HTML and other technologies. I am still eagerly learning additional
            languages to broaden my coding abilities.</p>
            
          <p>
            View full <a href={resume} class="link">resume</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;