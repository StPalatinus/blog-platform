import React from "react";
import spinnerStyles from "./Spinner.module.scss";

import spinner from "../../../img/loading_spinner.gif";

function Spinner(): React.ReactElement {
  return <img className={spinnerStyles.spinner} src={spinner} alt="Загрузка" />;
}

export default Spinner;
