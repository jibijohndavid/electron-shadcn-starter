# Copilot Instructions for Electron shadcn/ui Starter

## Architecture Overview

This is a modern Electron desktop application with React 19, shadcn/ui, and TanStack Router using a secure context-isolated IPC architecture:

- **Main process**: `src/main.ts` creates BrowserWindow with hidden titlebar and platform-specific traffic light positioning
- **Preload**: `src/preload.ts` exposes IPC contexts via `helpers/ipc/context-exposer.ts`
- **Renderer**: React app with custom titlebar, sidebar navigation, and type-safe routing
- **Desktop-focused**: No mobile/responsive code - purely desktop application

## Core Patterns

### IPC Architecture

- **Context exposure**: IPC APIs exposed in `helpers/ipc/{domain}/{domain}-context.ts`
- **Event listeners**: Main process handlers in `helpers/ipc/{domain}/{domain}-listeners.ts`
- **Channel constants**: Defined in `helpers/ipc/{domain}/{domain}-channels.ts`
- **Existing domains**: `theme` (dark/light mode), `window` (minimize/maximize/close)

### Routing with TanStack Router

- Routes defined in `src/routes/routes.tsx` with detailed comments for adding new routes
- Memory history router (not browser history) - use `createMemoryHistory()`
- Root layout in `__root.tsx` wraps all routes with `BaseLayout`
- Type-safe navigation and route parameters

### Custom Titlebar Implementation

- `titleBarStyle: "hidden"` in main.ts with platform-specific traffic light positioning
- `TitleBar.tsx` handles window controls, theme toggle, and navigation
- CSS class `draglayer` for draggable areas, `no-drag` for interactive elements
- Platform detection for showing/hiding window controls (hidden on macOS)

### shadcn/ui Configuration

- Components in `src/components/ui/` with `@/` alias pointing to `src/`
- Tailwind CSS 4 with CSS variables enabled, zinc base color scheme
- Add components: `npx shadcn@latest add <component>`
- Lucide icons as default icon library
- **Desktop-optimized**: No mobile breakpoints or responsive hooks

## Development Workflows

### Build & Test Commands

```bash
npm start           # Development with hot reload
npm run package     # Package app for current platform
npm run make        # Create distributable files
npm run test        # Run unit tests with Vitest (includes app open state tests)
npm run test:watch  # Watch mode testing
npm run lint        # ESLint code checking
npm run format      # Prettier code formatting
```

### Adding New Features

1. **New route**: Follow pattern in `src/routes/routes.tsx`, create page in `src/pages/`
2. **IPC feature**: Create new domain folder in `helpers/ipc/` with context, listeners, channels
3. **shadcn component**: Use CLI `npx shadcn@latest add <component>`, import from `@/components/ui/<component>`
4. **Sidebar navigation**: Update `AppSidebar.tsx` with new navigation items

## Project Structure & Conventions

### File Organization

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── AppSidebar.tsx   # Main navigation sidebar
│   └── TitleBar.tsx     # Custom window titlebar
├── helpers/             # Utility functions
│   └── ipc/             # IPC communication setup
├── layouts/             # Page layout components
├── pages/               # Route page components
├── routes/              # TanStack Router setup
├── styles/              # Global CSS and Tailwind
├── tests/               # Vitest unit tests
│   └── unit/            # Unit tests for components and app state
└── utils/               # General utilities
```

### Code Conventions

- **TypeScript**: Strict mode enabled, React 19 features encouraged
- **Styling**: Tailwind CSS 4 with `cn()` utility from `@/utils/tailwind`
- **State Management**: React state + Context API (no external state library)
- **Testing**: Vitest + React Testing Library in `src/tests/unit/` with comprehensive app state verification
- **Platform Detection**: `process.platform` in main, `navigator.platform` in renderer
- **No Mobile Code**: This is a desktop-only application

## Key Dependencies & Configuration

- **Electron Forge**: Build, package, and distribution
- **SWC**: Fast TypeScript/JavaScript compilation
- **Context Isolation**: Enabled for security (no direct node access in renderer)
- **Geist Font**: Default typography system
- **React Compiler**: Enabled for automatic optimization

## Common Tasks

### Adding a New Page

1. Create component in `src/pages/NewPage.tsx`
2. Add route definition in `src/routes/routes.tsx`
3. Update sidebar navigation in `src/components/AppSidebar.tsx`
4. Test routing and navigation

### Adding IPC Functionality

1. Create domain folder: `src/helpers/ipc/newdomain/`
2. Define channels in `newdomain-channels.ts`
3. Create context in `newdomain-context.ts`
4. Add listeners in `newdomain-listeners.ts`
5. Register in `context-exposer.ts` and `listeners-register.ts`

### Adding Tests

1. Create test file in `src/tests/unit/` with `.test.ts` or `.test.tsx` extension
2. Follow existing patterns for app state verification
3. Mock Electron APIs using the setup in `setup.ts`
4. Test both component functionality and environment availability
5. Run tests with `npm run test` to verify functionality

### Styling Best Practices

- Use shadcn/ui components for consistent design
- Leverage Tailwind utilities for custom styling
- Use CSS variables for theme-aware colors
- Maintain design consistency with existing components

### Testing Guidelines

The project includes comprehensive unit tests for verifying app functionality:

- **App State Tests**: `simple-app-open.test.ts`, `app-open.test.ts` - Verify app is running and environment is available
- **Component Tests**: `app.test.tsx` - Test React components render and function correctly
- **Mount Tests**: `app-mount.test.tsx` - Test component mounting, persistence, and lifecycle
- **Test Setup**: `setup.ts` - Mocks Electron APIs and provides testing environment

**Testing Best Practices:**

- All tests should verify app open state and functionality
- Use mocks for Electron APIs (`electronAPI.theme`, `electronAPI.window`)
- Test both component rendering and environment availability
- Follow existing test patterns when adding new tests
