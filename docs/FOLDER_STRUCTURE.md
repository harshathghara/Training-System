# Folder Structure Documentation

This document outlines the organized folder structure for the TechSkill Areta application.

## Overview

The application follows Next.js 14 App Router conventions with a well-organized component and utility structure.

## Root Structure

```
Training-system/
├── src/                    # Source code
├── public/                 # Static assets
├── docs/                   # Documentation
├── tests/                  # Test files
└── [config files]          # Configuration files
```

## Source Code (`src/`)

### App Router (`src/app/`)

```
src/app/
├── (auth)/                 # Route group for authentication pages
│   ├── signin/
│   └── signup/
├── (dashboard)/            # Route group for dashboard pages
│   ├── dashboard/
│   ├── profile/
│   └── courses/
├── about/                  # About page
├── certifications/         # Certifications page
├── globals.css            # Global styles
├── layout.tsx             # Root layout
└── page.tsx               # Home page
```

**Route Groups**: The parentheses in folder names `(auth)` and `(dashboard)` create route groups that don't affect the URL structure but help organize related pages.

### Components (`src/components/`)

```
src/components/
├── ui/                    # Basic UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   └── [other UI components]
├── layout/                # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── [other layout components]
├── forms/                 # Form-related components
│   └── [form components]
└── course/                # Course-specific components
    └── [course components]
```

### Utilities (`src/lib/`)

```
src/lib/
├── utils.ts              # Common utility functions
└── constants.ts          # Application constants
```

### Types (`src/types/`)

```
src/types/
└── index.ts              # TypeScript type definitions
```

### Hooks (`src/hooks/`)

```
src/hooks/
└── index.ts              # Custom React hooks
```

### Styles (`src/styles/`)

```
src/styles/
└── components/           # Component-specific styles
    └── [CSS modules or styled components]
```

## Public Assets (`public/`)

```
public/
├── images/               # Image files
│   └── land-page-img.png
├── icons/                # Icon files
│   ├── i.png
│   └── i1.png
└── assets/               # Other static assets
    ├── globe.svg
    ├── next.svg
    ├── vercel.svg
    ├── window.svg
    └── file.svg
```

## Documentation (`docs/`)

```
docs/
├── FOLDER_STRUCTURE.md   # This file
└── [other documentation]
```

## Testing (`tests/`)

```
tests/
├── components/           # Component tests
├── pages/               # Page tests
└── utils/               # Utility function tests
```

## Best Practices

### File Naming
- Use PascalCase for component files: `Header.tsx`
- Use camelCase for utility files: `utils.ts`
- Use kebab-case for CSS files: `component-styles.module.css`

### Import Paths
- Use absolute imports with `@/` alias for better maintainability
- Example: `import { Button } from '@/components/ui/Button'`

### Component Organization
- Keep components small and focused
- Use composition over inheritance
- Separate business logic from presentation

### Asset Management
- Store all images in `public/images/`
- Store all icons in `public/icons/`
- Use appropriate image formats (WebP for photos, SVG for icons)

## Adding New Features

When adding new features:

1. **Pages**: Add to appropriate route group in `src/app/`
2. **Components**: Add to appropriate category in `src/components/`
3. **Utilities**: Add to `src/lib/`
4. **Types**: Add to `src/types/index.ts`
5. **Hooks**: Add to `src/hooks/index.ts`
6. **Assets**: Add to appropriate folder in `public/`

## Migration Notes

- The old `src/images/` folder has been moved to `public/images/`
- The old `public/icon/` folder has been moved to `public/icons/`
- Components have been organized into logical categories
- Route groups have been added for better organization 