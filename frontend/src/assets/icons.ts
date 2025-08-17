// Icon paths for easy access throughout the application
export const ICONS = {
  // Main brand icon
  main: '/icon/mainicon.png',
  
  // Favicon variants
  favicon: '/icon/favicon.ico',
  favicon16: '/icon/favicon-16x16.png',
  favicon32: '/icon/favicon-32x32.png',
  
  // Platform-specific icons
  appleTouch: '/icon/apple-touch-icon.png',
  android192: '/icon/android-chrome-192x192.png',
  android512: '/icon/android-chrome-512x512.png',
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