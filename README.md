# The Resident Tobacconist

Premium B2B website for hospitality tobacco stewardship services.

## About This Project

This is a static website for **The Resident Tobacconist**, a specialized stewardship service providing:
- Full-service humidor programs
- Hospitality distribution
- Staff training & compliance support

**Target audience:** Hotels, private clubs, lounges, and estates (B2B only)

## Technology Stack

- **HTML5** + **CSS3** + minimal JavaScript (optional)
- No build tools required
- GitHub Pages compatible
- Mobile responsive
- Accessibility-focused semantic markup

## File Structure

```
/
├── index.html                 # Homepage
├── services.html              # Services overview
├── humidor-programs.html      # Humidor stewardship details
├── distribution.html          # Distribution services
├── training.html              # Staff training programs
├── about.html                 # Company information
├── contact.html               # Contact form (mailto)
├── capability.html            # Capability Statement (print-friendly)
├── privacy.html               # Privacy policy
├── assets/
│   ├── styles.css             # Global styles with CSS variables
│   ├── logo.svg               # RT monogram
│   └── script.js              # Minimal JavaScript (optional)
├── robots.txt                 # Search engine directives
├── sitemap.xml                # Site map for SEO
├── CNAME                      # Custom domain configuration
└── README.md                  # This file
```

## Local Preview

Since this is a static site, you can preview it locally by:

1. **Option A: Direct file open**
   - Navigate to the project folder
   - Open `index.html` in your web browser
   - Note: Some browsers may restrict relative links when opening files directly

2. **Option B: Local web server (recommended)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have npx)
   npx serve
   
   # PHP
   php -S localhost:8000
   ```
   Then open `http://localhost:8000` in your browser.

## GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Create a new repository on GitHub (e.g., `Resident-Tobacconist`)
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: The Resident Tobacconist static site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/Resident-Tobacconist.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** (in the left sidebar under "Code and automation")
4. Under **Source**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**
6. GitHub will provide a URL like: `https://YOUR-USERNAME.github.io/Resident-Tobacconist/`

### Step 3: Configure Custom Domain

If you want to use `theresidenttobacconist.com`:

1. **DNS Configuration (at your domain registrar):**
   - Add an `A` record pointing to GitHub's IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - OR add a `CNAME` record pointing to: `YOUR-USERNAME.github.io`

2. **GitHub Pages Settings:**
   - In your repo's **Settings > Pages**
   - Under **Custom domain**, enter: `theresidenttobacconist.com`
   - Click **Save**
   - Check **Enforce HTTPS** (after DNS propagates, usually 24-48 hours)

3. **CNAME File:**
   - The `CNAME` file is already included in this repository
   - If needed, verify it contains only: `theresidenttobacconist.com`

## Contact Form Note

GitHub Pages cannot run server-side code for form processing. The contact page uses:
- **Mailto link**: Opens user's email client with pre-filled recipient
- **Alternative**: Include a phone number for direct contact

For production use, consider:
- Formspree.io (free tier available)
- Netlify Forms (if hosting on Netlify instead)
- Google Forms embed
- Custom backend service

## Customization

### Capability Statement

The **Capability Statement** ([capability.html](capability.html)) is designed to print cleanly as a one-page PDF for procurement submissions:

- Click "Print / Save as PDF" button on the page
- Or use browser's Print function (Ctrl/Cmd + P)
- Select "Save as PDF" as destination
- Optimized for US Letter (8.5" x 11")

The page includes comprehensive print CSS that:
- Hides navigation and footers
- Sets white background
- Adjusts spacing and font sizes for print
- Ensures page breaks don't split sections

### Colors

Edit CSS variables in `assets/styles.css`:

```css
:root {
  --color-ink: #1a1d23;          /* Dark background */
  --color-brass: #b8935e;         /* Primary accent */
  --color-warm-white: #f8f6f2;    /* Text color */
}
```

To switch to ivory accent:
```css
--accent: var(--color-ivory);  /* Instead of brass */
```

### Content Updates

All copy is written in semantic HTML. To update:
1. Open the relevant `.html` file
2. Edit text within HTML tags
3. Maintain accessibility attributes (alt text, ARIA labels, semantic headings)

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (tested down to 320px width)
- Semantic HTML5 for screen readers
- Keyboard navigation support

## Compliance & Legal

This website is designed for B2B tobacco stewardship services:
- No consumer sales functionality
- No shopping cart or pricing
- Includes 21+ notice in footer and contact page
- Compliance-first language throughout

**Important:** This website does not constitute legal advice. Property operators should consult qualified legal counsel regarding tobacco program compliance in their jurisdiction.

## License

© 2025 The Resident Tobacconist. All rights reserved.

## Support

For technical questions about this website code, refer to GitHub Pages documentation:
- https://docs.github.com/en/pages

For business inquiries:
- Email: inquiries@theresidenttobacconist.com
- See contact.html for full details
