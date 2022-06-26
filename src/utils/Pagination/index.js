const pagination = ({ total = 1, activePage = 1 } = {}) => {
  if (typeof total !== "number") {
    throw new TypeError("Total must be a number");
  }
  if (typeof activePage !== "number") {
    throw new TypeError("Active page must be a number");
  }
  const pages = Array.from({ length: total }, (_, index) => index + 1);

  const visiblePages = (arr) => {
    const firstPage = arr.slice(0, 1);
    const lastPage = arr.slice(-1);

    if (total < 6) {
      return arr;
    } else if (activePage <= firstPage[0] + 2 && total >= 6) {
      return arr.slice(0, 3).concat(["...", ...lastPage]);
    } else if (activePage >= lastPage[0] - 2 && total >= 6) {
      const tail = arr.slice(-3);
      return [...firstPage, "...", ...tail];
    } else {
      return [
        ...firstPage,
        "...",
        activePage - 1,
        activePage,
        activePage + 1,
        "...",
        ...lastPage,
      ];
    }
  };
  return visiblePages(pages);
};

export default pagination;
