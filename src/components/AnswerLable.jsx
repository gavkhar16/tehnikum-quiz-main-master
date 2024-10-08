import React from "react";

export const AnswerLable = ({ answerLabel, id, labelChange, answerImg }) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant"
        id={id}
        onChange={labelChange}
      />
      <label htmlFor={id}>
        {/* Отображаем изображение только если оно передано */}
        {answerImg && <img src={answerImg} alt={answerLabel} />} 
        <p>{answerLabel}</p>
      </label>
    </li>
  );
};
