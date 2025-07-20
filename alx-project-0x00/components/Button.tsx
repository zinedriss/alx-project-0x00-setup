// components/Button.tsx (No changes needed)

import React from 'react';
import { ButtonProps } from '@/interfaces'; // This will now correctly import the non-optional 'styles'

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    // Ensure 'styles' is always provided when using this component
    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;