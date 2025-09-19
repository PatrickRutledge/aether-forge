# Aether Forge Website

## Project Overview
A CRT-themed retro website that embodies the philosophy "We Make Simple Apps" - even complex applications are presented through a nostalgic, simple interface.

## Key Features
- **Realistic CRT Monitor Effect**: Full phosphor green terminal aesthetic with curved screen, scanlines, and static
- **Reset Button**: Interactive CRT shutdown/power-on animation sequence
- **Responsive Design**: Adapts to all screen sizes while maintaining the retro feel
- **No-Scroll Philosophy**: Contact page fits entirely in viewport - true simplicity

## File Structure
```
aether-forge/
├── index.html           # Landing page with full CRT effect
├── projects.html        # Projects showcase with fixed header
├── contact.html         # Contact form in CRT terminal style
├── styles.css          # Main CRT styling and animations
├── projects.css        # Projects page specific styles
├── contact.css         # Contact page specific styles
├── script.js           # CRT effects and interactions
├── contact.js          # Contact form functionality
└── images/
    ├── aetherforge-1024x1024.png    # Square logo
    ├── aetherforge-1472x704.png     # Wide logo
    ├── email2sql.png                # Project screenshots
    ├── runchart.png
    ├── echoreportlab.png
    ├── strongs-export.png
    ├── Dashboard.png
    └── bob.png
```

## Design System

### Colors
- **Primary Green**: `#00ff66` - Classic phosphor terminal green
- **Dark Background**: `#0a0f0a` - CRT screen background
- **Frame/Bezel**: `#3a3a3a` to `#1a1a1a` gradient
- **Reset Button**: `#c41e3a` to `#8b0020` gradient (red)

### Typography
- **Font**: 'VT323' monospace (Google Fonts)
- **Sizes**:
  - Hero text: 48px
  - Navigation: 24px
  - Body text: 20px
  - Form labels: 16px

### CRT Effects
1. **Scanlines**: Horizontal lines animated across screen
2. **Static Noise**: Canvas-generated random pixels
3. **Screen Flicker**: Subtle brightness variations
4. **Phosphor Glow**: Text-shadow and box-shadow effects
5. **Screen Curvature**: Perspective transform on frame

## Projects Configuration

### Current Projects (in order):
1. **Commission Calculator** - Saved Mfg. rep over $20k
2. **Email 2 Order** - Email to business system automation
3. **RunChart Goal Tracker** - Visual performance tracking
4. **Echo Report Lab** - Medical reporting automation
5. **Strong's Lexicount** - Biblical text analysis tool
6. **GitAgent4Work** - NLP GitHub repository assistant

### Adding New Projects
Edit `projects.html` and add a new tile:
```html
<div class="project-tile" data-project="project-name" onclick="window.open('URL', '_blank')">
    <div class="project-image">
        <img src="images/your-image.png" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Description emphasizing simplicity...</p>
    </div>
</div>
```

## Special Features

### Reset Button Animation Sequence
1. **Shutdown** (1.5s): Screen collapses to center point
2. **Phosphor Dot** (3s): Green dot fades at center
3. **Power LED**: Dims during shutdown
4. **Power On** (2s): Expands from center with overshoot
5. **Text Retype**: "WE MAKE SIMPLE APPS" retypes

### Contact Form
- **Formspree Integration**: `https://formspree.io/f/xjkrpeoy`
- **Success Response**: Shows company address
  ```
  Post Office Box 52
  Birmingham, Alabama 35201
  United States of America
  ```

## Browser Compatibility
- Modern browsers with CSS Grid support
- Chrome, Firefox, Safari, Edge (latest versions)
- Responsive breakpoints at 1024px and 768px

## Deployment Notes
1. Rename directory from `afsite` to `aether-forge` when deploying
2. All links use relative paths - works on any domain
3. Images should be optimized for web (current placeholders can be replaced)
4. Contact form requires Formspree account for email handling

## Maintenance

### Common Tasks
- **Update project image**: Replace file in `images/` folder with same name
- **Change CRT color**: Update `#00ff66` across CSS files
- **Adjust animation speed**: Modify animation durations in `styles.css`
- **Change contact endpoint**: Update form action in `contact.html`

## Philosophy
"We make simple apps. Even if the app is complicated, we make it simple."
- Every element serves a purpose
- No scrolling where it can be avoided
- Nostalgic design creates immediate understanding
- Complex functionality hidden behind simple interface