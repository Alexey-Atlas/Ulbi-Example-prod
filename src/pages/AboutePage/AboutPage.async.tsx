import { lazy } from "react";
// !Важно: для подгрузки импортируемый компонет должен экспортироваться ТОЛЬКО по дефолту
// так используем в реальных проектах
// *** export const AboutePageAsync = lazy(() => import("./AboutPage"));

// чтоб тестить в дев режиме при разработке:
export const AboutePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
// или включить задержку в devTools

// Лэйзи лоадинг надо делать либо для больших чанков, либо для компонентов которые при открытии страницы не
// попадают в пределы вьюпорта, либо для отложенных компонентов, например содержимого модалки, которую
// пользователь может никогда не открыть, потому что это сильно ухудшает UX
