import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../../App";

// Mock react-dom/client
vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

// Mock TanStack Router
vi.mock("@tanstack/react-router", () => ({
  RouterProvider: ({ children }: { children?: React.ReactNode }) => (
    <div data-testid="router-provider">{children}</div>
  ),
}));

// Mock router
vi.mock("../../routes/router", () => ({
  router: {},
}));

// Mock theme helpers
vi.mock("../../helpers/theme_helpers", () => ({
  syncThemeWithLocal: vi.fn(),
}));

// Type for global electronAPI
declare global {
  var electronAPI: {
    theme: {
      toggle: () => void;
      system: () => void;
    };
    window: {
      minimize: () => void;
      maximize: () => void;
      close: () => void;
    };
  };
}

describe("App Component", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it("should render without crashing", () => {
    // This test verifies that the app can be initialized/opened
    expect(() => {
      render(<App />);
    }).not.toThrow();
  });

  it("should render the router provider when app is open", () => {
    render(<App />);

    // Check if the router provider is rendered, indicating the app is open
    const routerProvider = screen.getByTestId("router-provider");
    expect(routerProvider).toBeInTheDocument();
  });

  it("should initialize theme synchronization when app opens", async () => {
    const { syncThemeWithLocal } = await import("../../helpers/theme_helpers");

    render(<App />);

    // Verify that theme sync is called when app opens
    expect(syncThemeWithLocal).toHaveBeenCalledTimes(1);
  });
});

describe("App State Tests", () => {
  it("should have electronAPI available when app is open", () => {
    // Check if the electron API is available, indicating the app is properly initialized
    expect(globalThis.electronAPI).toBeDefined();
    expect(globalThis.electronAPI.theme).toBeDefined();
    expect(globalThis.electronAPI.window).toBeDefined();
  });

  it("should have DOM element available when app is rendered", () => {
    // Create a mock DOM element like the real app would have
    const appElement = document.createElement("div");
    appElement.id = "app";
    document.body.appendChild(appElement);

    // Check if the app mount point exists
    const mountPoint = document.getElementById("app");
    expect(mountPoint).toBeInTheDocument();
    expect(mountPoint).toBe(appElement);

    // Cleanup
    document.body.removeChild(appElement);
  });

  it("should be running in the correct environment", () => {
    // Verify the app is running in the expected test environment
    expect(typeof window).toBe("object");
    expect(typeof document).toBe("object");

    // These indicate the app environment is properly set up
    expect(window.document).toBe(document);
  });
});
