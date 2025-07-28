import { createMemoryHistory, createRouter } from "@tanstack/react-router";
import { rootTree } from "./routes";

// Important: This type augmentation ensures type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const history = createMemoryHistory({
  initialEntries: ["/"],
});

export const router = createRouter({
  routeTree: rootTree,
  history,
  // Enable debug mode to help with troubleshooting
  context: undefined,
});
