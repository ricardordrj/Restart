import React from "react";

const Page = ({ page, pageLink, onClick }) =>
  page === "..." ? (
    <span>{page}</span>
  ) : (
    <a href={pageLink ? pageLink : "#"} onClick={(e) => onClick()}>
      {page}
    </a>
  );

export default Page;
