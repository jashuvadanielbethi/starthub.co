# Frontend - StarHub

React + TypeScript + Vite frontend application for the StartHub platform.

## Structure

- `src/app/components/` - Reusable React components (UI components, layouts, sidebars)
- `src/app/pages/` - Page components (LandingPage, LoginPage, Dashboards, etc.)
- `src/app/routes.tsx` - React Router configuration
- `src/app/api.ts` - API client functions for backend communication
- `src/lib/` - Shared utilities and clients (Supabase client)
- `src/styles/` - Global CSS and Tailwind configuration
- `src/imports/` - Configuration files

## Getting Started

```bash
npm install
npm run dev  # Start development server
npm run build  # Build for production
```

## Technologies

- React 18.3.1
- TypeScript
- Vite
- React Router v7
- Tailwind CSS
- Supabase (Authentication & Database)
