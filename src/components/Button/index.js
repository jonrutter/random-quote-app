import React from 'react';

const Button = (props) => (
  <button
    type={props.type || 'button'}
    className={props.btnType ? `btn btn--${props.btnType}` : 'btn'}
    id={props.id}
    onClick={props.handleClick}
  >
    {props.text}
  </button>
);

export default Button;
