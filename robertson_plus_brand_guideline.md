# Robertson+ Brand Guideline

## Executive Summary

Robertson+ is the intelligence layer for mid-market Swiss commercial real estate. We bring together asset diagnosis, market logic, income quality, ESG roadmap, and financial re-underwriting to reveal credible paths to stronger performance.

Our brand embodies sober precision, strategic authority, and discreet sophistication. We approach value engineering not as marketing, but as disciplined analysis—clarity over complexity, quantified insights over generic advice.

---

## 1. Brand Identity

### 1.1 Core Purpose

Robertson+ serves decision-makers responsible for underperforming, under-positioned, or transitional commercial assets. We provide the clarity required to act with greater precision on occupancy, capital deployment, risk sequencing, and value narrative.

### 1.2 Brand Positioning

**Not:** A marketing or brokerage platform
**But:** An intelligence layer—a system to read, strengthen, and reposition real estate assets

**Not:** Generic real estate advisory
**But:** Quantified, decision-grade value engineering grounded in Swiss market realities

**Not:** Public-facing marketing noise
**But:** Confidential, discretion-appropriate analysis for sensitive situations

### 1.3 Brand Attributes

- **Strategic**: Focused on measurable value creation pathways
- **Analytical**: Grounded in data, not opinion
- **Discreet**: Respectful of sensitive ownership structures and repositioning scenarios
- **Precision-driven**: Clear on what to do, in what order, and why
- **Swiss-native**: Deep understanding of local regulation, planning, energy standards, and market structure

---

## 2. Visual Identity

### 2.1 Logo System

#### Primary Logo: Robertson+ with Cross Symbol

The Robertson+ logo consists of:
- **Text**: "Robertson+" in Early Sans Regular, color #526163 (Anthracite)
- **Symbol**: A cross representing the PLUS sign
  - Inner angles: rounded (radius 4-6px)
  - Center: perfect square (creates crossroad aesthetic)
  - Proportions: balanced, clean geometry
  - Color: #526163 (Anthracite)

#### Logo Variations

1. **Horizontal lockup** (text + symbol, side-by-side)
   - Symbol width: 36-48px
   - Gap between symbol and text: 12px
   - Minimum size: 36px symbol width

2. **Symbol-only** (cross standalone)
   - Used in navigation, favicons, app icons
   - Minimum size: 24px
   - Maximum size: 200px (hero accents)

3. **Full wordmark + tagline** (footer version)
   - "Robertson+ — Swiss Commercial Real Estate Value Engineering"
   - Single line or stacked, depending on context

#### Logo Placement Rules

- **Navigation**: Symbol + text, 36px symbol
- **Hero**: Symbol-only accent (subtle background, 15-20% opacity)
- **Footer**: Full tagline with symbol, left-aligned
- **Social/Digital**: Symbol-only or horizontal lockup
- **Print**: Horizontal lockup preferred

#### Cursor Animation

When clicked or hovered, the cross symbol rotates 45 degrees smoothly over 300-500ms. This serves as tactile feedback and reinforces the "crossroad" navigation metaphor.

```css
transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
transform: rotate(45deg);
```

### 2.2 Color Palette

| Name | Usage | Hex | RGB | Notes |
|------|-------|-----|-----|-------|
| **White** | Primary background | #ffffff | 255, 255, 255 | All page backgrounds, card interiors |
| **Ciment** | Surfaces, overlays, section backgrounds | #f5f7f2 | 245, 247, 242 | Warm light gray; accent sections, card containers |
| **Anthracite** | Titles, subtitles, logos, accents | #526163 | 82, 97, 99 | Cool dark gray; primary text hierarchy |
| **Black** | Body text, primary copy | #000000 | 0, 0, 0 | All narrative text, paragraphs |
| **Electric Blue** | CTA buttons, interactive elements | #005eff | 0, 94, 255 | Primary action color; high contrast |

#### Color Application Rules

