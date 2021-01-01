import * as React from "react";
import { render, RenderResult } from "@testing-library/react";

import { Button } from ".";

describe("<Button />", () => {
  let wrapper: RenderResult;

  beforeAll(() => {
    wrapper = render(<Button>Hello</Button>);
  });

  it("renders without crashing", () => {
    expect(wrapper.findByText(/hello/gi)).toBeDefined();
  });
});
