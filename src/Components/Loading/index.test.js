import { render, screen, cleanup } from "@testing-library/react";
import Loading from ".";

const LoadingComponent = () => <Loading />;

beforeAll(() => cleanup);

describe("Loading", () => {
  it("Render loading text", () => {
    render(LoadingComponent());
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
