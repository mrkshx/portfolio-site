import React, { Component } from 'react';
import firebase from "../FireStore";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Image, Transformation } from 'cloudinary-react';

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
              <Image className="avatar mb-5" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId="portfolio/landing_avatar" alt="About Avatar" >
                <Transformation quality="auto" fetchFormat="auto" width="400" crop="scale" />
              </Image>
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
