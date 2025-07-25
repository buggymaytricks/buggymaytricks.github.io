/**
 * Charts Module - Skills chart and data visualization
 * Handles Chart.js integration and skills visualization
 */

import { qs, createCachedFetch, isMobile } from './utils.js';
import { portfolioData } from './data.js';

/**
 * Skills Chart with Animation
 */
let skillsChart = null; // Track chart instance

export async function initSkillsWithAnimations() {
  // Prevent double initialization
  if (skillsChart) {
    console.log('🔄 Skills chart already initialized');
    return;
  }

  if (typeof Chart === 'undefined') {
    console.warn('⚠️ Chart.js not available, skipping skills chart');
    return;
  }
  
  console.log('✅ Chart.js available, initializing skills chart');
  
  // Load skills from external config file ONLY
  let skillsData = [];
  
  try {
    const cachedSkillsFetch = createCachedFetch('skills_config', 1440); // Cache for 1 day (1440 minutes)
    const skillsResponse = await cachedSkillsFetch('/skills-config.json');
    if (skillsResponse.ok) {
      const skillsConfig = await skillsResponse.json();
      skillsData = skillsConfig.skills;
      console.log('✅ Skills loaded from config file:', skillsData.length, 'skills');
    } else {
      console.error('❌ Failed to load skills-config.json, using fallback data');
      // Fallback to inline skills data
      skillsData = portfolioData.skills;
    }
  } catch (error) {
    console.error('❌ Error loading skills config, using fallback data:', error);
    // Fallback to inline skills data
    skillsData = portfolioData.skills;
  }

  if (skillsData.length === 0) {
    console.error('❌ No skills data available');
    return;
  }

  // Enhanced Radar Chart
  const ctx = qs('#skills-chart');
  if (ctx) {
    console.log('✅ Canvas element found, creating chart');
    
    // Destroy existing chart if it exists
    if (skillsChart) {
      skillsChart.destroy();
      skillsChart = null;
    }
    
    const mobile = isMobile();
    
    try {
      skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: skillsData.map(s => s.name),
          datasets: [{
            label: 'Skill Level',
            data: skillsData.map(s => s.level),
            fill: true,
            backgroundColor: 'rgba(0, 212, 255, 0.15)',
            borderColor: '#00d4ff',
            pointBackgroundColor: '#ff0051',
            pointBorderColor: '#ffffff',
            borderWidth: 3,
            pointRadius: mobile ? 4 : 6,
            pointHoverRadius: mobile ? 6 : 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 20,
              bottom: 20,
              left: 20,
              right: 20
            }
          },
          animation: {
            duration: 2000,
            easing: 'easeOutQuart'
          },
          plugins: { 
            legend: { display: false } 
          },
          scales: { 
            r: { 
              max: 100,
              min: 0,
              ticks: { 
                display: false,
                stepSize: 20
              },
              grid: { 
                color: 'rgba(255,255,255,.08)',
                lineWidth: 1
              },
              pointLabels: { 
                color: '#b3b3b3', 
                font: { 
                  family: 'JetBrains Mono', 
                  size: mobile ? 9 : 11,
                  weight: '500'
                }
              },
              angleLines: {
                color: 'rgba(255,255,255,.05)'
              }
            } 
          }
        }
      });
      
      console.log('✅ Skills chart created successfully', skillsChart);
      
      // Animate chart on creation
      setTimeout(() => {
        skillsChart.update('active');
      }, 500);
      
    } catch (error) {
      console.error('❌ Error creating skills chart:', error);
    }
  } else {
    console.error('❌ Canvas element #skills-chart not found');
  }

  // Skills list removed - only showing radar chart
}

/**
 * Animated Certifications Progress Bars
 */
export function initAnimatedCertifications() {
  const list = qs('#certifications-list');
  if (!list) return;
  
  list.innerHTML = portfolioData.certifications.map((cert, i) => `
    <div class="cert-item animate-slide-in-left" style="animation-delay: ${i * 0.2}s;">
      <div class="cert-header flex justify-between items-start mb-16">
        <div>
          <div class="cert-name" style="font-weight: 600; font-size: 1.1rem; color: var(--color-text-primary);">${cert.name}</div>
          <div class="cert-status" style="font-size: 0.9rem; color: var(--color-text-muted); margin-top: 4px;">
            ${cert.status}${cert.year ? ` • Target: ${cert.year}` : ''}
          </div>
        </div>
        <span class="cert-progress-text" style="font-weight: 700; color: var(--color-electric-blue);">${cert.progress}%</span>
      </div>
      <div class="cert-progress-container" style="width: 100%; height: 6px; background: var(--color-bg-tertiary); border-radius: 3px; overflow: hidden;">
        <div class="cert-progress-fill" 
             data-width="${cert.progress}%" 
             style="width: 0; height: 100%; background: var(--color-status-progress); transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);">
        </div>
      </div>
    </div>
  `).join('');

  // Animate certification progress
  const certObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector('.cert-progress-fill');
        if (bar) {
          setTimeout(() => {
            bar.style.width = bar.dataset.width;
          }, 300);
        }
        certObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  [...list.querySelectorAll('.cert-item')].forEach(item => certObserver.observe(item));
}
