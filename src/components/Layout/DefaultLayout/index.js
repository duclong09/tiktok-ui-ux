
import Header from '../components/Header'
import Sidebar from './Sidebar'
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'

//luon luon khai báo style nam trong nay
const style = classNames.bind(styles)
const DefaultLayout = ({ children }) => {
    return (
        <div className={style('wrapper')}>
            <Header />
            <div className={style('container')}>
                <Sidebar />
                <div className={style('content')}>
                    {children}
                </div>
            </div>
        </div >
    )
}

export default DefaultLayout