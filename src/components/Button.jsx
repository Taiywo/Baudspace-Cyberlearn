import React, { useState } from 'react';


const Button = ({ text }) => {
  

const onClicked = () => {
  window.open('https://www.google.com', '_blank');
};
  return (
    <button
    className={`bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded`}
    onClick={onClicked}
    
  >
    {text}
  </button>
  );
};

export default Button;
