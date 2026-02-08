import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({ 
  placeholder = '', 
  type = 'text',
  value,
  onChange,
  className = '',
  ...props 
}: InputProps) {
  return (
    <div className={'input-wrapper'}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`custom-input ${className}`}
        {...props}
      />
    </div>
  );
}