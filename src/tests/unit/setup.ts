import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock electron modules for renderer process tests
global.window = global.window || {};

// Mock IPC contexts that would be exposed by preload script
interface ElectronAPI {
  theme: {
    toggle: () => void;
    system: () => void;
  };
  window: {
    minimize: () => void;
    maximize: () => void;
    close: () => void;
  };
}

(global as typeof global & { electronAPI: ElectronAPI }).electronAPI = {
  theme: {
    toggle: vi.fn(),
    system: vi.fn(),
  },
  window: {
    minimize: vi.fn(),
    maximize: vi.fn(),
    close: vi.fn(),
  },
};

// Mock process.platform for consistent testing
Object.defineProperty(process, "platform", {
  value: "darwin",
  writable: true,
});
