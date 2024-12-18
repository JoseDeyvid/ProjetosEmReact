import { beforeAll, describe, expect, it } from "vitest";
import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });
  it("should render Navbar", () => {
    const title = screen.getByRole("heading", { name: "Blog" });
    expect(title).toBeInTheDocument();
  });
});
