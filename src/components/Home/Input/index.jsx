import React from "react";
import Arrow from 'images/icon-arrow.svg'
import './style.css'

export const Input = () => {
  return (
    <div className="input__container">
      <input type="text" placeholder="Email Address" className="input"></input>
      <button className="input_button">
        <img src={Arrow} alt="logo" />
      </button>
    </div>
  );
};
