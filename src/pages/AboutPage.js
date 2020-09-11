import React, { Component } from 'react';
import firebase from "../FireStore";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Image} from 'cloudinary-react';

import Hero from '../components/hero';
import SkillCard from '../components/skill_card';

import '../assets/style/aboutpage.scss';


class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    }
  }

  showSkills = () => {
    return this.state.skills.map(skill => {
      return(
        <SkillCard
          skill={skill}
          key={skill["fa-symbol"]}
        />
      );
    });
  }

  getSkills = () => {
    const db = firebase.firestore();
    db.collection("skills").orderBy('name').get().then((querySnapshot) => {
      const skills = querySnapshot.docs.map(skill => skill.data());
      this.setState({skills});
    })
  }

  componentDidMount() {
    this.getSkills()
  }

  render() {
    return(
        <div id="aboutpage" >
            <Hero title={this.props.title} />
            <Container>
              <picture>
                <source srcSet="https://res.cloudinary.com/dyrcmbg1b/image/upload/w_250,h_250/v1599827809/portfolio/landing_avatar_j85x2i.webp" type="image/webp" />
                <source srcSet="https://res.cloudinary.com/dyrcmbg1b/image/upload/w_250,h_250/v1598405036/portfolio/landing_avatar_oerydq.jpg" type="image/jpeg" />
                <Image className="avatar mb-5" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId="portfolio/landing_avatar_oerydq" alt="About Avatar" width="250" height="250" radius="max" />
              </picture>
              <p>Hey, I'm Markus. This year I started my journey in the career path of Software Development.</p>
              <p>So I joined an onsite Bootcamp for Web Development where I learnt Ruby, Ruby on Rails, Javascript, Bootstrap, Heroku, etc.</p>
              <p>Right after that, I attended another Bootcamp online. This course teached me how to develop Mobile Applications with Flutter and Dart. I also got insights in Firebase</p>
              <p>I have a long list of what skills I want to learn in the future. Currently I'm learning React and Redux.</p>
              <Container fluid={true} >
                <Row className='justify-content-around'>
                {this.showSkills()}
                </Row>
              </Container>
            </Container>
        </div>
    );
  }
}

export default AboutPage;
