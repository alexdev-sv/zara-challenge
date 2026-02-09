import { InputProps } from './Input.props';

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