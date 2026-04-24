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
}

export type City = {
  name: string;
  position: [number,number];
  points: Point[];
}
