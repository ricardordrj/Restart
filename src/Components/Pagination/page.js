import React from "react";

const Page = ({ page, pageLink, onClick }) =>
  page === "..." ? (
    <span>{page}</span>
  ) : (
    <a
      href={pageLink ? pageLink : "#"}
      onClick={(e) => {
        e.preventDefault();
        return onClick();
      }}
    >
      {page}
    </a>
  );

export default Page;
