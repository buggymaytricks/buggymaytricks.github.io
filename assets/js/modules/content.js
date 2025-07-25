/**
 * Content Module - Dynamic content loading for projects, blog, tools, and contact
 * Handles GitHub API integration and content rendering
 */

import { qs, qsa, createCachedFetch, formatDate } from './utils.js';
import { portfolioData } from './data.js';

/**
 * Multi-Column Tools Grid
 */
export function initMultiColumnTools() {
  const grid = qs('#tools-grid');
  if (!grid) return;
  
  // Create horizontal scrolling marquee with all tools
  const toolCards = portfolioData.tools.map((tool, i) => `
    <div class="tool-item-marquee" style="--delay: ${i};">
      <div class="tool-header flex items-center gap-8 mb-6">
        <span class="tool-icon" style="font-size: 1.8rem; width: 40px; text-align: center;">${tool.icon}</span>
        <div class="tool-info flex flex-col">
          <span class="tool-name" style="font-weight: 600; color: var(--color-text-primary); font-size: 1rem; line-height: 1.1;">${tool.name}</span>
          <span class="tool-category" style="font-size: 0.7rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">${tool.category}</span>
        </div>
      </div>
      <div class="tool-level-container">
        <span class="tool-level tool-level--${tool.level.toLowerCase()}" style="padding: 3px 8px; border-radius: 8px; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
          ${tool.level}
        </span>
      </div>
    </div>
  `).join('');
  
  // Create the marquee structure - duplicate tools for seamless loop
  grid.innerHTML = `
    <div class="tools-track">
      ${toolCards}
      ${toolCards}
    </div>
  `;
}

/**
 * Dynamic Projects from GitHub
 */
export async function initDynamicProjects() {
  const grid = qs('#projects-grid');
  if (!grid) return;

  try {
    // Load excluded repositories
    let excludedRepos = [];
    try {
      const excludeResponse = await fetch('excluded-repos.txt');
      if (excludeResponse.ok) {
        const excludeText = await excludeResponse.text();
        excludedRepos = excludeText
          .split('\n')
          .map(line => line.trim())
          .filter(line => line && !line.startsWith('#'));
        console.log('✅ Excluded repos loaded:', excludedRepos);
      }
    } catch (e) {
      console.log('⚠️ No excluded repos file found, showing all repos');
    }

    // Fetch repositories from GitHub API with comprehensive details
    const cachedReposFetch = createCachedFetch('github_repos', 1440); // Cache for 1 day (1440 minutes)
    const response = await cachedReposFetch('https://api.github.com/users/buggymaytricks/repos?sort=updated&direction=desc&per_page=30');
    
    if (!response.ok) {
      console.log('❌ GitHub API failed with status:', response.status);
      initStaticProjects();
      return;
    }
    
    const repos = await response.json();
    
    if (Array.isArray(repos)) {
      console.log('📦 Total repos fetched:', repos.length);
      console.log('🚫 Excluded repos list:', excludedRepos);
      
      // Filter out excluded repos and get detailed info
      const filteredRepos = repos
        .filter(repo => {
          const isExcluded = excludedRepos.includes(repo.name);
          if (isExcluded) {
            console.log('❌ Excluding repo:', repo.name);
          }
          return !isExcluded;
        })
        .filter(repo => !repo.fork) // Exclude forked repos
        .filter(repo => repo.size > 0) // Exclude empty repos
        .sort((a, b) => {
          // Sort by stars (descending), then by updated date (descending)
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at) - new Date(a.updated_at);
        })
        .slice(0, 6);

      console.log('✅ Final filtered repos:', filteredRepos.map(r => r.name));

      // Fetch comprehensive details for each repository
      const projectsWithDetails = await Promise.all(
        filteredRepos.map(async (repo) => {
          try {
            // Fetch languages with caching
            const cachedLanguagesFetch = createCachedFetch(`github_languages_${repo.name}`, 14400); // Cache for 10 days (14400 minutes)
            const languagesResponse = await cachedLanguagesFetch(`https://api.github.com/repos/buggymaytricks/${repo.name}/languages`);
            const languages = await languagesResponse.json();
            
            // Get all languages (not just top 4)
            const sortedLanguages = Object.entries(languages)
              .sort(([,a], [,b]) => b - a)
              .map(([lang]) => lang);
            
            return {
              ...repo,
              languages: sortedLanguages.length > 0 ? sortedLanguages : ['Repository'],
              last_updated: formatDate(repo.updated_at, { month: 'short' }),
              size_mb: Math.round(repo.size / 1024 * 100) / 100 // Convert KB to MB
            };
          } catch (error) {
            console.log(`Failed to fetch details for ${repo.name}:`, error);
            return {
              ...repo,
              languages: repo.language ? [repo.language] : ['Repository'],
              last_updated: formatDate(repo.updated_at, { month: 'short' }),
              size_mb: Math.round(repo.size / 1024 * 100) / 100
            };
          }
        })
      );

      const projectsHTML = projectsWithDetails.map((repo, i) => {
        const description = repo.description || 'A repository by buGGy';
        
        return `
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
            <div class="project-card animate-slide-in-up" style="animation-delay: ${i * 0.1}s;">
              <div class="project-header mb-16">
                <div class="flex justify-between items-start mb-8">
                  <h4 style="color: var(--color-text-primary); margin: 0; font-size: 1.2rem; line-height: 1.3;">${repo.name}</h4>
                </div>
                
                <div class="project-stats flex gap-12 mb-12" style="font-size: 0.75rem; color: var(--color-text-muted);">
                  <span>⭐ ${repo.stargazers_count}</span>
                  <span>🍴 ${repo.forks_count}</span>
                  ${repo.size_mb > 0 ? `<span>📦 ${repo.size_mb} MB</span>` : ''}
                </div>
                
                <p style="color: var(--color-text-secondary); line-height: 1.6; margin: 0 0 12px 0; font-size: 0.95rem;">${description}</p>
                
                <div class="project-meta flex justify-between items-center" style="font-size: 0.7rem; color: var(--color-text-muted);">
                  <span>Updated: ${repo.last_updated}</span>
                </div>
              </div>
              
              <div class="project-tech flex flex-wrap gap-8">
                ${repo.languages.map(lang => `<span class="tech-badge" style="padding: 4px 10px; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 8px; font-size: 0.7rem; color: var(--color-electric-blue); font-family: 'JetBrains Mono', monospace;">${lang}</span>`).join('')}
              </div>
            </div>
          </a>
        `;
      }).join('');
      
      grid.innerHTML = projectsHTML;
      console.log('✅ Projects loaded with comprehensive details');
    } else {
      // Fallback to static data if API fails
      initStaticProjects();
    }
  } catch (error) {
    console.log('❌ GitHub API failed, using static projects:', error);
    initStaticProjects();
  }
}

