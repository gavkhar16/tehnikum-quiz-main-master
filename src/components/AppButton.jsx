import React from "react";

export const AppButton = ({ buttonText="Далее", buttonType, isDisabled, buttonClick,  }) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType === "submit" ? "submit" : "button"}
      id="next-btn"
      onClick={buttonClick}
    >
      {buttonText}
    </button>
  );
};
