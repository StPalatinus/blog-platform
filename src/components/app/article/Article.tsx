import React, { useState, useEffect, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams, Outlet } from "react-router-dom";
import articleStyles from "./Article.module.scss";
import { getArticle } from "../../../services/herokuapp-service";
import {
  ArticlePageStateType,
  Article,
  SingleArticlePropsType,
} from "../../../ts-types/types";

import avatarPlaceholder from "../../../img/default-avatar.png";
import Spinner from "../spinner";
import Error from "../error";

function SingleArticle(
  props: SingleArticlePropsType
): React.ReactElement | null {
  const params = useParams();
  const controller = useMemo(() => new AbortController(), []);
  const { signal } = controller;

  const [state, setState] = useState<ArticlePageStateType>({
    isLoading: true,
    activeArticle: null,
    errorOnServer: null,
    wrongUrl: false,
  });

  console.log(params);
  // console.log(params.article?.slice(0, 4));

  const recievedArticleName =
    params.article?.slice(0, 4) === "REPL"
      ? params.article.slice(4, params.article.length)
      : params.article;
  // console.log(recievedArticleName);

  const isUrlValid = useCallback(
    (articlesToCheck: Article[]) => {
      const res = articlesToCheck.find(
        (article: Article): boolean => article.slug === params.article
      );
      return !!res;
    },
    [params.article]
  );

  isUrlValid(props.recievedArticles);

  const articleTextPlaceholder = "";

  const getArticleDetailed = useCallback(async (articleName, didAbort) => {
    let recievedArticle: { article: Article };

    const getArticleWithErrorCHecks = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          isLoading: true,
        }));
        recievedArticle = await getArticle(articleName, didAbort);
        setState((prevState) => ({
          ...prevState,
          activeArticle: recievedArticle.article,
          isLoading: false,
        }));
      } catch (err: any) {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
          errorOnServer: err,
        }));
        // need additional error handling???
      }
      return recievedArticle;
    };

    recievedArticle = await getArticleWithErrorCHecks();

    return recievedArticle;
  }, []);

  useEffect(() => {
    if (!isUrlValid(props.recievedArticles)) {
      controller.abort();
      setState((prevState) => ({
        ...prevState,
        wrongUrl: true,
      }));
    }
    (async () => {
      await getArticleDetailed(recievedArticleName, signal);
    })();
    return function cleanup() {
      controller.abort();
    };
  }, [
    recievedArticleName,
    getArticleDetailed,
    isUrlValid,
    props.recievedArticles,
    signal,
    controller,
  ]);

  if (state.errorOnServer || state.wrongUrl) {
    return (
      <Error errorOnServer={state.errorOnServer} wrongUrl={state.wrongUrl} />
    );
  }

  const tags =
    state.activeArticle?.tagList.length !== 0 ? (
      state.activeArticle?.tagList.map((currenTag) => (
        <span className={articleStyles["tag-full"]} key={uuidv4()}>
          {currenTag}
        </span>
      ))
    ) : (
      <span className={articleStyles["tag-empty"]} />
    );

  const renderedData =
    !state.isLoading && !state.errorOnServer ? (
      (() => (
        <section className={articleStyles.articleFullPage}>
          <header className={articleStyles.articleHeader}>
            <div className={articleStyles.articleHeadingBlock}>
              <h2 className={articleStyles.singleArticleHeading}>
                {state.activeArticle?.title}
              </h2>
              <div className={articleStyles.likes}>0</div>
              <div className={articleStyles["tags-container"]}>{tags}</div>
            </div>
            <div className={articleStyles["user-info"]}>
              <span className={articleStyles["user-name"]}>
                {state.activeArticle?.author.username}
              </span>
              <span className={articleStyles["user-birth-date"]}>
                {state.activeArticle?.UserEmail}
              </span>
            </div>
            <img
              className={articleStyles.avatar}
              src={state.activeArticle?.author.image || avatarPlaceholder}
              alt="User Avatar"
            />
          </header>
          <main>
            <div className={articleStyles.articleDescription}>
              some long description
            </div>
            <figure className={articleStyles.articleFullText}>
              {state.activeArticle?.body || articleTextPlaceholder}
            </figure>
          </main>
        </section>
      ))()
    ) : (
      <Spinner />
    );

  return (
    <>
      <div className={articleStyles.article}>{renderedData}</div>
      <Outlet />
    </>
  );
}

export default SingleArticle;
