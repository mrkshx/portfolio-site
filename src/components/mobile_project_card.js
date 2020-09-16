import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Image, Video, Transformation } from 'cloudinary-react';

import '../assets/style/mobile_project_card.scss';


class MobileProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: `${this.props.image}_image`,
      disabled: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({
      image: `${this.props.image}_mp4`,
      disabled: true,
    })
  };

  handleMouseLeave = () => {
    this.setState({
      image: `${this.props.image}_image`,
      disabled: false,
      autoplay: false
    })
  };

  render() {
    return(
      <Card className="mobile-project-card" text="white" onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}>
        <Image hidden={this.state.disabled} className="card-img " cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId={`${this.props.image}_image`} alt={`${this.props.name} image`}>
          <Transformation quality="auto" fetchFormat="auto" width="450" crop="scale" />
        </Image>
        <Video ref={this.vidRef} hidden={!this.state.disabled} className="card-img" cloudName={process.env.REACT_APP_CLOUDINARY_CLOUDNAME} publicId={`${this.props.image}_mp4`} alt={`${this.props.name} image`} playsInline muted loop autoPlay >
          <Transformation quality="auto" fetchFormat="auto"/>
        </Video>

        <Card.ImgOverlay className="mobile-project-card-img-overlay" >
          <div className="mobile-project-card-text" >
            <Card.Title className="mobile-project-card-header">{this.props.name}</Card.Title>
            <Card.Text className="mobile-project-card-description" >{this.props.description}</Card.Text>
          </div>
          <Card.Text className="mobile-project-card-disclaimer" >This app was developed during Flutter Bootcamp</Card.Text>
        </Card.ImgOverlay>
      </Card>
    );
  }
}

export default MobileProjectCard;
