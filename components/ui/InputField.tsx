import { ComponentProps } from "react";

type InputFieldProps = ComponentProps<"input"> & {
  label: string;
};

export function InputField({
  label,
  id,
  className = "",
  ...props
}: InputFieldProps) {
  return (
    <div className="relative">
      <input
        id={id}
        placeholder=" "
        className={`peer block w-full border-b border-gray-400 bg-transparent pt-7 pb-3 text-xl text-gray-900 outline-none focus:border-accent focus:text-accent ${className}`}
        {...props}
      />

      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-7 origin-left text-lg text-muted transition-all duration-300 ease-out-expo peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
      >
        {label}
      </label>
    </div>
  );
}
