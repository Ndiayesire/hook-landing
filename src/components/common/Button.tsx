import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoonModal from './ComingSoonModal';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'branded' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  showTrialModal?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  showTrialModal = false,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const baseStyles = 'inline-block rounded-full font-semibold transition-all duration-200 text-center hover:scale-105';

  const variantStyles = {
    primary: 'bg-primary text-white shadow-xl hover:bg-primary-dark hover:shadow-2xl',
    secondary: 'bg-white text-primary shadow-xl hover:bg-gray-50 hover:shadow-2xl',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl',
    branded: 'bg-white text-primary hover:bg-gray-50 shadow-lg hover:shadow-xl',
    accent: 'bg-emerald text-white hover:bg-emerald-dark shadow-xl hover:shadow-2xl',
  };

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const handleClick = () => {
    if (showTrialModal && !onClick) {
      setIsModalOpen(true);
    } else if (onClick) {
      onClick();
    }
  };

  // Convert /demo links to Calendly URL
  if (to === '/demo') {
    return (
      <a 
        href="https://calendly.com/kevin-crowdchat/chatinsight-demo"
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Render as Link if 'to' prop is provided
  if (to) {
    return showTrialModal ? (
      <>
        <button onClick={handleClick} className={buttonClasses}>
          {children}
        </button>
        <ComingSoonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    ) : (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  // Render as anchor if 'href' prop is provided
  if (href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button type={type} className={buttonClasses} onClick={handleClick}>
      {children}
      {showTrialModal && (
        <ComingSoonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </button>
  );
};

export default Button;