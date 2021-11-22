import React from "react";
import { Link, Outlet } from "react-router-dom";
import headerStyles from "./Header.module.scss";

function Header(): React.ReactElement | null {
  return (
    <>
      <header className={headerStyles.header}>
        <h1 className={headerStyles["headers-heading"]}>Realworld Blog</h1>
        <Link to="/articles">
          <button
            type="button"
            className={headerStyles["headers-button"]}
            onClick={() => {}}
          >
            Sign In
          </button>
        </Link>
        <button
          type="button"
          className={headerStyles["headers-button"]}
          onClick={() => {}}
        >
          Sign Up
        </button>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
