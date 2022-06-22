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
    expect(screen.getByText("Image Gallery")).toBeInTheDocument();
  });
  it("should render gallery cards (Map)", () => {
    render(GalleryView());
  });
});
