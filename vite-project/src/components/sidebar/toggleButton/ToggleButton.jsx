import React from 'react'
import "./toggleButton.css"

const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <a href="#"><img src="/button.png" alt="" /></a>
    </button>
  );
};

export default ToggleButton;
