
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
  }
  
  
export default function Button({ children, className, type }: ButtonProps) {
    return (
      <button
        type={type}
        className={`inline-flex items-center justify-center 
          rounded-md text-sm font-medium ring-offset-background
           transition-colors focus-visible:outline-none focus-visible:ring-2 
           focus-visible:ring-ring focus-visible:ring-offset-2 
           disabled:pointer-events-none disabled:opacity-50 h-11 
            text-white  ${className}`}
      >
        {children}
      </button>
    );
  }