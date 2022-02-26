import React from 'react'; 
import ProjectCards from '../components/project'
import portfolio from '../portfolioData.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section>
          <div className="project">
            <h1 className="title">Linda Martinez</h1>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;