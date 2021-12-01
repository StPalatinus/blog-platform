import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import { Pagination } from "antd";
import footerStyles from "./Footer.module.scss";

import { FooterPropsType } from "../../../ts-types/types";

function Footer(props: Partial<FooterPropsType>): React.ReactElement | null {
  const { isLoading, currentPage, onChange, totalPages, articlesPerPage } =
    props;

  const params = useParams();
  // console.log(+Object.keys(params)[0] as number);
  // console.log(params);
  // console.log(params.pagenum);
  const pageNum = params.pagenum ? parseInt(params.pagenum, 10) : 0;
  console.log(pageNum);

  const onPaginationChange = (evt: any): void => {
    evt.preventDefault();
    onChange(evt.target.textContent);
  };

  const pagesList = (() => {
    const list = [];
    for (let i = 1; i < totalPages / articlesPerPage + 1; i++) {
      const element = (
        <li
          id={i as any as string}
          key={i as any as string}
          className={footerStyles["pagination-item"]}
        >
          <Link to={`/articles/${i}`} onClick={onPaginationChange}>
            {i}
          </Link>
        </li>
      );
      list.push(element);
    }
    return list;
  })();

  const paginationNav = !isLoading ? (
    <>
      <ul className={footerStyles.pagination}>
        <li className={footerStyles["pagination-item"]}>
          <Link to={`/articles/${pageNum - 1}`} onClick={onPaginationChange}>
            &#60;
          </Link>
        </li>
        {pagesList}
        <li className={footerStyles["pagination-item"]}>
          <Link to={`/articles/${pageNum + 1}`} onClick={onPaginationChange}>
            &#62;
          </Link>
        </li>
      </ul>
    </>
  ) : null;

  return (
    <>
      <footer className={footerStyles.footer}>{paginationNav}</footer>
    </>
  );
}

export default Footer;

// import React from "react";
// import { Routes, Route, Outlet, useParams, Link } from "react-router-dom";
// import { Pagination } from "antd";
// import footerStyles from "./Footer.module.scss";

// import { FooterPropsType } from "../../../ts-types/types";

// function Footer(props: Partial<FooterPropsType>): React.ReactElement | null {
//   const { isLoading, currentPage, onChange, totalPages } = props;

//   const params = useParams();
//   console.log(+Object.keys(params)[0] as number);

//   const paginationNav = !isLoading ? (
//     // <Link to={`/articles/${+Object.keys(params)[0] as number}`}>
//     <Pagination
//       className={footerStyles.pagination}
//       defaultCurrent={1}
//       // current={currentPage}
//       current={+Object.keys(params)[0] as number}
//       total={totalPages}
//       onChange={onChange}
//       showSizeChanger={false}
//       hideOnSinglePage
//     />
//   ) : // </Link>
//   null;

//   return (
//     <>
//       <footer className={footerStyles.footer}>{paginationNav}</footer>
//     </>
//   );
// }

// export default Footer;
