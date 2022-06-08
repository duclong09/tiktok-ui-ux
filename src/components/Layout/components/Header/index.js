import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";

//import show modal Tippy library
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "../../../Popper";

const style = classNames.bind(styles);
const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            //fake api
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <header className={style("wrapper")}>
            <div className={style("inner")}>
                <img src={images.logo} alt="Tiktok" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={style("search-result")} tabIndex="-1" {...attrs}>
                            <PopperWrapper>Search result...</PopperWrapper>
                        </div>
                    )}
                >
                    <div className={style("search")}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={style("clear")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={style("loading")} icon={faSpinner} />

                        <button className={style("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={style("actions")}></div>
            </div>
        </header>
    );
};

export default Header;
