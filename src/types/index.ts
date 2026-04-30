export interface Slide {
  head: string;
  body: string;
  button: string;
  buttonClass: string;
  img: string;
}

export type Point = {
  name: string;
  position: [number, number];
};

export type City = {
  name: string;
  position: [number, number];
  points: Point[];
};

export type Model = {
  id: number;
  name: string;
  class: string;
  minPrice: string;
  maxPrice: string;
  image: string;
  color: string[];
};

export type Additional = {
  color: string;
  dateRange: string;
  rate: number;
  extras: string[];
  total: number;
};
