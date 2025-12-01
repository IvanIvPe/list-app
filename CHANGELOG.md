# Changelog

All notable changes to this project will be documented in this file.

---

## [Unreleased] - 2025-12-01

### Added
- `src/app/context/ThemeContext.tsx`: Created `ThemeProvider` to manage global theme state (light/dark) and handle body class updates.
- `src/app/components/navbar.tsx`: Added theme toggle button and logic to switch between light/dark logos.
- `src/app/components/navbar.module.css`: Added styles for the new `.themeToggle` button.

### Changed
- `src/app/layout.tsx`: Wrapped the application root with `ThemeProvider`.
- `src/app/globals.css`: Defined global CSS variables for colors (background, foreground, primary, etc.) and added `[data-theme='dark']` support.
- `src/app/page.module.css`: Replaced hardcoded hex colors with CSS variables for dark mode support.
- `src/app/components/navbar.module.css`: Updated navbar styles to use theme variables.
- `src/app/components/footer.module.css`: Updated footer background and text colors to use theme variables.
- `src/app/components/TodoList.module.css`: Refactored container and item styles to support dark mode.
- `src/app/components/contactform.module.css`: Updated form inputs and buttons to use global theme variables.
- `src/app/about/page.module.css`: Updated section backgrounds and text colors for consistency across themes.
- `src/app/list/page.module.css`: Updated main list page background to use theme variables.

### Fixed
- ...

---