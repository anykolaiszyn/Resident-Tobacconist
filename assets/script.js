// Optional: Minimal JavaScript for The Resident Tobacconist
// This file is entirely optional and not required for site functionality

(function() {
  'use strict';
  
  // Smooth scroll for anchor links (already handled by CSS scroll-behavior, but as fallback)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Optional: Track details/FAQ open events (for analytics if needed)
  document.querySelectorAll('details').forEach(detail => {
    detail.addEventListener('toggle', function() {
      if (this.open) {
        // Could send analytics event here if needed
        console.log('FAQ opened:', this.querySelector('summary').textContent);
      }
    });
  });
  
  // Optional: Contact form age verification reminder
  const ageCheckbox = document.getElementById('age-confirm');
  if (ageCheckbox) {
    ageCheckbox.addEventListener('change', function() {
      if (this.checked) {
        // Could enable form fields here if implementing a form
        console.log('Age verification confirmed');
      }
    });
  }
  
  // Copy inquiry template to clipboard (Contact page)
  const copyBtn = document.getElementById('copy-inquiry');
  if (copyBtn) {
    copyBtn.addEventListener('click', async function() {
      const template = [
        'Subject: Stewardship Consultation Inquiry',
        '',
        'Property Type: ',
        'Location (City, State/Region): ',
        'Current Humidor Setup (or Planned): ',
        'Guest Volume / Program Scale: ',
        'Timeline (Immediate / Planned / Exploratory): ',
        'Primary Contact (Name, Title, Phone): ',
        '',
        'Notes:',
        ''
      ].join('\n');
      try {
        await navigator.clipboard.writeText(template);
        alert('Inquiry template copied to clipboard.');
      } catch (err) {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = template;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch(e) {}
        document.body.removeChild(ta);
        alert('Inquiry template copied to clipboard.');
      }
    });
  }
  
})();
