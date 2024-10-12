import React, { useContext } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerLable } from "../components/AnswerLable";
import { LinkButton } from "../components/LinkButton";
import { QuizContext } from "../context/QuizContext"; 

const StepFour = () => {
  const { userInfo, dispatch } = useContext(QuizContext); // Достаём данные и dispatch из контекста

  // Варианты для StepFour
  const variants = [
    { id: "variant-1", answerLabel: "1" },
    { id: "variant-2", answerLabel: "2" },
    { id: "variant-3", answerLabel: "3" },
    { id: "variant-4", answerLabel: "4" },
    { id: "variant-5", answerLabel: "5" },
  ];

  // Обработка выбора варианта
  const handleVariantSelection = (variantLabel) => {
    dispatch({ type: "SET_ANSWER_FOUR", payload: variantLabel }); // Обновляем ответ на 4-й вопрос в контексте
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} /> {/* Прогресс-бар */}
          <div className="question">
            <Header headerType="h2" headerText="4. Занимательный вопрос" /> {/* Заголовок */}
            <ul className="level-variants">
              {variants.map((variant) => (
                <AnswerLable
                  key={variant.id}
                  id={variant.id}
                  answerLabel={variant.answerLabel}
                  labelChange={() => handleVariantSelection(variant.answerLabel)} // Выбор варианта
                />
              ))}
            </ul>
            <LinkButton path="/thanks" /> {/* Кнопка для перехода */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
