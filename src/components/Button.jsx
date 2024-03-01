import React, { useState } from 'react';


const Button = ({ onClick, color, text }) => {
    const [hovered, setHovered] = useState(false)

  const buttonStyle = {
    backgroundColor :hovered ? 'dark' + color : color,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    
  };
//   const handleMouseEnter = () => {
//     buttonStyle.backgroundColor = 'dark' + color; // Darken the color on hover
//   };

//   const handleMouseLeave = () => {
//     buttonStyle.backgroundColor = color; // Restore the original color when mouse leaves
//   };


  return (
    <button
    style={buttonStyle}
    onClick={onClick}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
    {text}
  </button>
  );
};

export default Button;
