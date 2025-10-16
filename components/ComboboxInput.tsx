import React, { useState, useRef, useEffect } from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface ComboboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  options: string[];
}

const ComboboxInput: React.FC<ComboboxInputProps> = ({ label, name, options, onChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const handleSelectOption = (option: string) => {
    if (onChange) {
      const syntheticEvent = {
        target: { name, value: option }
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
    setIsOpen(false);
  };

  return (
    <div className="w-full relative" ref={containerRef}>
      <label htmlFor={name} className="block text-sm font-medium text-content-200 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type="text"
          autoComplete="off"
          className="w-full bg-base-300 border border-transparent text-content-100 rounded-lg shadow-sm py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          onChange={onChange}
          {...props}
        />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-content-200 hover:text-content-100"
          aria-label="Toggle options"
        >
          <ChevronDownIcon className="w-5 h-5" />
        </button>
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-base-300 rounded-lg shadow-lg max-h-60 overflow-y-auto ring-1 ring-black ring-opacity-5">
          {options.map((option) => (
            <li 
              key={option} 
              className="text-content-100 px-4 py-2 cursor-pointer hover:bg-brand-primary hover:text-black transition-colors duration-150"
              onMouseDown={() => handleSelectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboboxInput;
