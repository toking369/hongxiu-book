# Repository Guidelines

This document provides essential information for contributing to the ebook reading platform built with Next.js, React, and TypeScript.

## Project Overview

A Chinese-language ebook reading platform focused on stock trading and investment literature. The application provides PDF viewing, book categorization, and a responsive reading experience with dark/light theme support.

## Project Structure

```
hongxiu-ebook/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   ├── categories/        # Category pages
│   │   ├── ebook/             # Individual ebook pages
│   │   ├── ebooks/            # Ebook library
│   │   └── ranking/           # Ranking page
│   ├── components/            # React components
│   │   ├── reader/            # PDF reader components
│   │   └── *.tsx             # UI components
│   ├── data/                  # Static data
│   │   ├── books.ts           # Book catalog and categories
│   │   └── books_generated.ts # Generated book data
│   └── content/               # PDF ebook files
│       └── ebooks/            # PDF files (361+ books)
├── public/
│   └── covers/                # Book cover images
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## Development Commands

```bash
npm run dev      # Start development server (default port 3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint for code quality
```

## Coding Style

### TypeScript
- Enable strict mode in TypeScript
- Use explicit type annotations for function parameters and return types
- Import types explicitly when needed

### React Components
- Use functional components with `"use client"` directive for client-side components
- Use `useSyncExternalStore` for theme subscription (see `BookCover.tsx`)
- Keep components focused and modular

### Tailwind CSS v4
- Use CSS variables for theme colors (defined in `globals.css`)
- Available theme variables: `--red-primary`, `--gold`, `--bg-primary`, `--text-primary`, etc.
- Use `card-glow` class for card hover effects
- Follow the existing color system for consistency

### File Naming
- Components: PascalCase (e.g., `BookCover.tsx`, `EbookCard.tsx`)
- Data files: camelCase with descriptive names
- API routes: `route.ts` suffix

## Data Management

### Book Data (`src/data/books.ts`)
- `Book` interface defines the book structure
- `Category` interface defines category structure
- `allBooks` array contains 361+ book entries
- `categories` array contains 11 categories
- Each book has: id, title, author, rating, readers, tags, description, category
- Categories have: id, name, count, icon, description, color, popular

### Adding New Books
1. Add book entry to `allBooks` array in `src/data/books.ts`
2. Ensure PDF file exists in `src/content/ebooks/` with matching identifier
3. Use the book`'s `id` as the filename (e.g., `123.pdf`)

## Theming

The application supports dark/light themes using CSS variables:

```css
/* Key theme variables in globals.css */
--red-primary: #DC1E1E;
--gold: #D4A84B;
--bg-primary: #0a0a0f;
--bg-card: #12121a;
--text-primary: #f0f0f0;
```

Use `data-theme` attribute on `html` element to toggle themes.

## API Routes

Located in `src/app/api/`:
- `api/ebook/[id]/route.ts` - GET ebook metadata
- `api/ebook/[id]/pdf/route.ts` - GET PDF file

## Deployment

The project is configured for Vercel deployment (`vercel.json`). Run `vercel` to deploy.

## Important Notes

- All content is in Chinese (Simplified)
- The `src/src/` directory contains duplicate/backup files - do not modify
- PDF files use the book`'s `id` as filename
- The project uses `react-pdf` for PDF rendering
- Theme detection uses `useSyncExternalStore` with `MutationObserver`
