export interface Slide {
  head: string;
  body: string;
  button: string;
  buttonClass: string;
  img: string;
}

export type Point = {
  name: string;
}

export type City = {
  name: string;
  points: Point[];
}
