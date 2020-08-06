import React from 'react';

import Hero from '../components/hero';
import SkillCard from '../components/skill_card';

function HomePage(props) {

  const showSkills = () => {
    return props.skills.map(skill => {
        return <SkillCard/>
      });

  }

  return(
    <div>
      <Hero title={props.title} subtitle={props.subtitle} note={props.note}></Hero>
      {showSkills()}
    </div>
  );
}

export default HomePage;
