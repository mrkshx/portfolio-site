import React from 'react';
import Container from 'react-bootstrap/Container';
import {Image} from 'cloudinary-react';

import Hero from '../components/hero';


function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Container>
              <Image className="mb-5" cloudName="demo" publicId="sample" width="250" height="250" crop="scale" radius="max" />
              <p>Hey, I'm Markus. This year I started my journey a the career path Software Development.</p>
              <p>So I joined an onsite Bootcamp for Web Development where I learnt Ruby, Ruby on Rails, Javascript, Bootstrap, Heroku, etc.</p>
              <p>Right after that, I attended another Bootcamp online. This course teached me how to develop Mobile Applications with Flutter and Dart. I also got insights in Firebase</p>
              <p>I have a long list of what skills I want to learn in the future. Currently I'm learning React and Redux.</p>
            </Container>
        </div>
    );

}

export default AboutPage;
