import React from 'react';
import { useTranslation } from 'react-i18next';

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: string[];
  optionKeys: string[];
}

const SelectInput: React.FC<SelectInputProps> = ({ label, name, options, optionKeys, ...props }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium text-content-200 mb-1">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full bg-base-300 border border-base-300 text-content-100 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
        {...props}
      >
        {options.map((option, index) => (
          <option key={option} value={option}>
            {t(optionKeys[index])}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;