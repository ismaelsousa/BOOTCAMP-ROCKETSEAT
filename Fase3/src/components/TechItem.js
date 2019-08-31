import React from 'react';
import PropsTypes from 'prop-types';
function TechItem({tech, onDelete}){
  return (
    <li>
      {tech}
      <button type='button' onClick={onDelete}>Remover</button>
    </li>
  )
}

TechItem.defaultProps = {
  tech: 'Oculto'
}

TechItem.propTypes = {
  tech: PropsTypes.string,
  onDelete: PropsTypes.func.isRequired
}

export default TechItem