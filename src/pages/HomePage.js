import React from 'react';

import Hero from '../components/hero';
import SkillCard from '../components/skill_card';

function HomePage(props) {

  return(
    <div>
      <Hero title={props.title} subtitle={props.subtitle} note={props.note}></Hero>
      <SkillCard/>
    </div>
  );
}

export default HomePage;
