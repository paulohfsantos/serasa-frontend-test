import React from 'react';
import '../../sass/icons.scss';

const Icon = ({ name, variant, onClick }) => {
  return (
    <i className={`icon-${name} ${variant}`} title={name} onClick={onClick}></i>
  );
}

export default Icon;