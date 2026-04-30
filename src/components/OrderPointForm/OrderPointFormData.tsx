import type { City } from "../../types/index";

const formData: City[] = [
  {
    name: "Ульяновск",
    position: [54.3282, 48.3866],
    points: [
      { name: "Центральный", position: [54.3265, 48.3879] },
      { name: "Северный", position: [54.3501, 48.3712] },
    ],
  },
  {
    name: "Москва",
    position: [55.7558, 37.6173],
    points: [
      { name: "Арбат", position: [55.752, 37.5921] },
      { name: "Сокольники", position: [55.7889, 37.6785] },
    ],
  },
  {
    name: "Самара",
    position: [53.2001, 50.15],
    points: [
      { name: "Площадь Революции", position: [53.1959, 50.1602] },
      { name: "Безымянка", position: [53.2134, 50.2198] },
    ],
  },
  {
    name: "Казань",
    position: [55.8304, 49.0661],
    points: [
      { name: "Кремль", position: [55.7986, 49.1055] },
      { name: "Ново-Савиновский", position: [55.8412, 49.1234] },
    ],
  },
  {
    name: "Санкт-Петербург",
    position: [59.9311, 30.3609],
    points: [
      { name: "Невский проспект", position: [59.9343, 30.3351] },
      { name: "Васильевский остров", position: [59.9432, 30.2878] },
    ],
  },
];

export default formData;
