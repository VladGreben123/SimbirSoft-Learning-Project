import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import styles from "./OrderSideInfo.module.css";
import { useBooking } from "../../context/BookingContext";
import type { Point, Model, Additional } from "../../types/index";

const pageConfig: Record<
  string,
  {
    link: string;
    content: string;
    disabled: (point: unknown, model: unknown, additional: unknown) => boolean;
  }
> = {
  "/book/point": {
    link: "/book/model",
    content: "Выбрать модель",
    disabled: (point) => !point,
  },
  "/book/model": {
    link: "/book/additional",
    content: "Дополнительно",
    disabled: (_, model) => !model,
  },
  "/book/additional": {
    link: "/book/total",
    content: "Итого",
    disabled: (_, __, additional) => {
      const a = additional as Additional | null;
      return !a || !a.color || !a.rate || !a.dateStart;
    },
  },
  "/book/total": {
    link: "/",
    content: "Заказать",
    disabled: () => false,
  },
};

function OrderSideInfo() {
  const { model, point, additional, order, setOrder } = useBooking();
  const location = useLocation();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const config = pageConfig[location.pathname];
  const isDisabled = config.disabled(point, model, additional);

  const handleNavigate = useCallback(
    (link: string) =>
      link === "/" ? () => setModal(true) : () => navigate(config.link),
    [config, navigate],
  );

  const handleButtonConfirm = useCallback(
    (
      pointValue: Point | null,
      modelValue: Model | null,
      additionalValue: Additional | null,
    ) =>
      () => {
        if (pointValue && modelValue && additionalValue) {
          setOrder({
            point: pointValue,
            model: modelValue,
            additional: additionalValue,
            id: "RU58491823",
          });
          setModal(false);
        }
      },
    [setOrder],
  );

  return (
    <div className={styles.orderSideContainer}>
      <div className={styles.orderConfirm}>
        <h3 className={styles.orderTitle}>Ваш заказ:</h3>
        <p className={point ? styles.orderInfo : styles.hiden}>
          <span className={styles.orderInfoName}>Пункт выдачи</span>
          <span className={styles.dots} />
          <span className={styles.orderValue}>{point?.name}</span>
        </p>
        <p className={model ? styles.orderInfo : styles.hiden}>
          <span className={styles.orderInfoName}>Модель</span>
          <span className={styles.dots} />
          <span>{model?.name}</span>
        </p>
        <p className={additional?.color ? styles.orderInfo : styles.hiden}>
          <span className={styles.orderInfoName}>Цвет</span>
          <span className={styles.dots} />
          <span>{additional?.color}</span>
        </p>
        <p className={additional?.rate ? styles.orderInfo : styles.hiden}>
          <span className={styles.orderInfoName}>Тариф</span>
          <span className={styles.dots} />
          <span>{additional?.rate?.name}</span>
        </p>
        <p className={additional?.dateRange ? styles.orderInfo : styles.hiden}>
          <span className={styles.orderInfoName}>Длительность аренды</span>
          <span className={styles.dots} />
          <span>{additional?.dateRange}</span>
        </p>
        <div className={additional ? styles.additional : styles.hiden}>
          {additional?.extras.map((item) => (
            <p className={styles.orderInfo}>
              <span className={styles.orderInfoName}>{item.name}</span>
              <span className={styles.dots} />
              <span>Да</span>
            </p>
          ))}
        </div>
        <p className={model?.minPrice ? styles.orderPrice : styles.hiden}>
          <span className={styles.priceHead}>Цена:</span>
          {` ${(additional?.total ?? 0).toLocaleString("ru-RU")} ₽`}
        </p>
        <button
          type="button"
          className={`${styles.orderButton} ${order ? styles.orderButtonReady : ""}`}
          disabled={isDisabled}
          onClick={order ? () => setOrder(null) : handleNavigate(config.link)}
        >
          <span>{order ? "Отменить" : config.content}</span>
        </button>
        <div className={modal ? styles.modal : styles.hiden}>
          <div className={styles.modalContent}>
            <p className={styles.modalHead}>Подтвердить заказ</p>
            <div className={styles.modalButtons}>
              <button
                type="button"
                onClick={handleButtonConfirm(point, model, additional)}
                className={`${styles.button} ${styles.buttonConfirm}`}
              >
                Подтвердить
              </button>
              <button
                type="button"
                onClick={() => {
                  setModal(false);
                }}
                className={`${styles.button} ${styles.buttonDeny}`}
              >
                Вернуться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSideInfo;
