import React from "react";

function Button({ name, onClick, disabled }) {
  return (
    <>
      <button
        type="button"
        className="myButton"
        onClick={onClick}
        disabled={disabled}
      >
        {name}
      </button>
    </>
  );
}

export default Button;
