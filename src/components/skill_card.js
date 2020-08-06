import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SkillCard(props) {

  return(
    <div>
      <FontAwesomeIcon icon={[props.skill.symboltype, props.skill.symbol]} size="6x"/>
    </div>
  );
}

export default SkillCard;
