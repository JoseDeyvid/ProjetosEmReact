import { beforeAll, describe, it } from "vitest";
import FormControl from "./FormControl";
import { render } from "@testing-library/react";

describe("FormControl", () => {
  beforeAll(() => {
    render(<FormControl />);
  });
  it("should render FormControl", () => {});
});
