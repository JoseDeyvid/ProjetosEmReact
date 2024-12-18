import { beforeAll, describe, it } from "vitest";
import EditPost from "./EditPost";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("EditPost", () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <EditPost />
      </BrowserRouter>
    );
  });
  it("should render EditPost", () => {});
});
