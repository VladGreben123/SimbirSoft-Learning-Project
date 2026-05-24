import { useState } from "react";
import styles from "./AdminOrderPage.module.css";
import { useBooking } from "../../context/BookingContext";
import AdminSidebar from "../../components/admin/AdminSidebar/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader/AdminHeader";
import OrdersFilters from "../../components/admin/OrdersFilters/OrdersFilters";
import OrderCard from "../../components/admin/OrderCard/OrderCard";
import Pagination from "../../components/admin/Pagination/Pagination";

const PAGE_SIZE = 5;

function AdminOrderPage() {
  const { orders } = useBooking();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(orders.length / PAGE_SIZE));
  const visibleOrders = orders.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div className={styles.pageWrapper}>
      <AdminSidebar activeItem="Карточка автомобиля" />

      <AdminHeader />

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Заказы</h1>

        <section className={styles.card}>
          <OrdersFilters />

          <div className={styles.cardBody}>
            {orders.length === 0 ? (
              <p className={styles.orderEmpty}>Нет заказов</p>
            ) : (
              visibleOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))
            )}
          </div>

          <div className={styles.cardFooter}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a href="#" className={styles.footerLink}>
          Ссылка
        </a>
        <a href="#" className={styles.footerLink}>
          Ссылка
        </a>
        <span className={styles.footerCopyright}>
          Copyright © 2020 Simbirsoft
        </span>
      </footer>
    </div>
  );
}

export default AdminOrderPage;
