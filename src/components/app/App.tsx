import React, { useState, useEffect, useCallback } from "react";
// import format from "date-fns/format";
// import { ru } from "date-fns/locale";
import { v4 as uuidv4 } from "uuid";
import { Pagination } from "antd";
import appStyles from "./App.module.scss";
import avatarPlaceholder from "../../img/devault-avatar.png";
import herokuAppService from "../../services/herokuapp-service";

import spinner from "../../img/loading_spinner.gif";

// const API_KEY = process.env.REACT_APP_APY_KEY;
// const APIURLT = process.env.APIURL;

function App(): React.ReactElement | null {
  // App.dafeultProps = {};

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

  const [state, setState] = useState<StateType>({
    isLoading: false,
    recievedArticles: [],
    currentPage: 1,
    articlesPerPage: 5,
  });

  const { getArticles } = herokuAppService;

  const getArticlesPack = useCallback(
    async (articlesPerPage, currentPage) => {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
      }));
      const posts = await getArticles(articlesPerPage, currentPage);
      console.log(posts);
      setState((prevState) => ({
        ...prevState,
        recievedArticles: posts,
        isLoading: false,
      }));
      return posts;
    },
    [getArticles]
  );

  // let posts;

  useEffect(() => {
    (async () => {
      // setState((prevState) => ({
      //   ...prevState,
      //   isLoading: true,
      // }));
      await getArticlesPack(state.articlesPerPage, state.currentPage);
      // console.log(posts);
      // setState((prevState) => ({
      //   ...prevState,
      //   recievedArticles: posts,
      //   isLoading: false,
      // }));

      // return posts;
    })();

    // console.log(articles);
  }, [getArticlesPack, state.articlesPerPage, state.currentPage]);

  function onChange(pageNumber: number) {
    // console.log("Page: ", pageNumber);
    setState((prevState) => ({
      ...prevState,
      currentPage: pageNumber,
      isLoading: true,
    }));
    // setState((prevState) => ({
    //   ...prevState,
    //   recievedArticles: getArticles(),
    // }));
  }

  const renderedData = !state.isLoading ? (
    state.recievedArticles.map((currentArticle) => {
      console.log(currentArticle);

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
              {/* {currentArticle.createdAt} */}
              March 5, 2020
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
    // <div className={appStyles.spinner}>
    <img className={appStyles.spinner} src={spinner} alt="Загрузка" />
    // </div>
  );

  const paginationNav = !state.isLoading ? (
    <Pagination
      className={appStyles.pagination}
      defaultCurrent={1}
      current={state.currentPage}
      total={50}
      onChange={onChange}
    />
  ) : null;

  return (
    <>
      <header className={appStyles.header}>
        <h1 className={appStyles["headers-heading"]}>Realworld Blog</h1>
        <button
          type="button"
          className={appStyles["headers-button"]}
          onClick={() => {}}
        >
          Sign In
        </button>
        <button
          type="button"
          className={appStyles["headers-button"]}
          onClick={() => {}}
        >
          Sign Up
        </button>
      </header>
      <section className={appStyles.articles}>{renderedData}</section>
      <footer className={appStyles.footer}>{paginationNav}</footer>
    </>
  );
}

export default App;
