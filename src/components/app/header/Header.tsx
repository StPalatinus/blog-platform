import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import headerStyles from "./Header.module.scss";
import { FooterPropsType } from "../../../ts-types/types";

import Footer from "../footer";

// function Header(): React.ReactElement | null {
function Header(props: Partial<FooterPropsType>): React.ReactElement | null {
  const { isLoading, currentPage, onChange, totalPages, articlesPerPage } =
    props;

  const params = useParams();
  console.log(params);

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
      <Footer
        isLoading={isLoading}
        currentPage={currentPage}
        // articlesPerPage={state.articlesPerPage}
        onChange={onChange}
        totalPages={totalPages}
        articlesPerPage={articlesPerPage}
      />{" "}
    </>
  );
}

export default Header;
