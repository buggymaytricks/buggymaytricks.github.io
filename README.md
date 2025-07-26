# 🔒 buGGy's Cybersecurity Portfolio & Blog

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fbuggymaytricks.github.io&style=for-the-badge)](https://buggymaytricks.github.io)
[![GitHub last commit](https://img.shields.io/github/last-commit/buggymaytricks/buggymaytricks.github.io?style=for-the-badge)](https://github.com/buggymaytricks/buggymaytricks.github.io/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/buggymaytricks/buggymaytricks.github.io?style=for-the-badge)](https://github.com/buggymaytricks/buggymaytricks.github.io/issues)
[![GitHub stars](https://img.shields.io/github/stars/buggymaytricks/buggymaytricks.github.io?style=for-the-badge)](https://github.com/buggymaytricks/buggymaytricks.github.io/stargazers)

> **A comprehensive cybersecurity portfolio and blog featuring penetration testing tutorials, vulnerability research, engineering notes, and security insights.**

🌐 **Live Site:** [buggymaytricks.github.io](https://buggymaytricks.github.io)  
📝 **Blog:** [buggymaytricks.github.io/blog](https://buggymaytricks.github.io/blog)

---

## 🎯 About This Project

This repository hosts my personal cybersecurity portfolio and blog, showcasing:

- **🛡️ Cybersecurity Projects** - Custom security tools and frameworks
- **📚 Engineering Notes** - Academic content and technical documentation  
- **🔍 Penetration Testing Tutorials** - Hands-on security testing guides
- **🐛 Vulnerability Research** - Security findings and disclosures
- **⚡ Performance Optimized** - Advanced web performance techniques

## 🚀 Features

### 🎨 **Portfolio Section**
- Interactive cybersecurity portfolio with GitHub integration
- Dynamic project loading with live repository data
- Skills visualization with radar charts
- Tools arsenal showcase
- Performance-optimized with service worker

### 📖 **Blog Section** 
- Jekyll-powered blog with Chirpy theme
- SEO-optimized content structure
- Comprehensive tagging and categorization
- Fast loading and mobile-responsive
- Social media integration

### ⚡ **Technical Highlights**
- **Modular ES6 Architecture** - Clean, maintainable JavaScript
- **Advanced Performance** - LCP optimization, text compression, caching
- **Security Headers** - CSP, HSTS, and security best practices
- **SEO Optimized** - Structured data, sitemaps, meta tags
- **PWA Ready** - Service worker, offline capabilities

## 🛠️ Tech Stack

| **Category** | **Technologies** |
|-------------|------------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), Chart.js |
| **Backend** | Jekyll, Ruby, Liquid templating |
| **Styling** | Custom CSS, Responsive design, Dark theme |
| **Performance** | Service Worker, Compression, Lazy loading |
| **SEO** | JSON-LD, Open Graph, Twitter Cards |
| **Deployment** | GitHub Pages, GitHub Actions |

## 📁 Project Structure

```
buggymaytricks.github.io/
├── 🏠 index.html                    # Portfolio homepage
├── 📝 _posts/                       # Blog posts
├── 🎨 assets/
│   ├── css/                         # Stylesheets
│   ├── js/
│   │   ├── main.js                  # Application orchestrator
│   │   └── modules/                 # Modular JavaScript
│   ├── fonts/                       # JetBrains Mono fonts
│   └── img/favicons/               # Favicon files
├── 🔧 _config.yml                   # Jekyll configuration
├── 📋 _tabs/                        # Navigation pages
├── 🔌 _plugins/                     # Jekyll plugins
├── 📊 sitemap.xml                   # SEO sitemap
├── 🤖 robots.txt                    # Search engine rules
└── 🛡️ .htaccess                     # Security & performance headers
```

## 🚀 Getting Started

### Prerequisites
- Ruby (3.0+)
- Jekyll (4.0+)
- Bundler

### 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/buggymaytricks/buggymaytricks.github.io.git
   cd buggymaytricks.github.io
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run locally:**
   ```bash
   # Development server
   bundle exec jekyll serve
   
   # Or use the convenience script
   ./tools/run.sh
   ```

4. **Build for production:**
   ```bash
   # Production build
   JEKYLL_ENV=production bundle exec jekyll build
   
   # Or use the test script
   ./tools/test.sh
   ```

### 🌐 Local Development
- **Portfolio:** [http://localhost:4000](http://localhost:4000)
- **Blog:** [http://localhost:4000/blog](http://localhost:4000/blog)

## 📝 Content Management

### ✍️ **Adding Blog Posts**
Create new posts in `_posts/` using the format: `YYYY-MM-DD-title.md`

```yaml
---
layout: post
title: "Your Post Title"
description: "SEO-friendly description"
date: 2025-07-26 10:00:00 +0000
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
image: https://avatars.githubusercontent.com/buggymaytricks?s=1200
author: "buGGy (buggymaytricks)"
---

Your content here...
```

### 🛠️ **Updating Portfolio Projects**
Projects are automatically fetched from GitHub API. To exclude repositories, add them to `excluded-repos.txt`.

### 🎨 **Customizing Skills**
Edit `skills-config.json` to update the skills radar chart.

## 🤝 Contributing

**I welcome contributions from the cybersecurity community!** Whether you're fixing bugs, improving performance, adding features, or enhancing content - all contributions are appreciated.

### 🎯 **Ways to Contribute:**

- 🐛 **Bug Reports** - Found an issue? [Open an issue](https://github.com/buggymaytricks/buggymaytricks.github.io/issues)
- ✨ **Feature Requests** - Have an idea? [Suggest a feature](https://github.com/buggymaytricks/buggymaytricks.github.io/issues)
- 🔧 **Code Improvements** - Performance, security, or functionality enhancements
- 📚 **Content Suggestions** - Cybersecurity topics, tutorials, or corrections
- 🎨 **Design Improvements** - UI/UX enhancements or accessibility improvements
- 📱 **Mobile Optimization** - Better mobile experience suggestions

### 📋 **Contribution Guidelines:**

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit with descriptive messages:** `git commit -m 'Add amazing feature'`
5. **Push to your branch:** `git push origin feature/amazing-feature`  
6. **Open a Pull Request** with a clear description

### 🏷️ **Good First Issues:**
- Performance optimizations
- Accessibility improvements  
- Mobile responsiveness enhancements
- SEO improvements
- Security header enhancements
- Code documentation

## 🔒 Security

This project implements security best practices:
- Content Security Policy (CSP)
- Security headers (HSTS, X-Frame-Options, etc.)
- Input validation and sanitization
- Secure asset loading

If you discover a security vulnerability, please email me privately rather than opening a public issue.

## 📊 Performance

Current performance metrics:
- **Lighthouse Score:** 90+ (Performance, SEO, Best Practices)
- **LCP:** < 2.5s (Largest Contentful Paint)
- **FID:** < 100ms (First Input Delay)
- **CLS:** < 0.1 (Cumulative Layout Shift)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- **[Jekyll](https://jekyllrb.com/)** - Static site generator
- **[Chirpy Theme](https://github.com/cotes2020/jekyll-theme-chirpy)** - Blog theme foundation
- **[Chart.js](https://www.chartjs.org/)** - Skills visualization
- **[JetBrains Mono](https://www.jetbrains.com/mono/)** - Developer font

## 📞 Connect

- 🌐 **Website:** [buggymaytricks.github.io](https://buggymaytricks.github.io)
- 🐦 **Twitter:** [@buggymaytricks](https://twitter.com/buggymaytricks)
- 💼 **GitHub:** [@buggymaytricks](https://github.com/buggymaytricks)
- 📧 **Email:** contact@buggymaytricks.page

---

<div align="center">

**⭐ If you find this project helpful, please give it a star! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/buggymaytricks/buggymaytricks.github.io?style=social)](https://github.com/buggymaytricks/buggymaytricks.github.io/stargazers)

</div>
