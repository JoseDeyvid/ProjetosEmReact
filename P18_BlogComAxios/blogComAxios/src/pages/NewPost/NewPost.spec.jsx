import { beforeAll, describe, it } from "vitest";
import NewPost from "./NewPost";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("NewPost", () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <NewPost />
      </BrowserRouter>
    );
  });
  it("should render NewPost", () => {});
});
