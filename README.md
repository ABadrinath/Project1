# Personal Portfolio Website

**CSCI 310 Project 1 - Fall 2025**

A responsive personal portfolio website showcasing my skills as a Computer Science student and aspiring web developer.

## 🌐 Live Demo
[View Live Website](https://[your-username].github.io/personal-portfolio-website)

## 📋 Project Overview

This website serves as my professional online presence, featuring a modern, responsive design with interactive JavaScript elements. Built from scratch using HTML5, CSS3, and vanilla JavaScript.

### Key Features
- ✅ **Responsive Design**: Optimized for desktop (900px) and mobile (600px) layouts
- ✅ **Multi-Tab Navigation**: Smooth switching between different content sections  
- ✅ **7 Dynamic JavaScript Effects**: Interactive animations and user engagement
- ✅ **Professional Content**: Skills, projects, and experience showcase
- ✅ **Personal Touch**: Interests, hobbies, and personality insights
- ✅ **Mobile-First Approach**: Optimized for all device types

## 🛠 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, Custom Animations
- **Hosting**: GitHub Pages
- **Version Control**: Git & GitHub
- **Design**: Mobile-First Responsive Design

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling and responsive design
├── js/
│   └── app.js          # Interactive JavaScript functionality
├── images/
│   ├── hero-bg.jpg     # Background images
│   ├── project1.jpg    # Project screenshots  
│   ├── project2.jpg
│   └── profile.jpg     # Profile image
├── README.md           # This documentation
└── docs/               # Additional documentation
    ├── Development_Notebook.md
    └── presentation-slides.pdf
```

## 🎯 Website Sections

### 🏠 Home
- Professional introduction and welcome message
- Call-to-action buttons for easy navigation
- Hero section with engaging visuals

### 💼 Skills/Professional  
- **Technical Skills**: HTML5, CSS3, JavaScript, Git, GitHub, Responsive Design
- **Academic Background**: Computer Science coursework and projects
- **Experience**: Development projects and learning journey

### 🚀 Projects
Interactive showcase featuring **7 JavaScript Dynamic Effects**:

1. **🎠 Animated Image Carousel** - Auto-rotating slideshow with manual controls
2. **✨ Interactive Hover Effects** - Smooth card animations and transitions
3. **🌟 Fade In/Out Animations** - Content transition effects  
4. **🖱 Smooth Scrolling** - Custom navigation behavior
5. **🔘 Dynamic Button Effects** - Ripple effects and loading states
6. **📱 Modal/Popup System** - Project detail overlays
7. **⏳ Progressive Loading** - Content loading animations

### 👤 Personal/About
- **Interests**: Gaming, NFL football, emerging technology
- **Hobbies**: Coding challenges, sports analysis, continuous learning
- **Goals**: Software engineering career, full-stack development

## 📱 Responsive Design

### Desktop Layout (900px+)
- Header: 200px height with professional branding
- Navigation: 20px spacing for optimal usability
- Content: Full-width utilization with proper margins

### Mobile Layout (600px-)
- Header: 150px compact design
- Menu: 50px touch-friendly navigation
- Content: Optimized for mobile interaction

## 🚀 JavaScript Effects Breakdown

### 1. Image Carousel
```javascript
// Auto-rotating slideshow with smooth transitions
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}, 5000);
```

### 2. Hover Animations
```css
.card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
}
```

### 3. Content Fading
```javascript
function fadeInContent(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    // Animate to visible state with CSS transitions
}
```

## 🌟 Development Process

1. **Planning Phase**: Requirements analysis, wireframing, content strategy
2. **Core Development**: HTML structure, CSS styling, JavaScript functionality  
3. **Content Creation**: Professional and personal content development
4. **Testing & Optimization**: Cross-browser testing, performance optimization
5. **Deployment**: GitHub Pages setup and live testing

## 🧪 Browser Compatibility

Tested and working on:
- ✅ Chrome (Latest)
- ✅ Firefox (Latest)  
- ✅ Safari (Latest)
- ✅ Edge (Latest)

## 📊 Performance Features

- **Optimized Images**: Compressed for fast loading
- **Efficient CSS**: Minimal, well-organized styling
- **Smooth Animations**: Hardware-accelerated when possible
- **Mobile Performance**: Touch-optimized interactions

## 🎓 Learning Outcomes

### Technical Skills Developed
- Advanced CSS Grid and Flexbox layouts
- JavaScript DOM manipulation and event handling
- Responsive web design principles
- Git version control and GitHub workflow
- Web performance optimization

### Design Principles Applied
- User experience and interface design
- Mobile-first responsive approach  
- Accessibility and semantic HTML
- Visual hierarchy and typography
- Professional color schemes

## 🔧 Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/[your-username]/personal-portfolio-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd personal-portfolio-website
   ```

3. Open `index.html` in your preferred browser or use a local server:
   ```bash
   # Using Python's built-in server
   python -m http.server 8000

   # Using Node.js live-server (if installed)
   live-server
   ```

4. View the website at `http://localhost:8000`

## 🚀 Deployment

This website is automatically deployed using GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Pages automatically updates the live site
3. Changes are typically live within a few minutes

## 📈 Future Enhancements

Planned improvements for future versions:
- [ ] Dark mode toggle functionality
- [ ] Contact form with validation
- [ ] Blog section for technical writing
- [ ] Enhanced project filtering system
- [ ] Performance analytics integration
- [ ] SEO optimization improvements

## 📞 Contact

- **Email**: [your-email]@usc.edu
- **LinkedIn**: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
- **GitHub**: [@your-username](https://github.com/your-username)

## 📄 License

This project is created for educational purposes as part of CSCI 310 coursework.

## 🙏 Acknowledgments

- CSCI 310 course materials and specifications
- MDN Web Docs for technical references
- GitHub Pages for free hosting
- USC Computer Science Department

---

**⭐ If you found this project interesting, please consider giving it a star!**

*Last updated: September 2025*
