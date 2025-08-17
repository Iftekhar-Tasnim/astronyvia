// Icon paths for easy access throughout the application
// Using relative paths that work in both development and production
const getIconPath = (iconName: string) => {
  // In development, use the icon folder
  // In production, the icons should be in the public/icon folder
  return `./icon/${iconName}`;
};

export const ICONS = {
  // Main brand icon
  main: getIconPath('mainicon.png'),
  
  // Favicon variants
  favicon: getIconPath('favicon.ico'),
  favicon16: getIconPath('favicon-16x16.png'),
  favicon32: getIconPath('favicon-32x32.png'),
  
  // Platform-specific icons
  appleTouch: getIconPath('apple-touch-icon.png'),
  android192: getIconPath('android-chrome-192x192.png'),
  android512: getIconPath('android-chrome-512x512.png'),
} as const;

// Icon component props type
export interface IconProps {
  src: string;
  alt: string;
  className?: string;
  size?: number;
}

// Utility function to get icon by name
export const getIcon = (name: keyof typeof ICONS): string => {
  return ICONS[name];
};

// Default icon sizes
export const ICON_SIZES = {
  small: 16,
  medium: 32,
  large: 64,
  xlarge: 128,
} as const; 