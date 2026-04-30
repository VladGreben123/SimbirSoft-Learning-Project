import { useEffect } from "react";
import styles from "./BookPointPage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import OrderPointForm from "../../components/OrderPointForm/OrderPointForm";
import OrderSideInfo from "../../components/OrderSideInfo/OrderSideInfo";
import { useBooking } from "../../context/BookingContext";

function BookPage() {
  const { point, model, additional, setPoint, clearFrom } = useBooking();

  useEffect(() => {
    clearFrom("/book/point");
  }, [clearFrom]);

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
            <OrderPointForm
              onPointSelect={setPoint}
              onPointClear={() => setPoint(null)}
              initialPoint={point}
            />
            <OrderSideInfo />
          </div>
        </main>
      </div>
    </>
  );
}

export default BookPage;
