
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  disabled = false
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-center disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "chili-gradient text-white shadow-lg shadow-red-900/20 hover:shadow-red-600/40 hover:-translate-y-1",
    secondary: "bg-white text-black hover:bg-gray-100 shadow-xl",
    outline: "border-2 border-white/20 text-white hover:bg-white/5"
  };

  return (
    <button 
      type={type}
      disabled={disabled}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
