import { render, screen } from "@testing-library/react";
import Card from ".";

const CardComponent = () =>
  render(<Card title="Card Title" url="/example/url" />);

describe("Card", () => {
  it("should render title", () => {
    CardComponent();
    expect(screen.getByText("Card Title")).toBeInTheDocument();
  });

  it("should render href", async () => {
    CardComponent();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/example/url");
  });
});
