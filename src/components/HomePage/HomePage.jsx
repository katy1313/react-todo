// import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  //   const navigate = useNavigate(); // Получаем функцию для навигации

  //   const handleGoToLogin = () => {
  //     navigate("/login"); // Перенаправляем на страницу логина с помощью useNavigate
  //   };

  return (
    <div>
      <h1>Home Page</h1>
      {/* Первый вариант перенаправления — использование Link для навигации через маршрут */}
      <Link to="/todos">Go to TodoList</Link>

      {/* Второй вариант перенаправления — использование кнопки с обработчиком события */}
      {/* <button onClick={handleGoToLogin}>Go to Login</button> */}
      {/* Кнопка с событием onClick, которая срабатывает
       и вызывает функцию для программного перенаправления */}
       <Link ></Link>
    </div>
  );
};

export default HomePage;