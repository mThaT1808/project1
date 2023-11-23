import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.headerBox}>
            <NavLink className={classes.links} to="/"> РЫБОВСКОЕ ОБИТАЛИЩЕ </NavLink>
            <NavLink className={classes.links} to="/posts"> ПОКАЗ РЫБОВ </NavLink>
            <NavLink className={classes.links} to="/about"> ВЫ ПРОДАЁТЕ РЫБОВ? </NavLink>
        </header>
    );
};

export default Header;