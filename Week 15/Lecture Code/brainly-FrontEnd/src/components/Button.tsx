import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  
}

const defaultStyles = "px-4 py-2 text-xl rounded-md flex items-center ";

const variantStyle = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

export function Button({ variant, text, startIcon}: ButtonProps) {
  return (
    <button className={`${variantStyle[variant]} ${defaultStyles}`}>
      <div className="pr-2">
            {startIcon}
        </div>
      {text}
    </button>
  );
}
