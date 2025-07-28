import { describe, it, expect, vi, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import React from "react";
import App from "../../App";

// Mock all the dependencies
vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

vi.mock("@tanstack/react-router", () => ({
  RouterProvider: () => (
    <div data-testid="app-mounted">App is successfully mounted and open</div>
  ),
}));

vi.mock("../../routes/router", () => ({
  router: { routes: [] },
}));

vi.mock("../../helpers/theme_helpers", () => ({
  syncThemeWithLocal: vi.fn(),
}));

/**
 * Integration test to verify the app can be opened and is in a running state
 */
describe("App Mount and Open State", () => {
  afterEach(() => {
    cleanup();
  });

  it("should successfully mount and indicate the app is open", () => {
    // Render the app component
    const { getByTestId } = render(<App />);

    // Check if the app has mounted successfully
    const mountedIndicator = getByTestId("app-mounted");
    expect(mountedIndicator).toBeInTheDocument();
    expect(mountedIndicator.textContent).toBe(
      "App is successfully mounted and open",
    );
  });

  it("should maintain open state after initial render", () => {
    const { getByTestId, rerender } = render(<App />);

    // Initial render - app should be open
    expect(getByTestId("app-mounted")).toBeInTheDocument();

    // Re-render the component
    rerender(<App />);

    // App should still be open after re-render
    expect(getByTestId("app-mounted")).toBeInTheDocument();
  });

  it("should be openable multiple times", () => {
    // First open
    const { unmount: unmount1 } = render(<App />);
    unmount1();

    // Second open
    const { getByTestId } = render(<App />);
    expect(getByTestId("app-mounted")).toBeInTheDocument();
  });
});
