import { render, screen, cleanup } from "@testing-library/react";
import BaseLayout from ".";

const strTitle = "hello world!";
const BaseLayoutComponent = (str) => <BaseLayout title={str || null} />;

it("Render BaseLayout title when passed", () => {
  render(BaseLayoutComponent(strTitle));
  expect(screen.getByText(strTitle)).toBeInTheDocument();
});

it("Render BaseLayout default title when not passed", () => {
  render(BaseLayoutComponent());
  expect(
    screen.getByText("⌈ Wired Sound For Wired People ⌋")
  ).toBeInTheDocument();
});
