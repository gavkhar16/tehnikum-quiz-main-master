// Welcome.js
import React, { useState, useContext, useEffect } from "react";
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import { ThemeContext, themes } from "../context/themeContext";

const Welcome = () => {
  const { dispatch } = useContext(QuizContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [checkBtn, setCheckBtn] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const navigate = useNavigate();

  const phoneRegex = /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;

  const goToNextPage = () => {
    dispatch({ type: "SET_NAME", payload: nameValue });
    dispatch({ type: "SET_PHONE", payload: phoneValue });
    navigate("/step-one");
  };

  const handleClick = () => {
    const isNameError = !nameRegex.test(nameValue);
    const isPhoneError = !phoneRegex.test(phoneValue);

    setNameError(isNameError);
    setPhoneError(isPhoneError);

    if (!isNameError && !isPhoneError) {
      goToNextPage();
    }
  };

  useEffect(() => {
    if (nameValue && phoneValue) {
      setCheckBtn(false);
    } else {
      setCheckBtn(true);
    }
  }, [nameValue, phoneValue]);

  return (
    <div className={`container ${theme === themes.dark ? "_dark" : ""}`}>
      <div className="wrapper">
        <div className="welcome">
          <button onClick={toggleTheme}>Смена темы</button>
          <Header headerType="h1" headerText="Добро пожаловать в квиз от лучшего учебного центра" />
          <form className="welcome__form">
            <AppLabel
              labelText="Ваше имя"
              hasError={nameError}
              errorText="Введите имя в правильном формате"
              id="username"
              isRequired
              inputPlaceholder="Имя"
              inputType="text"
              labelValue={nameValue}
              labelChange={setNameValue}
            />
            <AppLabel
              labelText="Ваш номер телефона"
              errorText="Введите номер в правильном формате"
              id="phone"
              hasError={phoneError}
              isRequired
              inputPlaceholder="+998 9- --- -- --"
              inputType="text"
              labelValue={phoneValue}
              labelChange={setPhoneValue}
            />
            <AppButton isDisabled={checkBtn} buttonClick={handleClick} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
