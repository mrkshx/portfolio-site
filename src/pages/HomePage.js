import React from 'react';

import Hero from '../components/hero';

function HomePage(props) {

  return(
    <Hero title={props.title} subtitle={props.subtitle} note={props.note}></Hero>
  );
}

export default HomePage;
