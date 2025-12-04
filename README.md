# Heli Forklift Philippines

A modern, responsive website for Heli Forklift Philippines - your trusted partner for industrial material handling equipment.

## 🚀 Features

- **Modern Design**: Clean, user-friendly interface with orange and red theme colors
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **Static Export**: Optimized for GitHub Pages deployment
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/heli-forklift-ph.git
cd heli-forklift-ph
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To create a production build:

```bash
npm run build
```

This will generate a static export in the `out` directory.

## 📄 Pages

- **Home**: Hero section with featured products and services
- **About**: Company information, mission, and values
- **Products**: Complete product catalog with categories
- **Services**: Comprehensive service offerings
- **Contact**: Contact form and business information

## 🚢 Deployment

This site is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup GitHub Pages Deployment

1. Go to your repository settings
2. Navigate to Pages section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push to the main branch to trigger deployment

The site will be available at: `https://yourusername.github.io/heli-forklift-ph/`

## 📝 Configuration

### Update Repository Name

If your repository name is different, update the `basePath` in `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
```

## 🎨 Customization

### Colors

The site uses a custom color scheme with orange and red as primary colors. You can customize colors in `tailwind.config.ts` and `app/globals.css`.

### Content

Update content in the respective page files:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/products/page.tsx` - Products page
- `app/services/page.tsx` - Services page
- `app/contact/page.tsx` - Contact page

## 📧 Contact

For questions or support, please contact us at info@heliforklift.ph

## 📄 License

This project is proprietary and confidential.

