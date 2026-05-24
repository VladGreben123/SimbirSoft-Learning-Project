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
  carNumber: string;
  fuel: number;
  class: string;
  minPrice: string;
  maxPrice: string;
  image: string;
  color: string[];
};

export type Extra = {
  name: string;
  price: number;
};

export type Rate = {
  name: string;
  price: number;
  time: string;
};

export type Additional = {
  color: string;
  dateRange: string;
  dateStart: Date | null;
  dateEnd: Date | null;
  rate: Rate | null;
  extras: Extra[];
  total: number;
};

export type Order = {
  point: Point;
  model: Model;
  additional: Additional;
  id: string;
};
