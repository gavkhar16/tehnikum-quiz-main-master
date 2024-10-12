import React, { useContext, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerLable } from "../components/AnswerLable";
import { LinkButton } from "../components/LinkButton";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

import laughImg from "../img/laugh.png";
import heartsImg from "../img/bell.png";
import smirkImg from "../img/smirk.png";
import frightImg from "../img/fright.png";

const StepThree = () => {
  const { dispatch } = useContext(QuizContext);
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(null); // Храним выбранный вариант

  const variants = [
    { id: "variant-1", label: "Ваш ответ 1", imgSrc: laughImg },
    { id: "variant-2", label: "Ваш ответ 2", imgSrc: heartsImg },
    { id: "variant-3", label: "Ваш ответ 3", imgSrc: smirkImg },
    { id: "variant-4", label: "Ваш ответ 4", imgSrc: frightImg },
  ];

  const handleNextStep = () => {
    if (selectedVariant) {
      dispatch({ type: "SET_VARIANT", payload: selectedVariant });
      navigate("/step-four"); // Переход на следующий шаг
    } else {
      alert("Пожалуйста, выберите вариант."); // Предупреждение, если вариант не выбран
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <Header headerType="h2" headerText="3. Занимательный вопрос" />
            <ul className="emoji-variants">
              {variants.map((variant) => (
                <li className="variant-wrapper" key={variant.id}>
                  <AnswerLable
                    id={variant.id}
                    answerLabel={variant.label}
                    imgSrc={variant.imgSrc}
                    labelChange={() => setSelectedVariant(variant.id)}
                  />
                </li>
              ))}
            </ul>
            <button type="button" onClick={handleNextStep} disabled={!selectedVariant}>
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
