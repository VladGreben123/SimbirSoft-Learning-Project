import styles from './OrderSideInfo.module.css'
import { useBooking } from '../../context/BookingContext';
import { Link } from 'react-router-dom';

function OrderSideInfo() {
    const {model, point} = useBooking()


    return(
    <div className={styles.orderSideContainer}>
        <div className={styles.orderConfirm}>
        <h3 className={styles.orderTitle}>Ваш заказ:</h3>
        <p className={point ? styles.orderPoint : styles.orderPointInactive}>
            <span className={styles.orderPointText}>
            Пункт выдачи
            </span>
            ......................
            <span className={styles.orderPointName}>
            {point?.name}
            </span>
        </p>
        <p className={model ? styles.orderModel : styles.orderModelInactive}>
            {model?.name}
        </p>
        <button type='button' className={styles.orderButton} disabled={!point}>
            <Link to='/book/model' className={styles.orderButtonLink}>Выбрать модель</Link>
        </button>
        </div>
    </div>
    )
    
}

export default OrderSideInfo