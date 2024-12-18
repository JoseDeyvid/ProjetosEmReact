import { beforeAll, describe, it } from "vitest";
import Admin from "./Admin";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";

const posts = [
  {
    userId: 1,
    id: 1,
    title: "title 1",
    body: "body 1",
  },
  {
    userId: 2,
    id: 2,
    title: "title 2",
    body: "body 2",
  },
  {
    userId: 3,
    id: 3,
    title: "title 3",
    body: "body 3",
  },
];

describe("Admin", () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <PostContext.Provider value={{ posts }}>
          <Admin />
        </PostContext.Provider>
      </BrowserRouter>
    );
  });
  it("should render Admin", () => {});
});
