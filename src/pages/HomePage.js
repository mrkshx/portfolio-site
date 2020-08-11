import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Hero from '../components/hero';
import SkillCard from '../components/skill_card';

function HomePage(props) {

  const showSkills = () => {
    return props.skills.map(skill => {
        return <SkillCard skill={skill} key={skill.symbol}/>
      });

  }

  return(
    <div>
      <Hero title={props.title} subtitle={props.subtitle} note={props.note}></Hero>
      <Container fluid={true} >
        <Row className='justify-content-around'>
          {showSkills()}
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
