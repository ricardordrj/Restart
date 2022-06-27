import React from "react";

const Page = ({ page, pageLink }) =>
  page === "..." ? <span>{page}</span> : <a href={pageLink}>{page}</a>;

export default Page;
