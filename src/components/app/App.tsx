import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
// import format from "date-fns/format";
// import { ru } from "date-fns/locale";
// import { Pagination } from "antd";
// import appStyles from "./App.module.scss";
import { getArticles } from "../../services/herokuapp-service";
import { StateType } from "../../ts-types/types";

import Header from "./header";
import Articles from "./articles";
import Footer from "./footer";
import Article from "./article";

// const API_KEY = process.env.REACT_APP_APY_KEY;
// const APIURLT = process.env.APIURL;

function App(): React.ReactElement | null {
  const [state, setState] = useState<StateType>({
    isLoading: false,
    recievedArticles: [],
    currentPage: 1,
    articlesPerPage: 5,
    activeArticle: null,
  });

  const getArticlesPack = useCallback(async (articlesPerPage, currentPage) => {
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
  }, []);

  // let posts;

  useEffect(() => {
    (async () => {
      await getArticlesPack(state.articlesPerPage, state.currentPage);
    })();
  }, [getArticlesPack, state.articlesPerPage, state.currentPage]);

  function onChange(pageNumber: number): void {
    setState((prevState) => ({
      ...prevState,
      currentPage: pageNumber,
      isLoading: true,
    }));
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="/"
            element={
              <>
                <Articles
                  isLoading={state.isLoading}
                  recievedArticles={state.recievedArticles}
                  currentPage={state.currentPage}
                />
                <Footer
                  isLoading={state.isLoading}
                  currentPage={state.currentPage}
                  articlesPerPage={state.articlesPerPage}
                  onChange={onChange}
                />
              </>
            }
          />
          <Route
            path=":article"
            element={
              <Article
                recievedArticles={state.recievedArticles}
                // isLoading={state.isLoading}
                // activeArticle={state.activeArticle}
                // getArticleDetailed={getArticleDetailed}
              />
            }
          />
          <Route path="*" element={<div>NOTHING HERE</div>} />
        </Route>
        {/* <Route path="*" element={<div>GENERAL ERROR</div>} /> */}
      </Routes>
    </>
  );
}

export default App;
