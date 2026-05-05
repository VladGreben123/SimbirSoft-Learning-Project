import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import type { Point, Model, Additional, Order } from "../types/index";

type BookingState = {
  point: Point | null;
  model: Model | null;
  additional: Additional | null;
  order: Order | null;
  setPoint: (point: Point | null) => void;
  setModel: (model: Model | null) => void;
  setAdditional: (additional: Additional | null) => void;
  setOrder: (order: Order | null) => void;
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
  const [order, setOrder] = useState<Order | null>(null);

  const clearFrom = useCallback((path: string) => {
    const idx = pageOrder.indexOf(path);
    if (idx <= 1) setModel(null);
    if (idx <= 2) setAdditional(null);
    if (idx <= 3) setOrder(null);
  }, []);

  const value = useMemo(
    () => ({
      point,
      model,
      additional,
      order,
      setPoint,
      setModel,
      setAdditional,
      setOrder,
      clearFrom,
    }),
    [point, model, additional, order, clearFrom],
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
