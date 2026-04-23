export interface Slide {
  head: string;
  body: string;
  button: string;
  buttonClass: string;
  img: string;
}

type Point = {
  id: number
  name: string
}

type City = {
  id: number
  name: string
  points: Point[]
}

