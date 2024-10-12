import React, { useContext, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerLable } from "../components/AnswerLable";
import { LinkButton } from "../components/LinkButton";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate

const StepTwo = () => {
  const { dispatch } = useContext(QuizContext); // Извлекаем dispatch
  const navigate = useNavigate(); // Получаем функцию навигации
  const [selectedCourse, setSelectedCourse] = useState(null); // Храним выбранный курс

  const variants = [
    { id: "variant-1", coursName: "Frontend" },
    { id: "variant-2", coursName: "Python" },
    { id: "variant-3", coursName: "Data Analytics" },
    { id: "variant-4", coursName: "UX/UI" },
  ];

  const handleCourseSelection = (courseName) => {
    setSelectedCourse(courseName); // Сохраняем выбранный курс
  };

  const handleNextStep = () => {
    if (selectedCourse) {
      dispatch({ type: "SET_COURSE", payload: selectedCourse }); // Диспетчеризуем курс
      navigate("/step-three"); // Переходим на следующий шаг
    } else {
      alert("Пожалуйста, выберите курс."); // Предупреждение, если курс не выбран
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Header headerType="h2" headerText="Какой курс вас интересует?" />
            <ul className="variants">
              {variants.map((elem) => (
                <AnswerLable
                  id={elem.id}
                  answerLabel={elem.coursName}
                  key={elem.id}
                  labelChange={() => handleCourseSelection(elem.coursName)} // Вызываем при выборе
                  isSelected={selectedCourse === elem.coursName} // Можем использовать для стилизации выбранного варианта
                />
              ))}
            </ul>
            <LinkButton path="/step-three" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
