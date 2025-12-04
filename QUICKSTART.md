# Quick Start - Heli Forklift Philippines Website

## 🚀 Fast Track Setup (5 minutes)

### Step 1: Install Dependencies (2 minutes)
```bash
npm install
```

### Step 2: Test Locally (1 minute)
```bash
npm run dev
```
Visit: http://localhost:3000

### Step 3: Build Production Version (1 minute)
```bash
npm run build
```

### Step 4: Deploy to GitHub (1 minute)

First time setup:
```bash
git init
git add .
git commit -m "Initial commit: Heli Forklift Philippines website"
git remote add origin https://github.com/YOUR_USERNAME/heli-forklift-ph.git
git branch -M main
git push -u origin main
```

Future updates:
```bash
git add .
git commit -m "Your update message"
git push
```

### Step 5: Enable GitHub Pages
1. Go to your repo → Settings → Pages
2. Source: Select "GitHub Actions"
3. Wait 2-3 minutes for deployment
4. Visit: `https://YOUR_USERNAME.github.io/heli-forklift-ph/`

## ✅ Checklist

- [ ] Node.js 18+ installed
- [ ] npm install completed successfully
- [ ] Development server runs (npm run dev)
- [ ] Build completes without errors (npm run build)
- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages with Actions
- [ ] Site deployed successfully

## 🔄 Making Changes

1. Edit files in `app/` folder
2. Test: `npm run dev`
3. Commit: `git add . && git commit -m "Description"`
4. Deploy: `git push`
5. Wait 2-3 minutes for auto-deployment

## 📝 Key Files to Customize

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page content |
| `app/products/page.tsx` | Products listing |
| `app/services/page.tsx` | Services listing |
| `app/contact/page.tsx` | Contact form & info |
| `components/footer.tsx` | Footer links & social |
| `next.config.js` | Base path (repo name) |

## 🎨 Update Your Content

### Change Business Info
Edit `app/contact/page.tsx`:
- Phone number
- Email address
- Business address
- Social media links

### Change Colors
Edit `app/globals.css`:
- Primary orange: `--primary: 16 100% 50%`
- Secondary red: `--secondary: 0 84% 60%`

### Add/Remove Pages
1. Create folder: `app/new-page/`
2. Add file: `app/new-page/page.tsx`
3. Update navigation: `components/navigation.tsx`

## 🆘 Common Issues

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Build failing?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Wrong repo name?**
Update `basePath` in `next.config.js` to match your GitHub repo name.

## 📚 Full Documentation

- Detailed guide: [GETTING_STARTED.md](./GETTING_STARTED.md)
- Deployment steps: [DEPLOYMENT.md](./DEPLOYMENT.md)
- Project overview: [README.md](./README.md)
- Complete summary: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

## 💡 Tips

- Use `Ctrl+C` to stop dev server
- Changes auto-reload in dev mode
- Build before deploying to test
- Check GitHub Actions tab for deployment status

---

**Ready? Start with:** `npm install && npm run dev`

Your website will be live at:
`https://YOUR_USERNAME.github.io/heli-forklift-ph/`

