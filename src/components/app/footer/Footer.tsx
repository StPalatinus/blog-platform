import React from "react";
import { Outlet } from "react-router-dom";
import { Pagination } from "antd";
import footerStyles from "./Footer.module.scss";

import { FooterPropsType } from "../../../ts-types/types";

function Footer(props: Partial<FooterPropsType>): React.ReactElement | null {
  const { isLoading, currentPage, onChange } = props;

  const paginationNav = !isLoading ? (
    <Pagination
      className={footerStyles.pagination}
      defaultCurrent={1}
      current={currentPage}
      total={50}
      onChange={onChange}
    />
  ) : null;

  return (
    <>
      <footer className={footerStyles.footer}>{paginationNav}</footer>
      <Outlet />
    </>
  );
}

export default Footer;
