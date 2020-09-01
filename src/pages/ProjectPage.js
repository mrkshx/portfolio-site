import React from 'react';
import Hero from '../components/hero';

import ConstructionBanner from '../components/construction';

import '../assets/style/projectpage.scss';


function ProjectPage(props) {

  return(
      <div id="projectpage" >
        <Hero title={props.title} ></Hero>
        <ConstructionBanner/>
      </div>
  );
}

export default ProjectPage;
