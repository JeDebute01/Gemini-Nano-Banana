import React from 'react';

interface ToggleSwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, id, ...props }) => {
  return (
    <label htmlFor={id} className="flex flex-col items-center cursor-pointer group">
        <div className="relative">
            <input type="checkbox" id={id} className="sr-only" {...props} />
            <div className="block bg-base-300 w-14 h-8 rounded-full transition"></div>
            <div className="dot absolute left-1 top-1 bg-content-200 w-6 h-6 rounded-full transition transform group-hover:bg-content-100"></div>
        </div>
        <span className="mt-2 text-sm font-medium text-content-200 group-hover:text-content-100 transition-colors">
            {label}
        </span>
        <style>{`
            input:checked ~ .dot {
                transform: translateX(100%);
                background-color: #1ed760;
            }
            input:checked ~ .block {
                background-color: #1db954;
            }
        `}</style>
    </label>
  );
};

export default ToggleSwitch;
