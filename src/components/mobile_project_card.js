import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Image} from 'cloudinary-react';

import '../assets/style/mobile_project_card.scss';


class MobileProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
    }
  }

  handleMouseEnter = () => {
    this.setState({
      image: this.props.gif
    })
  };

  handleMouseLeave = () => {
    this.setState({
      image: this.props.image
    })
  };

  render() {
    return(
      <Card className="mobile-project-card" text="white" onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}>
        <Image className="card-img mobile-project-image" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId={this.state.image} />
        <Card.ImgOverlay className="mobile-project-card-img-overlay" >
          <div className="mobile-project-card-text" >
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    );
  }
}

export default MobileProjectCard;
