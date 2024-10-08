import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppLabel } from "../components/AppLabel";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate()
  const phoneRegex =
    /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [checkBtn, setCheckBtn] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const goToNextPage= ()=> {
    navigate("/step-two")
  }

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
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
            headerType="h1"
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppLabel
              labelText="Ваше имя"
              hasError={nameError}
              errorText="Введитеимя имя в правильном формате"
              id="username"
              isRequired
              inputPlaceholder="Имя"
              inputType="text"
              labelValue={nameValue}
              labelChange={setNameValue}
            />
            <AppLabel
              labelText="Ваш номере телефона"
              errorText="Введите номер в правильном формате"
              id="phone"
              hasError={phoneError}
              isRequired={true}
              inputPlaceholder="+998 9- --- -- --"
              inputType="text"
              labelValue={phoneValue}
              labelChange={setPhoneValue}
            />
            <AppButton
              isDisabled={checkBtn}
              buttonClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
