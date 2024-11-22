import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
  type: string;
}

export default function Input({ id, placeholder, type, ...rest }: InputProps) {
  return (
    <input
      className="flex h-11 w-full rounded-md border
       border-input bg-background px-3 py-2
        text-sm ring-offset-background file:border-0 
        file:bg-transparent file:text-sm file:font-medium 
        placeholder:text-muted-foreground focus-visible:outline-none
         focus-visible:ring-2 focus-visible:ring-ring 
         focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      id={id}
      placeholder={placeholder}
      type={type}
      {...rest}
    />
  );
}