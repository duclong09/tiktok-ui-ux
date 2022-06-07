import React from 'react'
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'


const style = classNames.bind(styles)
const Sidebar = () => {
    return (
        <aside className={style('wrapper')}>
            <div>Sidebar</div>
        </aside>
    )
}

export default Sidebar