import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BaseLayout from ".";

const strTitle = "hello world!";
const BaseLayoutComponent = (str) => (
  <BrowserRouter>
    <BaseLayout title={str || null}>
      <p>children</p>
    </BaseLayout>
  </BrowserRouter>
);

beforeAll(() => cleanup);

describe("BaseLayout", () => {
  it("Render title when passed", () => {
    render(BaseLayoutComponent(strTitle));
    expect(screen.getByText(strTitle)).toBeInTheDocument();
  });

  it("Render default title when not passed", () => {
    render(BaseLayoutComponent());
    expect(
      screen.getByText("⌈ Wired Site For Weird People ⌋")
    ).toBeInTheDocument();
  });
  it("Render children component", () => {
    const { getByText } = render(BaseLayoutComponent());
    expect(getByText("children")).toBeInTheDocument();
  });

  it("Render structure", () => {
    const { getByRole, getByTestId } = render(BaseLayoutComponent());

    const root = getByRole("root");
    const parent = getByTestId("parent");
    const child = getByTestId("children");

    expect(root).toContainElement(parent);
    expect(parent).toContainElement(child);

    expect(child).not.toContainElement(parent);
  });
});
