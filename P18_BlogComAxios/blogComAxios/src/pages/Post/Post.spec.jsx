import { beforeAll, describe, it } from "vitest";
import Post from "./Post";
import { render } from "@testing-library/react";

describe("Post", () => {
  beforeAll(() => {
    render(<Post />);
  });
  it("should render Post", () => {});
});
