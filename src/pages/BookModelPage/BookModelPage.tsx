import styles from "./BookModelPage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import OrderSideInfo from "../../components/OrderSideInfo/OrderSideInfo";
import OrderModelList from "../../components/OrderModelList/OrderModelList";
import { useBooking } from "../../context/BookingContext";

function BookModelPage() {
  const { point } = useBooking();
  const { model, setModel } = useBooking();

  return (
    <>
      <Sidebar />
      <div className={styles.pageWrapper}>
        <Header />
        <BreadCrumbs pointSelected={!!point} />
        <main className={styles.main}>
          <div className={styles.orderContainer}>
            <OrderModelList onModelSelect={setModel} activeModel={model} />
            <OrderSideInfo />
          </div>
        </main>
      </div>
    </>
  );
}

export default BookModelPage;
