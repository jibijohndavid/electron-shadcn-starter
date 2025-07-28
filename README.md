# Electron shadcn/ui Starter

A modern Electron application starter template with React 19, shadcn/ui, and TypeScript. Built specifically for desktop applications with a clean, professional interface.

## ✨ Features

- **Modern Stack**: Electron 36, React 19, TypeScript 5.8
- **Beautiful UI**: shadcn/ui components with Tailwind CSS 4
- **Desktop-Optimized**: Custom titlebar, sidebar navigation, no mobile code
- **Developer Experience**: Hot reload, TypeScript, ESLint, Prettier
- **Testing Ready**: Vitest + React Testing Library with comprehensive app state tests
- **Production Ready**: Electron Forge for packaging and distribution
- **Copilot Ready**: Includes a `.github/copilot-instructions.md` for optimal GitHub Copilot and AI assistant support

## 🛠️ Tech Stack

### Core
- [Electron 36](https://www.electronjs.org) - Desktop app framework
- [Vite 6](https://vitejs.dev) - Build tool and dev server
- [SWC](https://swc.rs) - Fast TypeScript/JavaScript compiler

### Frontend
- [React 19](https://reactjs.org) - UI library with React Compiler
- [TypeScript 5.8](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com) - Beautiful, accessible components
- [TanStack Router](https://tanstack.com/router) - Type-safe routing
- [Lucide Icons](https://lucide.dev) - Beautiful icons

### Development
- [ESLint 9](https://eslint.org) - Code linting
- [Prettier](https://prettier.io) - Code formatting
- [Vitest](https://vitest.dev) - Unit testing
- [React Testing Library](https://testing-library.com) - Component testing

### Distribution
- [Electron Forge](https://www.electronforge.io) - Packaging and distribution

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── AppSidebar.tsx   # Application sidebar
│   │   └── TitleBar.tsx     # Custom window titlebar
│   ├── helpers/             # Utility functions
│   │   └── ipc/             # IPC communication handlers
│   │       ├── theme/       # Theme switching IPC
│   │       └── window/      # Window controls IPC
│   ├── layouts/             # Page layouts
│   │   └── BaseLayout.tsx   # Main application layout
│   ├── pages/               # Application pages/routes
│   │   ├── HomePage.tsx     # Home page component
│   │   └── SecondPage.tsx   # Example second page
│   ├── routes/              # TanStack Router configuration
│   │   ├── __root.tsx       # Root route component
│   │   ├── router.tsx       # Router instance
│   │   └── routes.tsx       # Route definitions
│   ├── styles/              # Global styles
│   │   └── global.css       # Tailwind CSS + custom styles
│   ├── tests/               # Test files
│   │   └── unit/            # Unit tests for app state and components
│   ├── utils/               # Utility functions
│   │   └── tailwind.ts      # Tailwind utilities
│   ├── main.ts              # Electron main process
│   ├── preload.ts           # Electron preload script
│   └── renderer.ts          # React renderer entry
├── components.json          # shadcn/ui configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.*.config.ts         # Vite configurations
└── vitest.config.ts         # Testing configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

1. **Clone or use this template**
   ```bash
   git clone <repository-url>
   cd electron-shadcn-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development**
   ```bash
   npm run start
   # or 
   pnpm start
   ```

## 📜 Available Scripts

```bash
# Development
npm run start          # Start the app in development mode

# Building & Distribution  
npm run package        # Package app for current platform
npm run make          # Create distributable files (.exe, .dmg, etc)
npm run publish       # Publish to distribution service

# Code Quality
npm run lint          # Run ESLint
npm run format        # Check code formatting
npm run format:write  # Format code with Prettier

# Testing
npm run test          # Run unit tests
npm run test:watch    # Run tests in watch mode
npm run test:unit     # Run unit tests (alias)
```

## 🧪 Testing

The project includes comprehensive unit tests to verify app functionality:

### Test Categories
- **App Open State Tests**: Verify the app is running and properly initialized
- **Component Tests**: Test React components render and function correctly
- **Environment Tests**: Check Electron context and runtime availability
- **Mount State Tests**: Verify app mounting and persistence

### Test Files
- `simple-app-open.test.ts` - Basic app open verification
- `app-open.test.ts` - Environment and runtime tests  
- `app.test.tsx` - React component and state tests
- `app-mount.test.tsx` - Component mounting and lifecycle tests

### Running Tests
```bash
npm run test          # Run all tests once
npm run test:watch    # Run tests in watch mode
```

**Test Results**: ✅ All tests pass = App is open and running correctly
```

## 🎨 Adding Components

This template uses shadcn/ui. Add new components with:

```bash
npx shadcn@latest add <component-name>
```

Example:
```bash
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add form
```

## 🏗️ Architecture

### IPC Communication
- **Context Isolation**: Secure communication between main and renderer
- **Theme System**: System-aware dark/light mode switching
- **Window Controls**: Custom titlebar with minimize/maximize/close

### Routing
- **File-based**: Routes defined in `src/routes/routes.tsx`
- **Type-safe**: Full TypeScript support with TanStack Router
- **Memory History**: Optimized for desktop applications

### Styling
- **Tailwind CSS 4**: Latest version with CSS variables
- **shadcn/ui**: Pre-built accessible components
- **Custom Themes**: Dark/light mode with system preference detection

## 🔧 Configuration

### Adding New Routes
1. Add route definition in `src/routes/routes.tsx`
2. Create page component in `src/pages/`
3. Update navigation in `AppSidebar.tsx` if needed

### Customizing Themes
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... */
}
```

## 🤝 Contributing
Pull requests are welcome! Please ensure code passes linting and tests.

## 📄 License
MIT License - see LICENSE file for details.