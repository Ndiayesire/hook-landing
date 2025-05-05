import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'primary' | 'secondary';
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  id,
}) => {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-gray-50',
    primary: 'bg-primary text-white',
    secondary: 'bg-gray-50',
  };

  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;