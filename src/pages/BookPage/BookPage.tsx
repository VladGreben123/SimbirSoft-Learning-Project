import styles from './BookPage.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';

function BookPage(){
    return(
        <>
            <Sidebar/>
            <main className={styles.main}>
                <Header/>
                <BreadCrumbs/>
            </main>
        </>
    );
}

export default BookPage;