- **White (#ffffff)**: Page background, card interiors, whitespace
- **Ciment (#f5f7f2)**: Feature sections, surface containers, subtle distinction layers
- **Anthracite (#526163)**: All headings H1–H3, section titles, logo, accent text
- **Black (#000000)**: Body copy, paragraphs, descriptions, supporting text
- **Electric Blue (#005eff)**: All primary CTAs, hover states, emphasis, interactive elements

#### Accessibility

- Anthracite + White: contrast ratio 8.1:1 (AAA)
- Electric Blue + White: contrast ratio 8.2:1 (AAA)
- Black + White: contrast ratio 21:1 (AAA)
- All combinations meet WCAG AA minimum (4.5:1 for text)

### 2.3 Typography

#### Font Family: Early Sans Regular

- **Primary font**: Early Sans Regular (400 weight) for all text
- **Fallback stack**: Early Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif
- **Only two weights used**: Regular (400) and Bold (600)
- **Never use**: 300, 500, 700+ weights

#### Typographic Hierarchy

| Element | Size | Weight | Line Height | Letter Spacing | Color | Use Case |
|---------|------|--------|-------------|----------------|-------|----------|
| **H1 (Headline)** | 48–52px | 600 | 1.15 | -0.5px | #526163 | Hero headline, page title |
| **H2 (Section Title)** | 28–36px | 600 | 1.20 | 0px | #526163 | Major section headers |
| **H3 (Subheading)** | 18–24px | 600 | 1.30 | 0px | #526163 | Card titles, column headers |
| **Body (Regular)** | 15–16px | 400 | 1.7–1.8 | 0px | #000000 | Paragraphs, narrative text |
| **Body (Small)** | 14px | 400 | 1.6 | 0px | #000000 | Secondary descriptions |
| **Label** | 12–13px | 600 | 1.4 | 0.5px | #526163 | Eyebrows, tags, captions |
| **Eyebrow/Label** | 13px | 600 | 1.4 | 2px | #526163 | Section eyebrows (caps) |

#### Typography Rules

- **No mid-sentence bolding** except entity names in code style
- **Sentence case always** — never Title Case or ALL CAPS (except eyebrows which are minimal caps)
- **Maximum line length**: 70–80 characters for body text (readability)
- **Minimum font size**: 12px (labels only; never smaller)
- **Paragraph spacing**: 1.5rem between paragraphs
- **Heading spacing**: 0.5rem below heading to first text, 2rem after paragraph to next heading

---

## 3. Image & Media Treatment

### 3.1 Border Radius Rules

#### Interior Images (visible whitespace around all edges)
- **Rounded corners**: 50px radius on all corners
- **Purpose**: Soften and modernize contained visual content
- **Examples**: Hero section background images, card illustrations, featured screenshots

#### Edge-Aligned Images (touching screen border on one or more sides)
- **No border radius** (flush with edge)
- **Purpose**: Clean, structured alignment; creates visual boundary
- **Examples**: Full-width sections, background overlays at screen edge

#### Standard Card Images
- **Rounded corners**: 20px radius
- **Purpose**: Consistent with card design system

### 3.2 Image Opacity & Layering

- **Background accent images**: 10–15% opacity (very subtle)
- **Featured images**: 100% opacity
- **Overlay graphics**: 10–20% opacity over colored backgrounds
- **Logo watermarks**: 8–12% opacity in background

### 3.3 Image Formats

- **Preferred**: Modern formats (WebP, AVIF) with fallback to PNG/JPG
- **Compression**: Optimized for web (< 200KB for hero, < 100KB for cards)
- **Aspect ratios**: Maintain 16:9 or 4:3 for consistency

---

## 4. Component Design System

### 4.1 Buttons

#### Primary CTA Button

- **Background**: Electric Blue #005eff
- **Text**: White #ffffff, 13px, 600 weight
- **Padding**: 12px horizontal × 28px vertical
- **Border radius**: 6px
- **Border**: None
- **Shadow**: Subtle (0 4px 12px rgba(0, 94, 255, 0.2))
- **Hover**: Brightness +10%, slight scale (1.02)
- **Active**: Scale (0.98), shadow reduced
- **Cursor**: Cross symbol (rotates 45° on interaction)

#### Secondary CTA Button (Ghost)

- **Background**: Transparent
- **Text**: Electric Blue #005eff, 13px, 600 weight
- **Border**: 1px solid #005eff
- **Padding**: 12px horizontal × 28px vertical
- **Border radius**: 6px
- **Hover**: Background #005eff, text white
- **Active**: Scale (0.98)
- **Cursor**: Cross symbol (rotates 45° on interaction)

#### Button Text Rules

- All buttons use sentence case
- CTA text is direct and action-oriented
- Primary CTAs: "Request a Confidential Asset Review"
- Secondary CTAs: "See How We Think" or "Contact Robertson+"

### 4.2 Cards & Containers

#### Standard Card

- **Background**: White #ffffff
- **Border**: 1px solid #e8e8e8 (light gray)
- **Border radius**: 20px
- **Padding**: 2rem (32px)
- **Box shadow**: None (flat design)
- **Hover**: Border color to #d0d0d0, subtle lift via margin shift

#### Feature Card (Accent variant)

- **Background**: Ciment #f5f7f2
- **Border**: 1px solid #d4d4d0 (subtle)
- **Border radius**: 20px
- **Padding**: 2rem (32px)
- **Use case**: "What We Do" columns, audience panels

#### Section Container

- **Background**: White #ffffff or Ciment #f5f7f2 (alternating)
- **Padding**: 4–5rem vertical, 3rem horizontal
- **Max width**: 1400px (centered content)
- **Margins**: Flush to viewport edges

### 4.3 Form Elements

- **Input fields**: 36px height, 1px border #d0d0d0, 12px internal padding
- **Focus state**: Electric Blue border #005eff, outline
- **Placeholder text**: Anthracite #526163, 13px
- **Never**: Colored backgrounds, gradients, or excessive shadows

### 4.4 Text Accents

#### Eyebrow / Label

- **Size**: 13px
- **Weight**: 600
- **Color**: Anthracite #526163
- **Letter spacing**: 2px
- **Transform**: Sentence case (not all caps)
- **Use**: Section headers, pre-heading context

#### Supporting Tagline

- **Size**: 14px
- **Weight**: 600
- **Color**: Anthracite #526163
- **Style**: Italics optional for emphasis
- **Example**: "Not more noise. Better decisions."

---

## 5. Layout & Spacing

### 5.1 Grid System

- **Container max-width**: 1400px
- **Grid columns**: 
  - 1 column: Full width (mobile-first)
  - 2 columns: 50/50 split (tablet+)
  - 3 columns: 33/33/33 grid (desktop+, gap: 2–3rem)
- **Responsive**: CSS Grid with `auto-fit, minmax(240px, 1fr)` for flexible layouts

### 5.2 Spacing Scale

| Size | Pixels | Use Case |
|------|--------|----------|
| **XS** | 8px | Component internal gaps |
| **SM** | 12px | Small spacing between elements |
| **MD** | 16px | Standard spacing between components |
| **LG** | 24px | Large spacing between sections |
| **XL** | 32px | Card padding |
| **2XL** | 48px | Section padding |
| **3XL** | 64px | Major section spacing |

### 5.3 Section Padding

- **Top/Bottom**: 4–5rem (64–80px) for major sections
- **Left/Right**: 3rem (48px) for standard padding
- **Alternating backgrounds**: White → Ciment → White (creates rhythm)

### 5.4 Card Grid Gaps

- **Standard gap**: 2rem (32px)
- **Compact gap**: 1.5rem (24px)
- **Loose gap**: 3rem (48px)

---

## 6. Voice & Tone

### 6.1 Tone Principles

- **Sober**: Professional, no hype or marketing clichés
- **Precise**: Specific language; avoid vague corporate speak
- **Analytical**: Data-driven, quantified claims
- **Discreet**: Respectful of confidential situations and sensitive contexts
- **Strategic**: Forward-thinking, solution-oriented language
- **Direct**: Clear imperatives; no flowery descriptions

### 6.2 Language Examples

#### Use This

> "We assess the asset beyond its current surface condition — reading legal, spatial, leasing, technical, and financial realities together to identify hidden constraints and overlooked potential."

#### Not This

> "We take a holistic approach to understanding your property, looking at every angle to uncover hidden opportunities."

#### Use This

> "For selected Swiss commercial assets, Robertson+ offers a confidential first exchange focused on value creation potential, structural risk, and strategic options."

#### Not This

> "We're excited to discuss how we can transform your real estate portfolio!"

### 6.3 Key Message Phrases

- "Value engineering" (not "real estate marketing")
- "Decision-grade output" (not "expert insights")
- "Confidential exchange" (not "consultation" or "meeting")
- "Structural risk" (not "problems")
- "Income resilience" (not "better returns")
- "Strategic repositioning" (not "fixing up")

### 6.4 Forbidden Language

- Marketing buzzwords: "cutting-edge," "innovative," "leading," "world-class"
- Vague claims: "optimized," "best," "top," "premier"
- Hype language: "exciting," "amazing," "revolutionary"
- False authority: "we know," "trust us," "everyone agrees"
- Clichés: "at the end of the day," "take it to the next level," "game-changer"

---

## 7. Navigation & Information Architecture

### 7.1 Main Navigation

**Top Navigation Items** (left to right after logo):
1. Approach
2. Who We Serve
3. Selected Situations
4. Contact

**Top-right Action**: "Request a Confidential Asset Review" (Primary CTA button)

### 7.2 Footer Navigation

**Links** (in order):
- Approach
- Who We Serve
- Confidential Review
- Contact

**Contact Info** (always visible):
- Address: avenue des Uttins 1, CH-1180 Rolle
- Phone: +41 78 633 31 75
- Email: pm@robertson.plus

**Footer Tagline**: "Robertson+ — Swiss Commercial Real Estate Value Engineering"

**Copyright**: Design by Robertson Group. © 2026

---

## 8. Interaction & Animation

### 8.1 Cursor Behavior

- **Default cursor**: Replace with custom SVG cross symbol (#526163)
- **Hover on links**: Cross symbol rotates 45° smoothly
- **Click on CTA**: Cross symbol rotates 45° over 300–500ms
- **Easing function**: cubic-bezier(0.25, 0.46, 0.45, 0.94) (ease-in-out)

### 8.2 Hover States

- **Links**: Text color to Electric Blue #005eff, slight underline (optional)
- **Buttons**: Brightness +10%, subtle scale (1.02)
- **Cards**: Border color change, very subtle lift (margin shift 2–4px up)
- **CTA buttons**: Scale, brightness increase, shadow enhancement

### 8.3 Transitions

- **Duration**: 200–300ms for hover states, 400–500ms for rotation
- **Easing**: Cubic-bezier for smoothness; avoid linear
- **Never**: Instant state changes without transition

### 8.4 Scroll Behavior

- **Smooth scrolling** enabled on all internal anchor links
- **Section visibility**: Staggered fade-in on scroll (optional, 200–300ms delay per element)
- **Navigation bar**: Optional subtle shadow on scroll (appears after 50px)

---

## 9. Responsive Design

### 9.1 Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| **Mobile** | 320–767px | Single column, stacked cards |
| **Tablet** | 768–1024px | 2-column grids, adjusted padding |
| **Desktop** | 1025px+ | 3-column grids, full spacing |
| **Large Desktop** | 1400px+ | Max-width container centered |

### 9.2 Mobile-First Approach

- Start with mobile layout (1 column)
- Progressive enhancement for tablet (2 columns)
- Full experience on desktop (3 columns, full spacing)
- All text remains readable at all sizes (minimum 14px)

### 9.3 Responsive Text Scaling

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| H1 | 32px | 40px | 48–52px |
| H2 | 24px | 28px | 28–36px |
| H3 | 16px | 18px | 18–24px |
| Body | 14px | 15px | 15–16px |

### 9.4 Padding Adjustments

| Breakpoint | Horizontal | Vertical |
|------------|-----------|----------|
| Mobile | 1rem (16px) | 2rem (32px) |
| Tablet | 2rem (32px) | 3rem (48px) |
| Desktop | 3rem (48px) | 4–5rem (64–80px) |

---

## 10. Accessibility & Performance

### 10.1 WCAG Compliance

- **Color contrast**: All text meets AAA standard (7:1 or higher)
- **Font sizes**: Minimum 12px for labels, 14px+ for body
- **Focus states**: Visible, high-contrast focus indicators on interactive elements
- **Alt text**: Descriptive alt text for all images (not "image123.jpg")
- **Link labels**: Clear, descriptive link text (not "click here")

### 10.2 Screen Reader Considerations

- Semantic HTML: Use `<h1>`, `<h2>`, `<button>`, `<nav>` correctly
- ARIA labels: Add where necessary for complex interactions
- Skip links: Provide skip-to-content link (hidden, focusable)
- Labels: All form inputs have associated `<label>` elements

### 10.3 Performance

- **Image optimization**: All images compressed (< 200KB hero, < 100KB cards)
- **Font loading**: Use `font-display: swap` for Early Sans
- **CSS**: Single stylesheet, minified (< 50KB)
- **JavaScript**: Minimal; only for cursor animation and smooth scroll
- **Lazy loading**: Images below fold loaded on demand

### 10.4 Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 11. Design Principles Summary

### What Robertson+ Is

✓ Sober, high-end, sophisticated  
✓ Strategic, analytical, precise  
✓ Discreet, confidentiality-aware  
✓ Decision-focused, outcome-oriented  
✓ Swiss-native expertise  
✓ Clean, minimal, structured  

### What Robertson+ Is Not

✗ Marketing-heavy or hype-driven  
✗ Gradient-filled or over-decorated  
✗ Generic or templated  
✗ Playful or casual  
✗ Complex or confusing  
✗ Flashy or trendy  

### Core Design Values

1. **Clarity over complexity** — simplify, don't complicate
2. **Precision over suggestion** — be specific, avoid vagueness
3. **Substance over style** — content leads, design supports
4. **Respect over reach** — honor confidentiality, avoid publicity stunts
5. **Excellence over effort** — quality outputs, effortless use

---

## 12. Implementation Checklist

### Before Launch

- [ ] All logos tested at minimum sizes (36px)
- [ ] Cross symbol cursor working and rotating on interaction
- [ ] Color contrast verified for all text (WCAG AA+)
- [ ] Typography hierarchy applied consistently
- [ ] Button states (hover, active) functioning smoothly
- [ ] Images follow 50px rounded corner rule (interior) and flush edges (exterior)
- [ ] Responsive layouts tested at 320px, 768px, 1025px, 1400px+
- [ ] Form fields accessible with keyboard navigation
- [ ] Footer contact info accurate and linked correctly
- [ ] Smooth scroll working on all internal anchor links
- [ ] Animation easing and timing consistent (200–500ms)
- [ ] No gradients, blur, or decorative effects (flat design only)
- [ ] Font fallback stack functioning if Early Sans unavailable
- [ ] Page load time under 3 seconds
- [ ] Mobile viewport meta tag set correctly

### Ongoing

- [ ] Monitor web vitals monthly
- [ ] Audit color contrast after any color changes
- [ ] Test new content for responsive sizing
- [ ] Update copyright year annually
- [ ] Verify logo rendering on all devices
- [ ] Check animation smoothness on mobile devices

---

## 13. Contact & Credits

**Brand Owner**: Robertson+  
**Design by**: Robertson Group  
**Copyright**: © 2026 Robertson Group  

**Address**: avenue des Uttins 1, CH-1180 Rolle  
**Phone**: +41 78 633 31 75  
**Email**: pm@robertson.plus  

---

## 14. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-04-27 | Initial brand guideline |

