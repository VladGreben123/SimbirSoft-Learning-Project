import styles from './BreadCrumbs.module.css'
import Arrow from '../../assets/Icons/arrow.svg?react'
import { Link, useLocation } from 'react-router-dom'
import { useBooking } from '../../context/BookingContext'

type Props = {
    pointSelected: boolean;
}

function BreadCrumbs({ pointSelected }: Props) {
    const breadCrumbsLinks = [
        {link:"/book/point",content: 'Местоположение'},
        {link:"/book/model",content: 'Модель'},
        {link:"/book/additional",content: 'Дополнительно'},
        {link: "/book/total",content: 'Итого'}
    ]
    const location = useLocation()
    const { clearFrom } = useBooking()

    return(
        <div className={styles.breadCrumbsContainer}>
            <div className={styles.breadCrumbs}>
                {breadCrumbsLinks.map((item, index) => (
                    <>
                        <Link
                          key={item.link}
                          to={pointSelected ? item.link : location.pathname}
                          className={`${location.pathname == item.link ? styles.active : styles.passive} ${styles.breadCrumbsLink}`}
                          aria-disabled={!pointSelected}
                          onClick={() => { if (pointSelected) clearFrom(item.link) }}
                        >
                          {item.content}
                        </Link>
                        {index < breadCrumbsLinks.length - 1 && <Arrow/>}
                    </>
                ))}
            </div>
        </div>
    )
}

export default BreadCrumbs