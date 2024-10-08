import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerLable } from "../components/AnswerLable";
import { AppButton } from "../components/AppButton";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { LinkButton } from "../components/LinkButton";

const StepTwo = () => {
  const [course, setCourse] = useState(null);
  const variants = [
    {
      id: "variant-1",
      coursName: "Frontend",
    },
    {
      id: "variant-2",
      coursName: "Pyton",
    },
    {
      id: "variant-3",
      coursName: "Data Annlytics",
    },
    {
      id: "variant-4",
      coursName: "UX/Ui",
    },
  ];
  console.log(course);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Header headerType="h2" headerText="Какой курс вас интересует?" />
            <ul className="variants">
              {
              variants.map((elem) => (
                <AnswerLable
                  id={elem.id}
                  answerLabel={elem.coursName}
                  key={elem.id}
                  labelChange={()=>setCourse(elem.coursName)} 
                />
              ))
              }
              
              
            </ul>
            <LinkButton path="/step-three"/>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
