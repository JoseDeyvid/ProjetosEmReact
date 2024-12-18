import { beforeAll, describe, it } from "vitest";
import Layout from "./Layout";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Layout", () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  });
  it("should render Layout", () => {});
});
