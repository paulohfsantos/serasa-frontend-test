import React from 'react';
import Icon from '../Icon';

const Star = ({ filled, onClick }) => {
  return (
    <Icon name="star" variant={filled ? "yellow" : "dark"} onClick={onClick} />
  );
}

export default Star;