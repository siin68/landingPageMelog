import { InputHTMLAttributes, FC } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const TextField: FC<TextFieldProps> = ({ label, error, className = "", ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-bold text-gray-700">{label}</label>
      )}
      <input
        className={`rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition ${
          error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
        } ${className}`}
        {...props}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default TextField;
