import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../assets/style/skill_card.scss';


function SkillCard(props) {

  const handleMouseEnter = (e) => {
    e.target.style.color=props.skill.color;
      };

  const handleMouseLeave = (e) => {
    e.target.style.color='#F0EDEE';
      };

  return(
    <div>
      <FontAwesomeIcon className="skill_icon" icon={[props.skill["fa-type"], props.skill["fa-symbol"]]} size="6x" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}/>
    </div>
  );
}

export default SkillCard;
