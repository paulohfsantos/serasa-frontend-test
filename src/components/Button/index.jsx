import React from 'react';
import './style.scss';

const Button = ({ children, onClick, variant, className, type, outline }) => {
  const classNames = ['button'];

  if (variant) classNames.push(`button--${variant}`);

  if (variant && outline) classNames.push(`button--outline--${variant}`);

  if (className) classNames.push(className);

  return (
    <button className={classNames.join(' ')} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
