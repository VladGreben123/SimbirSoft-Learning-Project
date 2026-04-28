import styles from './OrderSideInfo.module.css'
import { useBooking } from '../../context/BookingContext';
import { useLocation, useNavigate } from 'react-router-dom';

const pageConfig: Record<string, { link: string; content: string; disabled: (point: unknown, model: unknown) => boolean }> = {
    '/book/point':      { link: '/book/model',      content: 'Выбрать модель',  disabled: (point) => !point },
    '/book/model':      { link: '/book/additional', content: 'Дополнительно',   disabled: (_, model) => !model },
    '/book/additional': { link: '/book/total',      content: 'Итого',           disabled: (_, additional) => !additional },
}

function OrderSideInfo() {
    const { model, point } = useBooking()
    const location = useLocation()
    const navigate = useNavigate()

    const config = pageConfig[location.pathname]
    const isDisabled = config.disabled(point, model)

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
            <span className={styles.orderPointText}>
            Модель
            </span>
            ............................................
            <span className={styles.orderPointName}>
            {model?.name}
            </span>
        </p>
        <p className={model?.minPrice ? styles.orderPrice : styles.hiden}>
            <span className={styles.priceHead}>Цена:</span>{`от ${model?.minPrice} до ${model?.maxPrice} ₽`}
        </p>
        <button
          type='button'
          className={styles.orderButton}
          disabled={isDisabled}
          onClick={() => navigate(config.link)}
        >
          <span>{config.content}</span>
        </button>
        </div>
    </div>
    )

}

export default OrderSideInfo