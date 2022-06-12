import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Gallery from ".";

const GalleryView = () => (
  <BrowserRouter>
    <Gallery />
  </BrowserRouter>
);

beforeAll(() => cleanup());

describe("Gallery /views", () => {
  it("Should render gallery title", () => {
    render(GalleryView());
    expect(screen.getByText("Gallery Page")).toBeInTheDocument();
  });
  it("Should render image preview", () => {
    const { getByRole, getByTestId } = render(GalleryView());
    const root = getByRole("root");
    const card = getByTestId("card");
    const img = getByTestId("img");

    expect(root).toContainElement(card);
    expect(card).toContainElement(img);
    expect(img).not.toContainElement(card);
  });
});
