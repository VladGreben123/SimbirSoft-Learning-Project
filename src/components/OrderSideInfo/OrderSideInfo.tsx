import { useLocation, useNavigate } from "react-router-dom";
import styles from "./OrderSideInfo.module.css";
import { useBooking } from "../../context/BookingContext";

const pageConfig: Record<
  string,
  {
    link: string;
    content: string;
    disabled: (point: unknown, model: unknown) => boolean;
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
    disabled: (_, additional) => !additional,
  },
};

function OrderSideInfo() {
  const { model, point, additional } = useBooking();
  const location = useLocation();
  const navigate = useNavigate();

  const config = pageConfig[location.pathname];
  const isDisabled = config.disabled(point, model);

  return (
    <div className={styles.orderSideContainer}>
      <div className={styles.orderConfirm}>
        <h3 className={styles.orderTitle}>Ваш заказ:</h3>
        <p className={point ? styles.orderInfo : styles.hiden}>
          <span className={styles.orderInfoName}>Пункт выдачи</span>
          ......................
          <span>{point?.name}</span>
        </p>
        <p className={model ? styles.orderInfo : styles.hiden}>
          <span className={styles.orderInfoName}>Модель</span>
          ............................................
          <span>{model?.name}</span>
        </p>
        <div className={additional ? styles.orderInfo : styles.hiden}>
          <p className={styles.color}>
            <span className={styles.orderInfoName}>Цвет</span>
            ............................................
            <span>{additional?.color}</span>
          </p>
        </div>
        <p className={model?.minPrice ? styles.orderPrice : styles.hiden}>
          <span className={styles.priceHead}>Цена:</span>
          {`от ${model?.minPrice} до ${model?.maxPrice} ₽`}
        </p>
        <button
          type="button"
          className={styles.orderButton}
          disabled={isDisabled}
          onClick={() => navigate(config.link)}
        >
          <span>{config.content}</span>
        </button>
      </div>
    </div>
  );
}

export default OrderSideInfo;
