import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Image} from 'cloudinary-react';

import Hero from '../components/hero';
import SkillCard from '../components/skill_card';

import '../assets/style/aboutpage.scss';


function AboutPage(props) {

  const showSkills = () => {
    return props.skills.map(skill => {
        return <SkillCard skill={skill} key={skill.symbol}/>
      });
  }

  return(
      <div id="aboutpage" >
          <Hero title={props.title} />
          <Container>
            <Image className="avatar mb-5" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId="avatar_i7fl5h" width="250" height="250" crop="thumb" gravtity="face-center" radius="max" />
            <p>Hey, I'm Markus. This year I started my journey in the career path of Software Development.</p>
            <p>So I joined an onsite Bootcamp for Web Development where I learnt Ruby, Ruby on Rails, Javascript, Bootstrap, Heroku, etc.</p>
            <p>Right after that, I attended another Bootcamp online. This course teached me how to develop Mobile Applications with Flutter and Dart. I also got insights in Firebase</p>
            <p>I have a long list of what skills I want to learn in the future. Currently I'm learning React and Redux.</p>
            <Container fluid={true} >
              <Row className='justify-content-around'>
              {showSkills()}
              </Row>
            </Container>
          </Container>
      </div>
  );
}

export default AboutPage;
