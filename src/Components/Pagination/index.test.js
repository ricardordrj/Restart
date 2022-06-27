import { render, screen } from "@testing-library/react";
import Pagination from ".";

describe("Pagination", () => {
  const component = <Pagination />;
  it("should render pagination", () => {
    render(<component />);
    expect(screen.getByText("")).toBeInTheDocument();
  });
});
