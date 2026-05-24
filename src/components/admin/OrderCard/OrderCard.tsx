import { format } from "date-fns";
import styles from "./OrderCard.module.css";
import ExtraInfo from "../../OrderAdditionalForm/OrderAdditionalFormData";
import ApproveIcon from "../../../assets/Icons/approve.svg?react";
import RejectIcon from "../../../assets/Icons/reject.svg?react";
import EditIcon from "../../../assets/Icons/edit.svg?react";
import type { Order } from "../../../types";

type Props = {
  order: Order;
  onApprove?: (order: Order) => void;
  onReject?: (order: Order) => void;
  onEdit?: (order: Order) => void;
};

function OrderCard({ order, onApprove, onReject, onEdit }: Props) {
  const { dateStart, dateEnd } = order.additional;
  const period =
    dateStart && dateEnd
      ? `${format(dateStart, "dd.MM.yyyy HH:mm")} — ${format(dateEnd, "dd.MM.yyyy HH:mm")}`
      : null;
  const selectedExtras = new Set(
    order.additional.extras.map((extra) => extra.name),
  );

  return (
    <article className={styles.order}>
      <img
        className={styles.orderImage}
        src={order.model.image}
        alt={order.model.name}
      />

      <div className={styles.orderInfo}>
        <h2 className={styles.orderTitle}>
          <span className={styles.orderModel}>{order.model.name}</span>
        </h2>
        <p className={styles.orderMeta}>{period ?? "Период не указан"}</p>
        <p className={styles.orderColor}>
          Цвет:{" "}
          <span className={styles.orderColorValue}>
            {order.additional.color}
          </span>
        </p>
        <p className={styles.orderColor}>
          Точка:{" "}
          <span className={styles.orderColorValue}>{order.point.name}</span>
        </p>
      </div>

      <ul className={styles.orderExtras}>
        {ExtraInfo.map((extra) => {
          const isSelected = selectedExtras.has(extra.name);
          const inputId = `extra-${order.id}-${extra.name}`;
          return (
            <li key={extra.name} className={styles.orderExtra}>
              <input
                id={inputId}
                type="checkbox"
                checked={isSelected}
                disabled={!isSelected}
                readOnly
                className={styles.orderExtraInput}
              />
              <label
                htmlFor={inputId}
                className={`${styles.orderExtraLabel} ${
                  isSelected ? "" : styles.orderExtraLabelMuted
                }`}
              >
                {extra.name}
              </label>
            </li>
          );
        })}
      </ul>

      <div className={styles.orderPrice}>{order.additional.total} ₽</div>

      <div className={styles.orderActions}>
        <button
          type="button"
          className={`${styles.actionButton} ${styles.actionApprove}`}
          onClick={() => onApprove?.(order)}
        >
          <ApproveIcon
            className={`${styles.actionIcon} ${styles.actionIconApprove}`}
          />
          Готово
        </button>
        <button
          type="button"
          className={`${styles.actionButton} ${styles.actionReject}`}
          onClick={() => onReject?.(order)}
        >
          <RejectIcon
            className={`${styles.actionIcon} ${styles.actionIconReject}`}
          />
          Отмена
        </button>
        <button
          type="button"
          className={`${styles.actionButton} ${styles.actionEdit}`}
          onClick={() => onEdit?.(order)}
        >
          <EditIcon
            className={`${styles.actionIcon} ${styles.actionIconEdit}`}
          />
          Изменить
        </button>
      </div>
    </article>
  );
}

export default OrderCard;
