import type { FC } from 'react';
import Icon from './Icon';

const IconDemo: FC = () => {
  return (
    <div className="p-8 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-6">Icon Showcase</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Main Brand Icon */}
        <div className="text-center">
          <Icon name="main" alt="Main Icon" size="large" className="mx-auto mb-2" />
          <p className="text-gray-300 text-sm">Main Icon</p>
        </div>
        
        {/* Favicon Variants */}
        <div className="text-center">
          <Icon name="favicon" alt="Favicon" size="medium" className="mx-auto mb-2" />
          <p className="text-gray-300 text-sm">Favicon</p>
        </div>
        
        <div className="text-center">
          <Icon name="favicon32" alt="32x32" size="medium" className="mx-auto mb-2" />
          <p className="text-gray-300 text-sm">32x32</p>
        </div>
        
        <div className="text-center">
          <Icon name="favicon16" alt="16x16" size="small" className="mx-auto mb-2" />
          <p className="text-gray-300 text-sm">16x16</p>
        </div>
        
        {/* Platform Icons */}
        <div className="text-center">
          <Icon name="appleTouch" alt="Apple Touch" size="large" className="mx-auto mb-2" />
          <p className="text-gray-300 text-sm">Apple Touch</p>
        </div>
        
        <div className="text-center">
          <Icon name="android192" alt="Android 192" size="large" className="mx-auto mb-2" />
          <p className="text-gray-300 text-sm">Android 192</p>
        </div>
        
        <div className="text-center">
          <Icon name="android512" alt="Android 512" size="xlarge" className="mx-auto mb-2" />
          <p className="text-gray-300 text-sm">Android 512</p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          Use these icons throughout your app with the Icon component
        </p>
      </div>
    </div>
  );
};

export default IconDemo; 