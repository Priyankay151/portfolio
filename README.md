# 🌟 Priyanka Yadav - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, projects, and skills.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Dynamic typing effect
  - Parallax scrolling
  - Card tilt effects
  - Animated statistics counter
  - Intersection Observer animations
- **Performance Optimized**: 
  - Lazy loading images
  - Efficient CSS animations
  - Minimal JavaScript bundle
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation support

## 🚀 Quick Start

### Option 1: Open Locally

1. **Navigate to the portfolio folder:**
   ```bash
   cd portfolio
   ```

2. **Open `index.html` in your browser:**
   - Double-click `index.html`, or
   - Right-click → Open with → Your preferred browser

### Option 2: Use a Local Server (Recommended)

Using Python:
```bash
cd portfolio
python -m http.server 8000
```
Then visit: `http://localhost:8000`

Using Node.js (with http-server):
```bash
cd portfolio
npx http-server -p 8000
```
Then visit: `http://localhost:8000`

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🌐 Deployment Options

### 1. GitHub Pages (Free & Easy)

1. **Create a GitHub repository**
2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/Priyankay151/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → `/root`
   - Click Save

4. **Your site will be live at:**
   `https://priyankay151.github.io/portfolio/`

### 2. Vercel (Fastest Deployment)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd portfolio
   vercel
   ```

3. **Follow the prompts** and your site will be live in seconds!

### 3. Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   cd portfolio
   netlify deploy --prod
   ```

### 4. Manual Deployment

Upload the entire `portfolio` folder to any web hosting service (GoDaddy, Bluehost, etc.)

## 🎨 Customization Guide

### Update Personal Information

1. **Profile Image:**
   - Replace the image path in `index.html` (line ~61):
   ```html
   <img src="YOUR_IMAGE_PATH.jpg" alt="Priyanka Yadav">
   ```

2. **Contact Information:**
   - Update email, phone, and GitHub links in the hero section and contact section

3. **LinkedIn URL:**
   - Update LinkedIn profile URL throughout the HTML file

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;      /* Main brand color */
    --secondary-color: #764ba2;    /* Secondary brand color */
    --accent-color: #f093fb;       /* Accent highlights */
    /* ... other variables ... */
}
```

### Add/Remove Sections

- Each section has an `id` attribute for navigation
- Update the navbar links to match section IDs
- Maintain the semantic HTML structure

### Modify Projects

Update the projects section in `index.html`:

```html
<div class="project-card">
    <div class="project-header">
        <i class="fas fa-icon-name project-icon"></i>
        <h3>Project Title</h3>
        <span class="project-date">Date</span>
    </div>
    <p class="project-description">Description</p>
    <div class="project-tags">
        <span>Tech 1</span>
        <span>Tech 2</span>
    </div>
</div>
```

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ⚡ Performance Tips

1. **Optimize Images:**
   - Compress images before uploading
   - Use WebP format for better compression
   - Recommended size: < 500KB per image

2. **Minimize External Dependencies:**
   - Only Font Awesome icons are loaded externally
   - Google Fonts for typography

3. **Enable Caching:**
   - If using a custom server, enable browser caching for static assets

## 🎯 Key Highlights from Resume

### Professional Experience
- **3+ years** at Intuit Inc.
- Led migration of **~3 billion records**
- **60% reduction** in data redundancy
- **5x improvement** in scalability
- **99.9% uptime** achievement

### Technical Expertise
- **Languages**: Java, Kotlin, Python, C#, JavaScript, Swift
- **Frameworks**: Spring Boot, React.js, Node.js, .NET
- **Databases**: PostgreSQL, MySQL, DynamoDB
- **Systems**: Kafka, AWS, Kubernetes, Microservices
- **AI/ML**: PyTorch, Scikit-learn

### Education
- **IIT Bhilai** - B.Tech in Computer Science
- **CGPA**: 8.46/10

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts (Poppins)** - Typography

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio!

## 👤 Contact

**Priyanka Yadav**
- 📧 Email: priyankay@iitbhilai.ac.in
- 📱 Phone: +91 7568713703
- 💼 GitHub: [github.com/Priyankay151](https://github.com/Priyankay151)
- 📍 Location: Bengaluru, India

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by Font Awesome
- Fonts by Google Fonts

---

**Built with ❤️ by Priyanka Yadav**

*Last Updated: December 2025*

