# Deployment Instructions for GitHub Pages

Follow these steps to deploy your website to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name it `heli-forklift-ph` (or your preferred name)
4. Keep it public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

## Step 2: Initialize Git and Push Code

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Heli Forklift Philippines website"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/heli-forklift-ph.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (top menu)
3. Click on "Pages" (left sidebar)
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The workflow will automatically run when you push to main

## Step 4: Update Repository Name in Code (if needed)

If your repository name is different from `heli-forklift-ph`, update `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '',
```

Then commit and push the changes:

```bash
git add next.config.js
git commit -m "Update repository name in config"
git push
```

## Step 5: Wait for Deployment

1. Go to the "Actions" tab in your repository
2. You'll see the deployment workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/heli-forklift-ph/
   ```

## Updating the Website

Whenever you want to update the website:

```bash
# Make your changes, then:
git add .
git commit -m "Description of your changes"
git push
```

The site will automatically rebuild and deploy!

## Troubleshooting

### If the workflow fails:
- Check the Actions tab for error messages
- Ensure Node.js version matches (v20)
- Make sure all dependencies are in package.json

### If pages don't load correctly:
- Verify basePath in next.config.js matches your repo name
- Check that Pages is set to use "GitHub Actions" as source

### If images don't show:
- Ensure images are in the public folder
- Use relative paths starting with /

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a CNAME file to the public folder with your domain
2. Configure DNS settings with your domain provider
3. In GitHub repository settings > Pages, add your custom domain

## Need Help?

Check the GitHub Actions logs in the "Actions" tab for detailed error messages.

