import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import appStyles from "./Articles.module.scss";
import avatarPlaceholder from "../../../img/default-avatar.png";

import Spinner from "../spinner";
import { ArticlesType } from "../../../ts-types/types";

function Articles(props: ArticlesType): React.ReactElement {
  const { isLoading, recievedArticles, currentPage } = props;

  const renderedData = !isLoading ? (
    recievedArticles?.map((currentArticle) => {
      const tags =
        currentArticle.tagList.length !== 0 ? (
          currentArticle.tagList.map((currentTag) => (
            <span className={appStyles["tag-full"]} key={uuidv4()}>
              {currentTag}
            </span>
          ))
        ) : (
          <span className={appStyles["tag-empty"]} />
        );

      // const pathName = `${currentArticle.slug.toString()}`;
      // console.log(currentArticle.slug);
      return (
        <React.Fragment key={uuidv4()}>
          <article className={appStyles.article} key={uuidv4()}>
            <figure className={appStyles["message-block"]}>
              <h2 className={appStyles["article-title"]}>
                {currentArticle.title}
              </h2>
              <div className={appStyles.likes}>0</div>
              <div className={appStyles["tags-container"]}>{tags}</div>
              <Link
                to={`${currentArticle.slug}`}
                key={currentArticle.slug}
                className={appStyles.link}
              >
                <div className={appStyles["message-text"]}>
                  {currentArticle.body}
                </div>
              </Link>
            </figure>
            <figure className={appStyles["user-info"]}>
              <span className={appStyles["user-name"]}>
                {currentArticle.author.username}
              </span>
              <span className={appStyles["user-birth-date"]}>
                {currentArticle.UserEmail}
                {/* March 5, 2020 */}
              </span>
            </figure>
            <img
              className={appStyles.avatar}
              src={currentArticle.author.image || avatarPlaceholder}
              alt="User Avatar"
            />
          </article>
          <Outlet />
        </React.Fragment>
      );
    })
  ) : (
    <Spinner />
  );

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <section className={appStyles.articles}>{renderedData}</section>
          }
        />
      </Routes>
    </>
  );
}

export default Articles;
