import { render, screen, waitFor } from "@testing-library/react";
import Page from "../src/app/page";
import About from "../src/app/about/page";

import userEvent from "@testing-library/user-event";

import mockRouter from "next-router-mock";
jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => mockRouter,
  push: jest.fn((url) => (mockRouter.asPath = url)),
}));

jest.mock("next/link", () => {
  const MockLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} onClick={() => mockRouter.push(href)} data-testid="mocked-link">
      {children}
    </a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

describe("Page", () => {
  it("pageがレンダリングされるか", () => {
    render(<Page />);
  });

  it("aboutページに遷移するか", async () => {
    const { unmount } = render(<Page />);

    mockRouter.setCurrentUrl("/");
    const button = screen.getByRole("button");
    await userEvent.click(button);

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual("/about");
    });

    unmount();

    render(<About />);

    await waitFor(() => {
      expect(screen.getByTestId("abouttitle")).toBeInTheDocument();
    });

    screen.debug();
  });
});
