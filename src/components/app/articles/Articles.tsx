import React from "react";
import { v4 as uuidv4 } from "uuid";
import appStyles from "./Articles.module.scss";
import avatarPlaceholder from "../../../img/default-avatar.png";

import spinner from "../../../img/loading_spinner.gif";

interface StateType {
  isLoading: boolean;
  recievedArticles: Artickle[];
  currentPage: number;
  articlesPerPage: number;
}

type Artickle = {
  UserEmail: string;
  author: {
    username: string;
    email: string | null;
    bio: string | null;
    image: string | null;
  };
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  tagList: string[];
};

function Articles(props: Partial<StateType>): React.ReactElement {
  // function Articles(props: PropsTypes): React.ReactElement {
  const { isLoading, recievedArticles } = props;

  const renderedData = !isLoading ? (
    recievedArticles?.map((currentArticle) => {
      const tags =
        currentArticle.tagList.length !== 0 ? (
          currentArticle.tagList.map((currenTag) => (
            <span className={appStyles["tag-full"]} key={uuidv4()}>
              {currenTag}
            </span>
          ))
        ) : (
          <span className={appStyles["tag-empty"]} />
        );

      return (
        <article className={appStyles.article} key={uuidv4()}>
          <figure className={appStyles["message-block"]}>
            <h2 className={appStyles["article-title"]}>
              {currentArticle.title}
            </h2>
            <div className={appStyles.likes}>12</div>
            <div className={appStyles["tags-container"]}>{tags}</div>
            <div className={appStyles["message-text"]}>
              {currentArticle.body}
            </div>
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
      );
    })
  ) : (
    <img className={appStyles.spinner} src={spinner} alt="Загрузка" />
  );

  return (
    <>
      <section className={appStyles.articles}>{renderedData}</section>
    </>
  );
}

export default Articles;
