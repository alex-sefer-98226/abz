import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu_burger.svg";
import classNames from "classnames";

const Header = (props) => {
  return (
    <header className={style.header}>
      <a href="#reg" className={style.logo}>
        <img src={logo} alt={"logo"} style={{ height: "100%" }} />
      </a>
      <nav
        className={classNames(
          style.navigation,
          props.menuStatus === true ? style.opened : style.hided
        )}
        onClick={() => props.closeMenu()}
      >
        <ul
          className={classNames(
            style.navigationList,
            props.menuStatus === true ? style.opened : style.hided
          )}
        >
          <li className={style.navigationListItems}>
            <a className={style.navigationLink} href="#reg">
              About me
            </a>
          </li>
          <li className={style.navigationListItems}>
            <a className={style.navigationLink} href="#reg">
              Relationships
            </a>
          </li>
          <li className={style.navigationListItems}>
            <a className={style.navigationLink} href="#reg">
              Requirements
            </a>
          </li>
          <li className={style.navigationListItems}>
            <a className={style.navigationLink} href="#reg">
              Users
            </a>
          </li>
          <li className={style.navigationListItems}>
            <a className={style.navigationLink} href="#reg">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
      <label htmlFor="menu" className={style.navigationSwitcherIcon}>
        <img
          src={menu}
          alt={"navigation_switcher"}
          className={style.navigationSwitcherIconImage}
        />
      </label>
      <input
        className={style.navigationSwitcher}
        type="checkbox"
        id="menu"
        onClick={(e) =>
          props.menuStatus === true ? props.closeMenu() : props.openMenu()
        }
      />
    </header>
  );
};

export default Header;
