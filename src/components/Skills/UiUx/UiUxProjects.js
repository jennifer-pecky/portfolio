import React from 'react';
import {Link} from 'react-router-dom';
import project3 from '../../../Assets/IMS trending.png';
import project1 from '../../../Assets/FF watches.png';
import project2 from '../../../Assets/Paybox-screenshot.png';
import externallinkicon from '../../../Assets/external-link-alt-solid.svg';
import githubicon from '../../../Assets/github-brands.svg';
import Footer from '../../Footer/Footer';

const UiUxProjects = () => {

    return(
       <div className="project-section">
         <div className="title">
             <div className="line"></div>
             <div className="text">
                 <p>Projects</p>
             </div>
         </div>

        <div className="projects">
        <div className="project-1">
        <div className="project-img">
      <img src={project1} alt="project" />
        </div>
        <div className="project-text">
          <h1 className="project-h1">FashionFiesta</h1>
          <p>sample text  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
               doloremque laudantium, totam rem aperiam.
          </p>
          <ul>
              <li>Html</li>
              <li>CSS</li>
              <li>React</li>
              <li>Javascript</li>
              <li>Redux</li>
          </ul>
          <div className="links">
                  <div className="livelink">
                     <div className="link">
                     <Link to='/'>
                      <p>Live link</p>
                      </Link>
                      <img src={externallinkicon} alt="livelink" />
                     </div>
                     <div className="link">
                     <Link to='/'>
                      <p>Code</p>
                      </Link>
                      <img src={githubicon} alt="livelink" />
                     </div>
                  </div>
          </div>
        </div>
        </div>    
        </div> 

        <div className="projects">
        <div className="project-1">
        <div className="project-img" id="img-2">
      <img src={project2} alt="project" />
        </div>
        <div className="project-text">
          <h1 className="project-h1">Paybox</h1>
          <p>sample text  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
               doloremque laudantium, totam rem aperiam.
          </p>
          <ul>
              <li>Html</li>
              <li>CSS</li>
              <li>React</li>
              <li>Javascript</li>
              <li>Redux</li>
          </ul>
          <div className="links">
                  <div className="livelink">
                     <div className="link">
                     <Link to='/'>
                      <p>Live link</p>
                      </Link>
                      <img src={externallinkicon} alt="livelink" />
                     </div>
                     <div className="link">
                     <Link to='/'>
                      <p>Code</p>
                      </Link>
                     <Link to="/">
                     <img src={githubicon} alt="livelink" />
                     </Link>
                     </div>
                  </div>
          </div>
        </div>
        </div>    
        </div> 

        <div className="projects">
        <div className="project-1">
        <div className="project-img" id="img-3">
      <img src={project3} alt="project" />
        </div>
        <div className="project-text">
          <h1 className="project-h1">Instamoviesearch</h1>
          <p>sample text  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
               doloremque laudantium, totam rem aperiam.
          </p>
          <ul>
              <li>Html</li>
              <li>CSS</li>
              <li>React</li>
              <li>Javascript</li>
              <li>Redux</li>
          </ul>
          <div className="links">
                  <div className="livelink">
                     <div className="link">
                     <Link to='/'>
                      <p>Live link</p>
                      </Link>
                      <img src={externallinkicon} alt="livelink" />
                     </div>
                     <div className="link">
                     <Link to='/'>
                      <p>Code</p>
                      </Link>
                      <img src={githubicon} alt="livelink" />
                     </div>
                  </div>
          </div>
        </div>
        </div>    
        </div> 
       <Footer />
       </div>
    )
}

export default UiUxProjects;