import React, { useContext } from "react"; 
import { Header } from "../components/Header";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerLable } from "../components/AnswerLable";
import { LinkButton } from "../components/LinkButton";
import { QuizContext } from "../context/QuizContext";

const StepThree = () => {
  const { userInfo, setUserInfo } = useContext(QuizContext);
  
  const answerOptions = [
    { id: "variant-1", label: "Смешно", img: "./img/laugh.png" },
    { id: "variant-2", label: "Нравится", img: "./img/hearts.png" },
    { id: "variant-3", label: "Даже незнаю", img: "./img/smirk.png" },
    { id: "variant-4", label: "Восторге", img: "./img/fright.png" },
  ];

  const handleLabelChange = (option) => {
    setUserInfo((prev) => ({ ...prev, answerThree: option }));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <Header headerType="h2" headerText="3. Занимательный вопрос" />
            <ul className="emoji-variants">
              {answerOptions.map((option) => (
                <AnswerLable
                  key={option.id}
                  id={option.id}
                  img={option.img}
                  answerLabel={option.label}
                  labelChange={() => handleLabelChange(option.label)}
                />
              ))}
            </ul>
            <LinkButton path="/step-four" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
