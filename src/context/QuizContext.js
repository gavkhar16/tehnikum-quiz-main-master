import React, { createContext, useReducer } from "react";

// Начальное состояние
const initialState = {
  name: "",
  phone: "",
  selectedCourse: "",
  answerOne: "",
  answerThree: "",
  answerFour: "", // Добавляем поле для 4-го ответа
};

// Редьюсер для обновления состояния
const quizReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_COURSE":
      return { ...state, selectedCourse: action.payload };
    case "SET_ANSWER_ONE":
      return { ...state, answerOne: action.payload };
    case "SET_ANSWER_THREE":
      return { ...state, answerThree: action.payload };
    case "SET_ANSWER_FOUR":
      return { ...state, answerFour: action.payload };
    default:
      return state;
  }
};

// Создаём контекст
export const QuizContext = createContext();

// Компонент провайдера
export const QuizProvider = ({ children }) => {
  const [userInfo, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ userInfo, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
