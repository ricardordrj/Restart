import React from "react";
import { Fragment } from "react";
import { Overlay, LoadingContent } from "./styles";

const Loading = () => (
  <Fragment>
    <Overlay />
    <LoadingContent>Loading...</LoadingContent>;
  </Fragment>
);

export default Loading;
