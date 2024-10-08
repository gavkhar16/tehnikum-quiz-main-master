import React from "react";


export const AppContainer = ({containerText}) =>{
    return(
        <label className="input-wrapper" htmlFor="username">
     {containerText}
      <input
        required
        type="email"
        name="username"
        id="username"
        placeholder="Ваш ответ"
      />
      <span id="error-message">
        Введите номер в правильном формате например
      </span>
    </label>
    )
}