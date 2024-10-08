import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;  
  const [answer, setAnswer] = useState("");
  const [clickkBtn, setClickkBtn] = useState(true);
  
  // Определяем функцию errorClick
  const errorClick = () => {
    if (!nameRegex.test(answer)) {
      alert("Ошибка: Введите корректный ответ");
    } else {
      alert("Ответ принят");
    }
  };

  useEffect(() => {
    if (nameRegex.test(answer)) {
      setClickkBtn(false); 
    } else {
      setClickkBtn(true);  
    }
  }, [answer]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1}/>
          <div className="question">
            <Header headerType="h2" headerText="1. Занимательный вопрос" />
            <AppLabel
              isRequired
              id="answer"
              inputPlaceholder="Ваш ответ"
              inputType="text"
              labelValue={answer}
              labelChange={setAnswer}
            />
            <AppButton
              buttonText="Далее"
              isDisabled={clickkBtn}
              id="next-btn"
              buttonType="button"
              buttonClick={errorClick} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
