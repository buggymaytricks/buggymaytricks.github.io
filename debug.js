// Debug script
console.log('=== DEBUG: Page loaded ===');

document.addEventListener('DOMContentLoaded', () => {
  console.log('=== DEBUG: DOM loaded ===');
  
  // Check if elements exist
  const elements = {
    'skills-chart': document.getElementById('skills-chart'),
    'skills-list': document.getElementById('skills-list'),
    'tools-grid': document.getElementById('tools-grid'),
    'projects-grid': document.getElementById('projects-grid'),
    'blog-grid': document.getElementById('blog-grid')
  };
  
  console.log('=== DEBUG: Elements check ===');
  Object.entries(elements).forEach(([name, element]) => {
    console.log(`${name}:`, element ? 'FOUND' : 'NOT FOUND');
  });
  
  // Check if Chart.js is loaded
  console.log('Chart.js loaded:', typeof Chart !== 'undefined');
  
  // Check if skills-config.json is accessible
  fetch('/skills-config.json')
    .then(response => {
      console.log('skills-config.json response:', response.status);
      return response.json();
    })
    .then(data => {
      console.log('skills-config.json data:', data);
    })
    .catch(error => {
      console.error('skills-config.json error:', error);
    });
});
