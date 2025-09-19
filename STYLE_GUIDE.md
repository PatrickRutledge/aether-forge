# Aether Forge Style Guide

## Brand Identity
**Tagline**: "We Make Simple Apps"
**Philosophy**: Complex technology made simple through intuitive, nostalgic interfaces

## Visual Design Language

### CRT Aesthetic Guidelines

#### Screen Effects
```css
/* Phosphor glow for all green text */
text-shadow: 0 0 5px #00ff66;

/* Hover state intensification */
text-shadow: 0 0 10px #00ff66, 0 0 20px #00ff66;

/* Screen edge darkening */
background: radial-gradient(
    ellipse at center,
    rgba(0,255,100,0.03) 0%,
    rgba(0,0,0,0.5) 100%
);
```

#### Frame Design
- **Bezel**: 3D effect with multiple shadows
- **Padding**: 40px on desktop, 20px on mobile
- **Border Radius**: 30px outer, 20px inner screen
- **Depth**: Multiple box-shadows for realistic plastic feel

### Color Palette

```css
:root {
    --phosphor-green: #00ff66;
    --crt-dark: #0a0f0a;
    --bezel-dark: #1a1a1a;
    --bezel-light: #3a3a3a;
    --power-red: #c41e3a;
    --power-red-dark: #8b0020;
    --text-gray: #666;
    --bg-light: #f5f5f5;
}
```

### Typography Rules

#### Font Stack
```css
font-family: 'VT323', 'Courier New', monospace;
```

#### Size Hierarchy
- **Hero/Title**: 48px (desktop) / 36px (mobile)
- **Section Headers**: 32px / 24px
- **Navigation**: 24px / 20px
- **Body Text**: 20px / 18px
- **Form Elements**: 16px / 14px
- **Status Text**: 16px / 14px

#### Letter Spacing
- Headers: 3-4px
- Body text: 2px
- Small text: 1px

### Component Patterns

#### Buttons
```css
/* CRT Terminal Button */
.crt-button {
    background: transparent;
    border: 2px solid #00ff66;
    color: #00ff66;
    padding: 10px 25px;
    letter-spacing: 3px;
    text-shadow: 0 0 5px #00ff66;
    transition: all 0.3s;
}

.crt-button:hover {
    background: #00ff66;
    color: #0a0f0a;
    box-shadow: 0 0 30px rgba(0,255,102,0.5);
}
```

#### Form Inputs
```css
.crt-input {
    background: rgba(0, 255, 102, 0.05);
    border: 1px solid rgba(0, 255, 102, 0.3);
    color: #00ff66;
    padding: 6px 10px;
    text-shadow: 0 0 3px #00ff66;
}

.crt-input:focus {
    border-color: #00ff66;
    background: rgba(0, 255, 102, 0.1);
    box-shadow: 0 0 20px rgba(0, 255, 102, 0.2);
}
```

### Animation Standards

#### Timing Functions
- **Screen effects**: `ease-in-out`
- **Hover states**: `0.3s transition`
- **Shutdown sequence**: `1.5s ease-in`
- **Power on**: `2s ease-out`
- **Phosphor fade**: `3s ease-out`

#### Key Animations
1. **Scanlines**: 8s continuous loop
2. **Flicker**: 0.15s random intervals
3. **LED Pulse**: 2s breathing effect
4. **Typing**: 100ms per character
5. **Cursor Blink**: 1s intervals

### Layout Principles

#### Spacing System
- **Base unit**: 10px
- **Section padding**: 40px (4 units)
- **Element spacing**: 20px (2 units)
- **Inline spacing**: 10px (1 unit)

#### Grid System
```css
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 40px;
}
```

### Responsive Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

### Content Guidelines

#### Writing Style
- **Tone**: Technical but accessible
- **Emphasis**: Always highlight simplicity
- **Descriptions**: Focus on user benefit, not features
- **Length**: Keep descriptions under 2 lines

#### Project Descriptions Template
"[Technical complexity] made simple. [User benefit] with [simple interface description]."

Example: "Complex data visualization simplified. Transform your raw data into actionable insights with our user-friendly dashboard."

### Interaction Patterns

#### Hover Effects
- Text: Increase glow intensity
- Buttons: Invert colors
- Links: Add underline + glow
- Tiles: Lift with shadow

#### Click Feedback
- Buttons: Depress effect
- Links: Brief flash
- Tiles: Scale animation

### Special Effects

#### CRT Shutdown Sequence
1. Vertical collapse (0-40%)
2. Horizontal collapse (40-80%)
3. Brightness surge (80-90%)
4. Fade to black (90-100%)

#### Power On Sequence
1. Point of light (0-10%)
2. Horizontal expansion (10-40%)
3. Vertical fill (40-80%)
4. Overshoot bounce (80-90%)
5. Settle (90-100%)

### Accessibility Notes
- Maintain 4.5:1 contrast ratio minimum
- Provide focus indicators for keyboard nav
- Ensure animations respect prefers-reduced-motion
- Keep interactive elements minimum 44x44px

### Do's and Don'ts

#### DO:
- ✓ Use phosphor green for all primary text
- ✓ Maintain consistent letter spacing
- ✓ Keep forms simple and single-column
- ✓ Use animation to enhance, not distract
- ✓ Test on actual CRT if possible for authenticity

#### DON'T:
- ✗ Mix modern UI elements with CRT theme
- ✗ Use smooth/anti-aliased fonts
- ✗ Add colors beyond the defined palette
- ✗ Create scrollable content where avoidable
- ✗ Use transparency effects (except for overlays)

### Testing Checklist
- [ ] All text has phosphor glow
- [ ] Scanlines visible but not distracting
- [ ] Reset button triggers full animation
- [ ] Forms fit in viewport without scrolling
- [ ] Navigation remains accessible
- [ ] Projects load in new tabs
- [ ] Contact form submits successfully
- [ ] Responsive design works on mobile