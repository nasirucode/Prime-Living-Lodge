# Call to Action Section Component

## Overview
The `CallToActionSection` is a reusable component designed for service pages that displays a compelling call-to-action with a background image and customizable content.

## Usage

### Basic Usage (with default values)
```tsx
import CallToActionSection from "../../components/sections/CallToActionSection";

// In your component
<CallToActionSection />
```

### Customized Usage
```tsx
<CallToActionSection 
  backgroundImage="/images/custom-background.jpg"
  backgroundAlt="Custom background description"
  text="Your custom call-to-action message here"
  showVideoButton={false}
  className="py-32" // Custom spacing
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `backgroundImage` | `string` | `"/images/pexels-yaroslav-shuraev-8088595.jpg"` | Path to the background image |
| `backgroundAlt` | `string` | `"Elderly person's hands on textured surface"` | Alt text for accessibility |
| `text` | `string` | Default Prime Living Lodge message | The main call-to-action text |
| `showVideoButton` | `boolean` | `true` | Whether to show the video play button |
| `className` | `string` | `""` | Additional CSS classes for custom styling |

## Examples

### For Mental Health Support Page
```tsx
<CallToActionSection 
  backgroundImage="/images/hands-4344711_1280.jpg"
  backgroundAlt="Supportive hands offering help"
  text="Our mental health support team is dedicated to creating a safe, nurturing environment where individuals can heal, grow, and develop the skills they need to lead fulfilling lives."
  showVideoButton={false}
/>
```

### For Supported Living Page
```tsx
<CallToActionSection 
  backgroundImage="/images/pexels-kampus-7551592.jpg"
  backgroundAlt="Caregiver assisting person in kitchen"
  text="Experience the comfort and independence of supported living in our warm, homely environments designed to promote your wellbeing and personal growth."
/>
```

### For Learning Disabilities Page
```tsx
<CallToActionSection 
  backgroundImage="/images/dementia care.jpg"
  backgroundAlt="Two pairs of hands gently clasped together"
  text="We provide practical and emotional support to help individuals with learning disabilities live full, empowered lives in a supportive community environment."
  showVideoButton={true}
/>
```

## Styling
The component uses Tailwind CSS classes and includes:
- Responsive grid layout (2 columns on large screens)
- Gradient overlay on background images
- Hover effects on the video button
- Consistent spacing and typography
- Z-index management for proper layering

## File Location
`src/components/sections/CallToActionSection.tsx`
