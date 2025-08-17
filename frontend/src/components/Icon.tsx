import type { FC } from 'react';
import { ICONS, getIcon, ICON_SIZES } from '../assets/icons';

interface CustomIconProps {
  name: keyof typeof ICONS;
  alt: string;
  className?: string;
  size?: keyof typeof ICON_SIZES | number;
}

const Icon: FC<CustomIconProps> = ({ 
  name, 
  alt, 
  className = '', 
  size = 'medium' 
}) => {
  const iconSrc = getIcon(name);
  const iconSize = typeof size === 'string' ? ICON_SIZES[size] : size;
  
  return (
    <img
      src={iconSrc}
      alt={alt}
      className={className}
      style={{
        width: iconSize,
        height: iconSize,
        objectFit: 'contain'
      }}
    />
  );
};

export default Icon; 