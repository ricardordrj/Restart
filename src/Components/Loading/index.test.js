import { render, screen } from "@testing-library/react";
import Loading from ".";

const LoadingComponent = () => <Loading />;

describe("Loading", () => {
  it("Render loading text", () => {
    render(LoadingComponent());
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
