import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SkillCard(props) {

  const handleMouseEnter = (e) => {
    e.target.style.color=props.skill.color;
      };

  const handleMouseLeave = (e) => {
    e.target.style.color='black';
      };

  return(
    <div>
      <FontAwesomeIcon icon={[props.skill.symboltype, props.skill.symbol]} size="6x" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
    </div>
  );
}

export default SkillCard;
