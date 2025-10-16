import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, ...props }) => (
  <div className="w-full">
    <label htmlFor={name} className="block text-sm font-medium text-content-200 mb-2">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type="text"
      className="w-full bg-base-300 border border-transparent text-content-100 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-primary"
      {...props}
    />
  </div>
);

export default TextInput;