# Personal Portfolio & Blog

A personal cybersecurity portfolio and blog built with Jekyll and vanilla JavaScript. Features a dynamic portfolio homepage with GitHub integration and a Jekyll-powered blog.

🌐 **Live Site:** [buggymaytricks.github.io](https://buggymaytricks.github.io)

## Quick Setup

### Prerequisites
- Ruby (3.0+) and Jekyll
- Git

### Clone and Run

1. **Fork this repository** to your GitHub account

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

3. **Install dependencies:**
   ```bash
   bundle install
   ```

4. **Run locally:**
   ```bash
   ./tools/run.sh
   # Or: bundle exec jekyll serve
   ```

## Customization for Your Portfolio

### 1. Update Personal Data
Edit `assets/js/modules/data.js` to replace my information with yours:
- Personal details (name, title, bio)
- Skills and tools
- Social media links
- Project information

### 2. Configure Jekyll
Update `_config.yml` with your site details:
- Site title and description
- Your GitHub username
- Social media handles

### 3. Add Your Content
- **Blog posts:** Add `.md` files to `_posts/` 
- **About page:** Edit `_tabs/about.md`
- **Projects:** Will auto-load from your GitHub repos (or edit the data manually)

### 4. Customize Styling
- Main styles in `style.css`
- Modular JS components in `assets/js/modules/`

## Key Integrations

- **GitHub API** - Automatically displays your repositories
- **Jekyll Blog** - Chirpy theme with SEO optimization  
- **Chart.js** - Skills visualization
- **Service Worker** - Offline functionality and caching

## Deployment

1. **GitHub Pages:** Enable Pages in your repo settings (source: GitHub Actions)
2. **Custom Domain:** Add your domain to `CNAME` file
3. **Auto-deploy:** Pushes to main branch trigger automatic builds

## Contributing & Feedback

Found a bug or have a suggestion? 
- Open an [issue](https://github.com/buggymaytricks/buggymaytricks.github.io/issues)
- Submit a pull request
- Reach out on social media

**Ideas for improvements:**
- Performance optimizations
- Mobile responsiveness enhancements  
- Accessibility improvements
- New features or integrations

---

⭐ **If this template helps you, consider giving it a star!**
