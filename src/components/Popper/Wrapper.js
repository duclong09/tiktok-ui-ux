import React from 'react'
import classNames from 'classnames/bind'
import styles from './Popper.module.scss'

const style = classNames.bind(styles)
const Wrapper = ({ children }) => {
    return (
        <div className={style('wrapper')}>{children}</div>
    )
}

export default Wrapper