import { render, screen } from "@testing-library/react";
import Pagination from ".";

describe("Pagination", () => {
  it("should render pagination", () => {
    render(<Pagination />);
    expect(screen.getAllByText("")).toBeInTheDocument();
  });
});
