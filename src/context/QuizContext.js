import React, { createContext, useState } from "react";


export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    selectedCourse: "",
    answerOne: "",
    answerTwo: "",
    answerThree: "",
  });

  return (
    <QuizContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </QuizContext.Provider>
  );
};
