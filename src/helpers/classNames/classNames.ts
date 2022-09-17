// позволяет создавать объекты с ключом строки и значением строки или булевого типа
type Mods = Record<string, string | boolean>;

// принимает главный класс(rootCls), модификаторы(mods), массив доп. классов
export const classNames = (
  rootCls: string,
  mods: Mods,
  additional: string[]
): string => {
  return [
    // возвращаем главный класс
    rootCls,
    // проходим по объекту, преобразовываем его в массив, фильтруем по трушному value и возвращаем только иассив ключей
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key),
    // добавляем доп. классы
    ...additional,
    // склевиаем строку из массива по пробелу
  ].join(" ");
};

// пример вызова и результат
// classNames("remove-btn", { hovered: true, selectable: true, red: false }, [
//   "pdg",
// ]);
// вывод:
// "remove-btn hovered selectable pdg"
