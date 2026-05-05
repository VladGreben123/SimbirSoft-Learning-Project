import { format } from "date-fns";
import styles from "./BookTotalPage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import OrderSideInfo from "../../components/OrderSideInfo/OrderSideInfo";
import { useBooking } from "../../context/BookingContext";

function BookTotalPage() {
  const { point, model, additional, order } = useBooking();

  return (
    <>
      <Sidebar />
      <div className={styles.pageWrapper}>
        <Header />
        <BreadCrumbs
          pointSelected={!!point}
          modelSelected={!!model}
          additionalSelected={!!additional}
        />
        <main className={styles.main}>
          <div className={styles.orderContainer}>
            <div className={styles.totalCard}>
              <div className={styles.cardInfo}>
                <p className={order ? styles.orderConfirm : styles.hiden}>
                  Ваш заказ подтверждён
                </p>
                <p className={styles.modelName}>{model?.name}</p>
                <p className={styles.modelNumber}>{model?.carNumber}</p>
                <p className={styles.head}>
                  Топливо: <span className={styles.value}>{model?.fuel}%</span>
                </p>
                <p className={styles.head}>
                  Доступна с{" "}
                  <span className={styles.value}>
                    {additional?.dateStart
                      ? format(additional.dateStart, "dd.MM.yyyy HH:mm")
                      : "—"}
                  </span>
                </p>
              </div>
              <div className={styles.formImage}>
                <img src={model?.image} alt="" />
              </div>
            </div>
            <OrderSideInfo />
          </div>
        </main>
      </div>
    </>
  );
}

export default BookTotalPage;
