import React from "react";


export const AppPassword = ({passwordText}) =>{
    return(
      <label className="input-wrapper" htmlFor="username">
     {passwordText}
      <input
        required
        type="password"
        name="username"
        id="username"
        placeholder="Ваш ответ"
      />
      <span id="error-message">
        Введите номер в правильном формате например
      </span>
    </label>
     );
}