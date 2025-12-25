import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const logoSrc = variant === 'light'
    ? 'https://i.ibb.co/xxfDsQh/hook-darkgreen.png'
    : 'https://i.ibb.co/xxfDsQh/hook-darkgreen.png';

  return (
    <div className="flex items-center">
      <img
        src={logoSrc}
        alt="HookTXT Logo"
        className={`h-8 w-auto ${variant === 'light' ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};

export default Logo;
