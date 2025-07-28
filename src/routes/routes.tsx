import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "./__root";
import HomePage from "../pages/HomePage";
import SecondPage from "../pages/SecondPage";

// Home route (index route)
export const HomeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: HomePage,
});

// Second page route
export const SecondPageRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/second-page",
  component: SecondPage,
});

// Create the route tree
export const routeTree = RootRoute.addChildren([HomeRoute, SecondPageRoute]);

// Export for compatibility
export const rootTree = routeTree;
