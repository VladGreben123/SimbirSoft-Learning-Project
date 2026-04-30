import styles from "./BookAdditionalPage.module.css";
import OrderSideInfo from "../../components/OrderSideInfo/OrderSideInfo";
import { useBooking } from "../../context/BookingContext";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

function BookModelPage() {
  const { point, model, additional } = useBooking();

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
            <div>Additional</div>
            <OrderSideInfo />
          </div>
        </main>
      </div>
    </>
  );
}

export default BookModelPage;
