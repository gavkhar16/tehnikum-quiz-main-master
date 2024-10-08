import React from "react";
import Welcome from "./pages/Welcome";
import Registration from "./pages/Registration";
import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "../src/pages/Thanks";

// Создаем маршрутизатор
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/step-one",
    element: <StepOne />,
  },
  {
    path: "/step-two",
    element: <StepTwo />,
  },
  {
    path: "/step-three",
    element: <StepThree />,
  },
  {
    path: "/step-four",
    element: <StepFour />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
]);

const App = () => {
  return (
    <div className="App">
    
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
