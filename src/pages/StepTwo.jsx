import React, { useContext } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerLable } from "../components/AnswerLable";
import { LinkButton } from "../components/LinkButton";
import { QuizContext } from "../context/QuizContext";

const StepTwo = () => {
  const { userInfo, setUserInfo } = useContext(QuizContext);
  const variants = [
    { id: "variant-1", coursName: "Frontend" },
    { id: "variant-2", coursName: "Python" },
    { id: "variant-3", coursName: "Data Analytics" },
    { id: "variant-4", coursName: "UX/UI" },
  ];

  const handleCourseSelection = (courseName) => {
    setUserInfo((prev) => ({ ...prev, selectedCourse: courseName }));
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
                  labelChange={() => handleCourseSelection(elem.coursName)}
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
