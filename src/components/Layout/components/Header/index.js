import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'

const style = classNames.bind(styles)
const Header = () => {
    return (
        <header className={style('wrapper')}>
            <div className={style('inner')}></div>
        </header>
    )
}

export default Header