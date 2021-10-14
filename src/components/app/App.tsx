import React from "react";
import appStyles from "./App.module.scss";
import avatarPlaceholder from "../../img/devault-avatar.png";
// import likesVector from "../../img/likes-vector.png";

function App(): React.ReactElement | null {
  // App.dafeultProps = {};

  return (
    <>
      <header className={appStyles.header}>
        <h1 className={appStyles["headers-heading"]}>Realworld Blog</h1>
        <button 
          type="button"
          className={appStyles["headers-button"]}
          onClick={()=> {}}
        >
          Sign In
        </button>
        <button 
          type="button"
          className={appStyles["headers-button"]}
          onClick={()=> {}}
        >
          Sign Up
        </button>
      </header>
      <section className={appStyles.articles}>
        <article className={appStyles.article}>
          <figure className={appStyles["message-block"]}>
            <h2 className={appStyles["article-title"]}>Some article title</h2>
            <div className={appStyles.likes}>12</div>
            <div className={appStyles["tags-container"]}>
              <span className={appStyles.tag}>Tag1</span>
              <span className={appStyles.tag}>Tag2 long</span>
              <span className={appStyles.tag}>Tag3 test</span>
            </div>
            <div className={appStyles["message-text"]}>
              article text article text article text article text article text article text 
              article text article text article text article text article text article text 
            </div>
          </figure>
          <figure className={appStyles["user-info"]}>
            <span className={appStyles["user-name"]}>John Doe</span>
            <span className={appStyles["user-birth-date"]}>March 5, 2020</span>
          </figure>
          <img className={appStyles.avatar} src={avatarPlaceholder} alt="User Avatar" />
        </article>
        <article className={appStyles.article}>
          <figure className={appStyles["message-block"]}>
            <h2 className={appStyles["article-title"]}>Some article title</h2>
            <div className={appStyles.likes}>12</div>
            <div className={appStyles["tags-container"]}>
              <span className={appStyles.tag}>Tag1</span>
              <span className={appStyles.tag}>Tag2 long</span>
              <span className={appStyles.tag}>Tag3 test</span>
            </div>
            <div className={appStyles["message-text"]}>
              article text article text article text article text article text article text 
              article text article text article text article text article text article text 
            </div>
          </figure>
          <figure className={appStyles["user-info"]}>
            <span className={appStyles["user-name"]}>John Doe</span>
            <span className={appStyles["user-birth-date"]}>March 5, 2020</span>
          </figure>
          <img className={appStyles.avatar} src={avatarPlaceholder} alt="User Avatar" />
        </article>
        <article className={appStyles.article}>
          <figure className={appStyles["message-block"]}>
            <h2 className={appStyles["article-title"]}>Some article title</h2>
            <div className={appStyles.likes}>12</div>
            <div className={appStyles["tags-container"]}>
              <span className={appStyles.tag}>Tag1</span>
              <span className={appStyles.tag}>Tag2 long</span>
              <span className={appStyles.tag}>Tag3 test</span>
            </div>
            <div className={appStyles["message-text"]}>
              article text article text article text article text article text article text 
              article text article text article text article text article text article text 
            </div>
          </figure>
          <figure className={appStyles["user-info"]}>
            <span className={appStyles["user-name"]}>John Doe</span>
            <span className={appStyles["user-birth-date"]}>March 5, 2020</span>
          </figure>
          <img className={appStyles.avatar} src={avatarPlaceholder} alt="User Avatar" />
        </article>
        <article className={appStyles.article}>
          <figure className={appStyles["message-block"]}>
            <h2 className={appStyles["article-title"]}>Some article title</h2>
            <div className={appStyles.likes}>12</div>
            <div className={appStyles["tags-container"]}>
              <span className={appStyles.tag}>Tag1</span>
              <span className={appStyles.tag}>Tag2 long</span>
              <span className={appStyles.tag}>Tag3 test</span>
            </div>
            <div className={appStyles["message-text"]}>
              article text article text article text article text article text article text 
              article text article text article text article text article text article text 
            </div>
          </figure>
          <figure className={appStyles["user-info"]}>
            <span className={appStyles["user-name"]}>John Doe</span>
            <span className={appStyles["user-birth-date"]}>March 5, 2020</span>
          </figure>
          <img className={appStyles.avatar} src={avatarPlaceholder} alt="User Avatar" />
        </article>
        <article className={appStyles.article}>
          <figure className={appStyles["message-block"]}>
            <h2 className={appStyles["article-title"]}>Some article title</h2>
            <div className={appStyles.likes}>12</div>
            <div className={appStyles["tags-container"]}>
              <span className={appStyles.tag}>Tag1</span>
              <span className={appStyles.tag}>Tag2 long</span>
              <span className={appStyles.tag}>Tag3 test</span>
            </div>
            <div className={appStyles["message-text"]}>
              article text article text article text article text article text article text 
              article text article text article text article text article text article text 
            </div>
          </figure>
          <figure className={appStyles["user-info"]}>
            <span className={appStyles["user-name"]}>John Doe</span>
            <span className={appStyles["user-birth-date"]}>March 5, 2020</span>
          </figure>
          <img className={appStyles.avatar} src={avatarPlaceholder} alt="User Avatar" />
        </article>
        {/* <article className={appStyles.article}>SIXTH ARTICLE</article> */}
    </section>
    </>
  );
}

export default App;
