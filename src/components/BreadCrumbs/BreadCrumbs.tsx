import { Link, useLocation } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";
import Arrow from "../../assets/Icons/arrow.svg?react";
import { useBooking } from "../../context/BookingContext";

type Props = {
  pointSelected: boolean;
  modelSelected: boolean;
  additionalSelected: boolean;
};

function BreadCrumbs({
  pointSelected,
  modelSelected,
  additionalSelected,
}: Props) {
  const breadCrumbsLinks = [
    { link: "/book/point", content: "Местоположение", visited: pointSelected },
    {
      link: "/book/model",
      content: "Модель",
      visited: pointSelected && modelSelected,
    },
    {
      link: "/book/additional",
      content: "Дополнительно",
      visited: pointSelected && modelSelected && additionalSelected,
    },
    { link: "/book/total", content: "Итого" },
  ];
  const location = useLocation();
  const { clearFrom, order } = useBooking();

  if (order) {
    return (
      <div className={styles.breadCrumbsContainer}>
        <div className={styles.breadCrumbs}>
          <span className={styles.orderId}>Заказ №{order.id}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.breadCrumbsContainer}>
      <div className={styles.breadCrumbs}>
        {breadCrumbsLinks.map((item, index) => (
          <>
            <Link
              key={item.link}
              to={pointSelected ? item.link : location.pathname}
              className={`${
                location.pathname === item.link ? styles.active : styles.passive
              }
                 ${styles.breadCrumbsLink}
                 ${item.visited && location.pathname !== item.link ? styles.visited : ""}`}
              aria-disabled={item.visited}
              onClick={() => {
                if (item.visited) clearFrom(item.link);
              }}
            >
              {item.content}
            </Link>
            {index < breadCrumbsLinks.length - 1 && <Arrow />}
          </>
        ))}
      </div>
    </div>
  );
}

export default BreadCrumbs;
