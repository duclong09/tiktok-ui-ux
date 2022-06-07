import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
const style = classNames.bind(styles);
const Header = () => {
    return (
        <header className={style("wrapper")}>
            <div className={style("inner")}>
                <img src={images.logo} alt="Tiktok" />
                <div className={style("search")}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={style("clear")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={style('loading')} icon={faSpinner} />
                    <button className={style("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={style('actions')}>
                </div>
            </div>
        </header>
    );
};

export default Header;
