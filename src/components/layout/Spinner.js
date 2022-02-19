import React, { Fragment } from "react";
import spinner from "./spinner1.gif";

const Spinner = () => <Fragment>
      <img
        src={spinner}
        alt="loading..."
        style={{ width: "350px", margin: "auto", display: "block"}}
        
      />
    </Fragment>
  

export default Spinner
