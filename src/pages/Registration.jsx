import React from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppContainer } from "../components/AppContainer";
import { AppPassword } from "../components/AppPassword";

 const Registration = () => {
    return(
            <div>
                <Header headerText="Регистрация"/>
                <AppContainer labelText="Введите Email" />
                <AppPassword passwordText="Введите пароль" />
                <AppPassword passwordText="Введите ещё раз пароль" />
                <AppButton buttonText="Готово" />
            </div>
    
    )
}
export default Registration;