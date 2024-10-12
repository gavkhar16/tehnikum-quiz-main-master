import React, { useState, useContext, useEffect } from "react";
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

const StepOne = () => {
  const { state, dispatch } = useContext(QuizContext); // Извлекаем state и dispatch
  const [answer, setAnswer] = useState("");
  const [clickkBtn, setClickkBtn] = useState(true);
  const navigate = useNavigate();
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;

  const handleAnswer = () => {
    if (!nameRegex.test(answer)) {
      alert("Ошибка: Введите корректный ответ");
    } else {
      dispatch({ type: "SET_ANSWER_ONE", payload: answer }); // Используем dispatch для обновления состояния
      navigate("/step-two");
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
          <ProgressBar currentStep={1} />
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
              buttonClick={handleAnswer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