/**
 * Static Projects Fallback
 */
export function initStaticProjects() {
  const grid = qs('#projects-grid');
  if (!grid) return;
  
  console.log('📁 Loading static projects as fallback');
  
  grid.innerHTML = portfolioData.projects.slice(0, 6).map((project, i) => `
    <a href="${project.github}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
      <div class="project-card animate-slide-in-up" style="animation-delay: ${i * 0.1}s;">
        <div class="project-header mb-16">
          <div class="flex justify-between items-start mb-8">
            <h4 style="color: var(--color-text-primary); margin: 0; font-size: 1.2rem; line-height: 1.3;">${project.name}</h4>
          </div>
          
          <div class="project-stats flex gap-12 mb-12" style="font-size: 0.75rem; color: var(--color-text-muted);">
            <span>⭐ --</span>
            <span>🍴 --</span>
            <span>📦 -- MB</span>
          </div>
          
          <p style="color: var(--color-text-secondary); line-height: 1.6; margin: 0 0 12px 0; font-size: 0.95rem;">${project.description}</p>
          
          <div class="project-meta flex justify-between items-center" style="font-size: 0.7rem; color: var(--color-text-muted);">
            <span>Static fallback data</span>
          </div>
        </div>
        
        <div class="project-tech flex flex-wrap gap-8">
          ${project.tech.map(tech => `<span class="tech-badge" style="padding: 4px 10px; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 8px; font-size: 0.7rem; color: var(--color-electric-blue); font-family: 'JetBrains Mono', monospace;">${tech}</span>`).join('')}
        </div>
      </div>
    </a>
  `).join('');
}

/**
 * Dynamic Blog Posts
 */
