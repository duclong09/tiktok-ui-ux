import React from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'

const style = classNames.bind(styles)
const Home = () => {
    return (
        <div className={style('wrapper')}>
            <h2 className={style('content-title')}>
                Home page
            </h2>
        </div>
    )
}

export default Home