# Ignite Track - Deployment Guide

This guide will help you deploy the Ignite Track platform to various hosting platforms with direct URLs (without builder.io).

## Quick Deploy Options

### 1. Netlify (Recommended)
**Fastest deployment with custom domain support**

1. **One-Click Deploy:**
   ```bash
   npm run deploy:netlify
   ```
   Or manually:
   ```bash
   npm run build:client
   npx netlify deploy --prod --dir=dist/spa
   ```

2. **Custom Domain:**
   - In Netlify dashboard, go to Domain Settings
   - Add your custom domain (e.g., `ignitetrack.com`)
   - Follow DNS configuration steps

### 2. Vercel
**Perfect for React applications**

1. **Deploy:**
   ```bash
   npx vercel --prod
   ```

2. **Custom Domain:**
   - Add domain in Vercel dashboard
   - Configure DNS records

### 3. Firebase Hosting
**Google's hosting solution**

1. **Setup Firebase:**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   ```

2. **Deploy:**
   ```bash
   npm run deploy:firebase
   ```

### 4. Surge.sh
**Simple static hosting**

1. **Deploy:**
   ```bash
   npm run deploy:surge
   ```

2. **Custom Domain:**
   ```bash
   surge dist/spa your-domain.com
   ```

### 5. GitHub Pages
**Free hosting with GitHub**

1. **Setup GitHub Actions:** (Already configured in `.github/workflows/deploy.yml`)
2. **Enable GitHub Pages in repository settings**
3. **Push to main branch** - Auto-deploys!

## Direct URLs After Deployment

After deploying to any platform above, you'll get direct URLs like:

- **Netlify:** `https://your-app-name.netlify.app` or `https://yourdomain.com`
- **Vercel:** `https://your-app-name.vercel.app` or `https://yourdomain.com`
- **Firebase:** `https://your-project.web.app` or `https://yourdomain.com`
- **Surge:** `https://your-app-name.surge.sh` or `https://yourdomain.com`
- **GitHub Pages:** `https://username.github.io/repository-name`

## Custom Domain Setup

1. **Purchase a domain** from any provider (Namecheap, GoDaddy, etc.)
2. **Configure DNS** to point to your hosting platform
3. **Enable HTTPS** (automatic on most platforms)

## Environment Variables

If you need environment variables for production:

```bash
# For Netlify
netlify env:set VARIABLE_NAME "value"

# For Vercel
vercel env add VARIABLE_NAME

# For others, set in platform dashboard
```

## Build Optimization

The current build is optimized for production:
- Minified JavaScript and CSS
- Tree-shaking for smaller bundle size
- Automatic code splitting
- Gzip compression enabled

## Features Available After Deployment

✅ **Complete Social Learning Platform**
- User authentication and profiles
- Course browsing with ratings and reviews
- Job/internship search and applications
- AI-powered daily task planning
- Real-time messaging system
- Social feed with posts and interactions
- Notification system
- Settings dashboard
- Progress tracking

✅ **Authentication Required Features**
- Apply to jobs/internships
- Send/receive messages
- Connect with other users
- Access AI tracker
- View notifications
- Manage settings

✅ **Guest Features** (No login required)
- Browse courses and jobs
- View public content
- Sign up for account

## Monitoring and Analytics

Consider adding:
- Google Analytics
- Sentry for error tracking
- Performance monitoring

## Support

For deployment issues:
- Check platform-specific documentation
- Verify build logs
- Ensure all dependencies are installed
- Contact platform support if needed
