import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import type { Point, Model, Additional } from "../types/index";

type BookingState = {
  point: Point | null;
  model: Model | null;
  additional: Additional | null;
  setPoint: (point: Point | null) => void;
  setModel: (model: Model | null) => void;
  setAdditional: (additional: Additional | null) => void;
  clearFrom: (path: string) => void;
};

const BookingContext = createContext<BookingState | null>(null);

const pageOrder = [
  "/book/point",
  "/book/model",
  "/book/additional",
  "/book/total",
];

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [point, setPoint] = useState<Point | null>(null);
  const [model, setModel] = useState<Model | null>(null);
  const [additional, setAdditional] = useState<Additional | null>(null);

  const clearFrom = useCallback((path: string) => {
    const idx = pageOrder.indexOf(path);
    if (idx <= 1) setModel(null);
  }, []);

  const value = useMemo(
    () => ({
      point,
      model,
      additional,
      setPoint,
      setModel,
      setAdditional,
      clearFrom,
    }),
    [point, model, additional, clearFrom],
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}
