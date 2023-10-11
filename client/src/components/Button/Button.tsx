import React from "react";
import clsx from "clsx";

const variants = {
    filled: "bg-green-600 text-white",
    outlined: "bg-transparent text-white border-1-white"
  };
  
  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-2 px-6 text-md",
    lg: "py-3 px-8 text-lg",
  };

interface ButtonProps {
    className?: string
    size: keyof typeof sizes
    variant: keyof typeof variants
    children: React.ReactNode
    type: "button" | "submit" | "reset"
    isLoading?: boolean
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = (
    {
        size = "md", 
        variant = "outlined", 
        children, 
        className = "", 
        type = "button",
        isLoading = false,
        onClick
    }
    ) => {
  return (
    <button 
    type = {type} 
    disabled={isLoading}
    onClick={onClick}
    className={clsx("flex justify-center items-center hover:cursor-pointer rounded-full focus:outline-none hover:opacity-80", variants[variant], sizes[size], className)}
    >
        {children}
    </button>
  );
};

export default Button;