import React, { forwardRef } from 'react';

interface InputProps {
  placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder }, ref) => {
  return (
    <div>
      <input
        ref={ref} 
        placeholder={placeholder}
        type="text"
        className="px-4 py-2 border-solid rounded-md"
      />
    </div>
  );
});


Input.displayName = 'Input';
