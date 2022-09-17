import "./styles/index.scss";
import Counter from "./components/Counter";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutePageAsync } from "./pages/AboutePage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense, useContext, useState } from "react";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutePageAsync />} />
          <Route path="/" element={<MainPageAsync />} />{" "}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
