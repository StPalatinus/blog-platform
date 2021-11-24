import React from "react";
import { useParams } from "react-router-dom";
import errorStyles from "./Error-styles.module.scss";

function ErrorPage(props: any): React.ReactElement | null {
  const params = useParams();

  console.log(props);

  if (props.wrongUrl) {
    return (
      <article className={errorStyles["error-block"]}>
        <div className={errorStyles.error}>Wrong URL adress</div>
      </article>
    );
  }

  if (props.errorOnServer) {
    return (
      <article className={errorStyles["error-block"]}>
        <div className={errorStyles.error}>{props.errorOnServer.name}</div>
        <div className={errorStyles.error}>{props.errorOnServer.message}</div>
        <br />
        <div className={errorStyles.error}>{props.errorOnServer.stack} ? </div>
      </article>
    );
  }

  return (
    <article className={errorStyles["error-block"]}>
      <div className={errorStyles.error}>Something went wrong</div>
      <div className={errorStyles.error}>
        If this message occures continuosly, pleas contact an administration.
      </div>
    </article>
  );
}

export default ErrorPage;
