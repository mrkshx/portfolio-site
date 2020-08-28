import React from 'react';
import Hero from '../components/hero';

import '../assets/style/projectpage.scss';


function ProjectPage(props) {

  return(
      <div id="projectpage" >
        <Hero title={props.title} ></Hero>
      </div>
  );
}

export default ProjectPage;
