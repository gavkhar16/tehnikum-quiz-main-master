import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Thanks = () => {
  const { userInfo } = useContext(QuizContext);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          <p>Имя: {userInfo.name}</p>
          <p>Телефон: {userInfo.phone}</p>
          <p>Выбранный курс: {userInfo.selectedCourse}</p>
          <p>Ответ на 1 вопрос: {userInfo.answerOne}</p>
          <p>Ответ на 3 вопрос: {userInfo.answerThree}</p>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
