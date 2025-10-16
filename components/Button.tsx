import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = "px-6 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105";
  
  const variantClasses = {
    primary: "bg-brand-primary hover:bg-brand-secondary text-black rounded-full focus:ring-brand-primary",
    secondary: "bg-base-300 hover:bg-opacity-80 text-content-100 rounded-lg focus:ring-base-300",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;