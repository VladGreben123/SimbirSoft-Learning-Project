import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import type { Point, Model, Additional, Order } from "../types/index";

type BookingState = {
  point: Point | null;
  model: Model | null;
  additional: Additional | null;
  order: Order | null;
  orders: Order[];
  setPoint: (point: Point | null) => void;
  setModel: (model: Model | null) => void;
  setAdditional: (additional: Additional | null) => void;
  setOrder: (order: Order | null) => void;
  addOrder: (order: Order) => void;
  clearFrom: (path: string) => void;
};

const BookingContext = createContext<BookingState | null>(null);

const pageOrder = [
  "/book/point",
  "/book/model",
  "/book/additional",
  "/book/total",
];

const ORDERS_STORAGE_KEY = "nfc:orders";

function reviveOrders(raw: string | null): Order[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as Order[];
    return parsed.map((order) => ({
      ...order,
      additional: {
        ...order.additional,
        dateStart: order.additional.dateStart
          ? new Date(order.additional.dateStart)
          : null,
        dateEnd: order.additional.dateEnd
          ? new Date(order.additional.dateEnd)
          : null,
      },
    }));
  } catch {
    return [];
  }
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [point, setPoint] = useState<Point | null>(null);
  const [model, setModel] = useState<Model | null>(null);
  const [additional, setAdditional] = useState<Additional | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const [orders, setOrders] = useState<Order[]>(() =>
    reviveOrders(localStorage.getItem(ORDERS_STORAGE_KEY)),
  );

  useEffect(() => {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  const addOrder = useCallback((newOrder: Order) => {
    setOrders((prev) => [...prev, newOrder]);
  }, []);

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
      orders,
      setPoint,
      setModel,
      setAdditional,
      setOrder,
      addOrder,
      clearFrom,
    }),
    [point, model, additional, order, orders, addOrder, clearFrom],
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
