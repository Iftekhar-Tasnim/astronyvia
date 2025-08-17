# 🎨 Icon Usage Guide

This guide explains how to use the custom Astronyvia icons throughout your application.

## 📁 Available Icons

Your `frontend/icon/` folder contains the following icons:

- **`mainicon.png`** - Main brand icon (1.0MB)
- **`favicon.ico`** - Standard favicon
- **`favicon-16x16.png`** - Small favicon
- **`favicon-32x32.png`** - Medium favicon
- **`apple-touch-icon.png`** - iOS app icon
- **`android-chrome-192x192.png`** - Android app icon (192x192)
- **`android-chrome-512x512.png`** - Android app icon (512x512)

## 🚀 How to Use Icons

### 1. Using the Icon Component

```tsx
import Icon from '../components/Icon';

// Basic usage
<Icon name="main" alt="Astronyvia Logo" size="large" />

// With custom styling
<Icon 
  name="main" 
  alt="Astronyvia Logo" 
  size="large" 
  className="drop-shadow-2xl opacity-90" 
/>
```

### 2. Available Icon Names

```tsx
// Main brand icon
<Icon name="main" alt="Logo" />

// Favicon variants
<Icon name="favicon" alt="Favicon" />
<Icon name="favicon16" alt="16x16" />
<Icon name="favicon32" alt="32x32" />

// Platform-specific icons
<Icon name="appleTouch" alt="Apple Touch" />
<Icon name="android192" alt="Android 192" />
<Icon name="android512" alt="Android 512" />
```

### 3. Available Sizes

```tsx
// Predefined sizes
<Icon name="main" alt="Logo" size="small" />    // 16px
<Icon name="main" alt="Logo" size="medium" />   // 32px
<Icon name="main" alt="Logo" size="large" />    // 64px
<Icon name="main" alt="Logo" size="xlarge" />   // 128px

// Custom size
<Icon name="main" alt="Logo" size={48} />
```

## 🔧 Implementation Examples

### Hero Section
```tsx
<div className="flex justify-center mb-8">
  <Icon 
    name="main" 
    alt="Astronyvia Logo" 
    size="large" 
    className="drop-shadow-2xl"
  />
</div>
```

### Company Header
```tsx
<div className="flex justify-center mb-6">
  <Icon 
    name="main" 
    alt="Astronyvia" 
    size="medium" 
    className="opacity-80"
  />
</div>
```

### Footer
```tsx
<div className="flex justify-center mb-8">
  <Icon 
    name="main" 
    alt="Astronyvia" 
    size="large" 
    className="opacity-90"
  />
</div>
```

## 📱 Browser & Platform Support

### Favicon Support
- **Modern Browsers**: All favicon sizes
- **Mobile Browsers**: Apple touch icon, Android icons
- **PWA Support**: Web manifest with proper icon references

### HTML Integration
Your `index.html` now includes:
- Standard favicon links
- Apple touch icon
- Android app icons
- Web app manifest
- Proper meta tags for branding

## 🎯 Best Practices

1. **Always provide alt text** for accessibility
2. **Use appropriate sizes** for different contexts
3. **Add hover effects** with CSS classes
4. **Maintain consistency** across your app
5. **Optimize for performance** by using appropriate icon sizes

## 🔄 Adding New Icons

To add new icons:

1. Place the icon file in `frontend/icon/`
2. Add the icon path to `src/assets/icons.ts`
3. Use the Icon component with the new icon name

## 📋 Icon Component Props

```tsx
interface IconProps {
  name: keyof typeof ICONS;    // Icon name from the ICONS object
  alt: string;                 // Alt text for accessibility
  className?: string;          // Optional CSS classes
  size?: 'small' | 'medium' | 'large' | 'xlarge' | number;  // Icon size
}
```

## 🌟 Styling Examples

```tsx
// With shadows
<Icon name="main" alt="Logo" className="drop-shadow-2xl" />

// With opacity
<Icon name="main" alt="Logo" className="opacity-80" />

// With hover effects
<Icon name="main" alt="Logo" className="hover:scale-110 transition-transform" />

// With borders
<Icon name="main" alt="Logo" className="border-2 border-blue-500 rounded-lg" />
```

---

**Your icons are now fully integrated into your Astronyvia application! 🎉** 