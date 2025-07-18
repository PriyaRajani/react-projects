import React, { useId } from "react";

function Input({
  label,
  type = "text",
  className = "",
  ref, //instead of forwardRef we can directly pass in ref as prop
  ...props // everything else
}) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        ref={ref}
        {...props}
        className={`
          px-3 py-2 rounded-lg bg-white text-black 
          outline-none focus:bg-gray-50 duration-200 
          border border-gray-200 w-full ${className}
        `}
      />
    </div>
  );
}

export default Input;
