import { render, screen } from "@testing-library/react";
import Page from "../src/app/page";

describe("Page", () => {
  it("pageがレンダリングされるか", () => {
    render(<Page />);

    screen.debug();
  });
});
