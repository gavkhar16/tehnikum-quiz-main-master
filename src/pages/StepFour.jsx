import React from "react";
import { Header } from "../components/Header"; // Импортируем компонент заголовка
import { ProgressBar } from "../components/ProgressBar"; // Импортируем компонент прогресс-бара
import { LinkButton } from "../components/LinkButton"; // Импортируем компонент кнопки

const StepFour = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} /> {/* Устанавливаем текущий шаг на 4 */}
          <Header headerType="h2" headerText="4. Занимательный вопрос" /> {/* Заголовок */}
          <div className="question">
            <p className="question__instruction">
              Пожалуйста, выберите один из вариантов:
            </p>
            <ul className="level-variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">1</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">2</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">3</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">4</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-5" />
                <label htmlFor="variant-5">5</label>
              </li>
            </ul>
            <LinkButton path="/thanks" /> {/* Кнопка для перехода к Thank You */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
