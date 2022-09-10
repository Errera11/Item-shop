import React from 'react';
import styles from './navbar.module.css';
import {useNavigate} from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate();

    return (
            <div className={styles.wrapper}>
                <div className={styles.main} onClick={() => navigate('/about')}>
                    Main
                </div>
                <div className={styles.list} onClick={() => navigate('/shop-list')}>
                    List
                </div>
            </div>
    );
};

export default Navbar;