import styles from './BreadCrumbs.module.css'
import Arrow from '../../assets/Icons/arrow.svg?react'
import { useLocation } from 'react-router-dom'

function BreadCrumbs() {
    const breadCrumbsLinks = [
        {link:"/book/place",content: 'Местоположение'},
        {link:"/book/model",content: 'Модель'},
        {link:"/book/additional",content: 'Дополнительно'},
        {link: "/book/total",content: 'Итого'}
    ]
    const location = useLocation()

    return(
        <div className={styles.breadCrumbs}>
            {breadCrumbsLinks.map((item, index) => (
                <>
                    <a
                      key = {item.link}
                      href={item.link}
                      className={location.pathname == item.link ? styles.active : styles.passive}
                    >
                      {item.content}
                    </a>
                    {index < breadCrumbsLinks.length - 1 && <Arrow/>}
                </>
        ))}
        </div>
    )
}

export default BreadCrumbs