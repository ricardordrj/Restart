import { render, screen } from "@testing-library/react";
import BaseLayout from ".";

const BaseLayoutComponent = <BaseLayout />;

it("Render BaseLayout title", () => {
  render(BaseLayoutComponent);
  expect(screen.getByText("base")).toBeInTheDocument();
});
