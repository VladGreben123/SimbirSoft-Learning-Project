import { useState } from 'react';
import styles from './BookPage.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import OrderPointForm from '../../components/OrderPointForm/OrderPointForm';
import type { Point } from '../../types/index';

function BookPage() {
  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);

  return (
    <>
      <Sidebar />
      <div className={styles.pageWrapper}>
        <Header/>
        <BreadCrumbs pointSelected={!!selectedPoint} />
        <main className={styles.main}>
          <div className={styles.orderContainer}>
            <OrderPointForm onPointSelect={setSelectedPoint} onPointClear={() => setSelectedPoint(null)}/>
            <div className={styles.orderSideContainer}>
              <div className={styles.orderConfirm}>
                <h3 className={styles.orderTitle}>Ваш заказ:</h3>
                <p className={selectedPoint ? styles.orderPoint : styles.orderPointInactive}>
                  <span className={styles.orderPointText}>
                    Пункт выдачи
                  </span>
                  ......................
                  <span className={styles.orderPointName}>
                    {selectedPoint?.name}
                  </span>
                </p>
                <button type='button' className={styles.orderButton} disabled={!selectedPoint}> Выбрать модель</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default BookPage;