export async function initDynamicBlog() {
  const blogGrid = qs('#blog-grid');
  if (!blogGrid) return;

  try {
    // Try to fetch recent posts from Jekyll blog
    const response = await fetch('/feed.json');
    let posts = [];
    
    if (response.ok) {
      const feedData = await response.json();
      posts = feedData.items ? feedData.items.slice(0, 3) : [];
    } else {
      // Fallback to static data
      posts = portfolioData.blog_posts.slice(0, 3);
    }
    
    const blogHTML = posts.map((post, i) => {
      const title = post.title || post.title;
      const excerpt = post.content_text || post.excerpt || '';
      const date = post.date_published || post.date;
      const url = post.url || '/blog/';
      const tags = post.tags || ['cybersecurity'];
      
      return `
        <div class="blog-card animate-slide-in-up" style="animation-delay: ${i * 0.1}s;">
          <div class="blog-header mb-16">
            <h4 style="color: var(--color-text-primary); margin: 0 0 8px 0; font-size: 1.2rem; line-height: 1.3;">
              <a href="${url}" style="color: inherit; text-decoration: none;">${title}</a>
            </h4>
            <div style="color: var(--color-text-muted); font-size: 0.85rem;">
              ${formatDate(date)}
            </div>
          </div>
          <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 16px;">
            ${excerpt.substring(0, 150)}${excerpt.length > 150 ? '...' : ''}
          </p>
          <div class="blog-tags flex flex-wrap gap-6 mb-16">
            ${tags.slice(0, 3).map(tag => `<span class="blog-tag" style="padding: 2px 8px; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 8px; font-size: 0.7rem; color: var(--color-electric-blue);">${tag}</span>`).join('')}
          </div>
          <a href="${url}" class="btn btn--sm btn--outline">Read More →</a>
        </div>
      `;
    }).join('');
    
    blogGrid.innerHTML = blogHTML;
    
  } catch (error) {
    console.log('Blog API failed, using static posts:', error);
    initStaticBlog();
  }
}

/**
 * Static Blog Fallback
 */
export function initStaticBlog() {
  const blogGrid = qs('#blog-grid');
  if (!blogGrid) return;
  
  const posts = portfolioData.blog_posts.slice(0, 3);
  const blogHTML = posts.map((post, i) => `
    <div class="blog-card animate-slide-in-up" style="animation-delay: ${i * 0.1}s;">
      <div class="blog-header mb-16">
        <h4 style="color: var(--color-text-primary); margin: 0 0 8px 0; font-size: 1.2rem; line-height: 1.3;">
          <a href="/posts/${post.slug}/" style="color: inherit; text-decoration: none;">${post.title}</a>
        </h4>
        <div style="color: var(--color-text-muted); font-size: 0.85rem;">
          ${formatDate(post.date)}
        </div>
      </div>
      <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 16px;">
        ${post.excerpt.substring(0, 150)}${post.excerpt.length > 150 ? '...' : ''}
      </p>
      <div class="blog-tags flex flex-wrap gap-6 mb-16">
        ${post.tags.slice(0, 3).map(tag => `<span class="blog-tag" style="padding: 2px 8px; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 8px; font-size: 0.7rem; color: var(--color-electric-blue);">${tag}</span>`).join('')}
      </div>
      <a href="/posts/${post.slug}/" class="btn btn--sm btn--outline">Read More →</a>
    </div>
  `).join('');
  
  blogGrid.innerHTML = blogHTML;
}

/**
 * Multi-Column Contact Section
 */
export function initMultiColumnContact() {
  const channelsList = qs('#contact-channels');
  if (!channelsList) return;

  const aboutText = qs('#about-text');
  if (aboutText) {
    aboutText.innerHTML = portfolioData.personal.bio;
  }

  // Define channels in chronological/priority order with proper icons
  const channels = [
    {
      name: 'Email', 
      handle: portfolioData.social.email, 
      url: `mailto:${portfolioData.social.email}`,
      icon: '📧',
      priority: 'Primary',
      description: 'Best for formal communications and inquiries'
    },
    {
      name: 'GitHub', 
      handle: `@${portfolioData.social.github}`, 
      url: `https://github.com/${portfolioData.social.github}`,
      icon: '⚡',
      priority: 'Code',
      description: 'Open source projects and contributions'
    },
    {
      name: 'LinkedIn', 
      handle: `@${portfolioData.social.linkedin}`, 
      url: `https://linkedin.com/in/${portfolioData.social.linkedin}`,
      icon: '💼',
      priority: 'Professional',
      description: 'Professional networking and opportunities'
    },
    {
      name: 'Twitter', 
      handle: portfolioData.social.twitter, 
      url: `https://twitter.com/${portfolioData.social.twitter.replace('@','')}`,
      icon: '🐦',
      priority: 'Updates',
      description: 'Security insights and research updates'
    }
  ];

  channelsList.innerHTML = channels.map((channel, i) => `
    <li class="contact-channel animate-slide-in-right" style="animation-delay: ${i * 0.05}s;">
      <a href="${channel.url}" class="contact-card" ${channel.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
        <div class="contact-header">
          <span class="contact-icon">${channel.icon}</span>
          <div class="contact-info">
            <h5 class="contact-name">${channel.name} <span class="contact-priority">${channel.priority}</span></h5>
            <p class="contact-handle">${channel.handle}</p>
          </div>
        </div>
      </a>
    </li>
  `).join('');
}
