# Deployment Guide — Netlify & Vercel

This portfolio is configured for zero-configuration, production-grade deployment on **Netlify** or **Vercel**.

---

## 1. Deploying to Netlify

### Using Netlify CLI or Git Integration
1. Push this repository to GitHub or GitLab.
2. In your Netlify dashboard, click **Add new site** -> **Import an existing project**.
3. Select this repository. The settings in `netlify.toml` will automatically configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **SPA Redirect**: `/* -> /index.html 200`

### Enabling Netlify Forms
1. The project includes a hidden static form declaration in `index.html` with `data-netlify="true"` and `name="photography-enquiry"`.
2. When deployed to Netlify, form submissions automatically route to Netlify Forms without requiring any backend server.
3. In Netlify Site Settings -> **Forms**:
   - Configure email or Slack notifications for every new client enquiry.
   - Set up custom spam filtering or reCAPTCHA if desired.

---

## 2. Deploying to Vercel

1. Import your repository into the Vercel Dashboard.
2. Framework Preset will automatically detect **Vite**.
3. Settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. The included `vercel.json` ensures client-side routing rewrites:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```
5. If using an external form service like Formspree or Web3Forms on Vercel, simply provide your endpoint in `site.config.ts` or `.env`.

---

## 3. Environment Variables

Create your `.env` file based on `.env.example`:
```bash
cp .env.example .env
```
No private secrets or API keys are required for the static frontend.
