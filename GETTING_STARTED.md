# Getting Started Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** version 18 or higher ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- **Git** ([Download here](https://git-scm.com/))
- A **GitHub account** ([Sign up here](https://github.com/))

## Quick Start

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required dependencies.

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The page will automatically reload when you make changes.

### 3. Build for Production

To create a production build:

```bash
npm run build
```

This generates a static export in the `out` folder, ready for deployment.

## Project Structure

```
heli-forklift-ph/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # ShadCN UI components
│   ├── footer.tsx        # Footer component
│   └── navigation.tsx    # Navigation component
├── lib/                   # Utility functions
│   └── utils.ts          # Helper utilities
├── public/               # Static assets
├── .github/              # GitHub Actions workflows
│   └── workflows/
│       └── deploy.yml    # Deployment workflow
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization Guide

### Update Colors

Colors are defined in `app/globals.css`. The main brand colors are:
- Primary: Orange (#FF7A00 / hsl(16 100% 50%))
- Secondary: Red (#F04438 / hsl(0 84% 60%))

### Update Content

- **Home Page**: Edit `app/page.tsx`
- **Products**: Edit `app/products/page.tsx`
- **Services**: Edit `app/services/page.tsx`
- **About**: Edit `app/about/page.tsx`
- **Contact**: Edit `app/contact/page.tsx`

### Update Navigation

Edit the `navItems` array in `components/navigation.tsx`:

```typescript
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  // Add more items...
]
```

### Update Footer

Edit `components/footer.tsx` to update:
- Company information
- Social media links
- Contact details

## Deployment to GitHub Pages

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Development Tips

### Hot Reload

The development server supports hot reload. Changes to:
- TypeScript/TSX files automatically reload
- CSS files update without full reload

### TypeScript

The project uses TypeScript for type safety. If you see type errors:
1. Check the error message in terminal
2. Fix the type issues
3. The page will auto-reload

### Styling

The project uses Tailwind CSS. Common patterns:
- `className="flex items-center justify-center"` - Flexbox centering
- `className="text-orange-500"` - Brand orange color
- `className="hover:shadow-lg transition-shadow"` - Hover effects

## Troubleshooting

### Port 3000 is already in use

Kill the process using port 3000 or use a different port:

```bash
npm run dev -- -p 3001
```

### Module not found errors

Delete node_modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors

Clear Next.js cache:

```bash
rm -rf .next
npm run build
```

## Browser Support

The website supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Need Help?

- Check [Next.js Documentation](https://nextjs.org/docs)
- Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Review [ShadCN UI Documentation](https://ui.shadcn.com/)

## Contact

For project-specific questions, contact: info@heliforklift.ph

