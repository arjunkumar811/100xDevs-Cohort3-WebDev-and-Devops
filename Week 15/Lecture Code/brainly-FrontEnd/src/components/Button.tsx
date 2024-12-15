import { ReactElement } from "react";

interface ButtonInterface {
    title: string;
    size: "sm" | "md" | "lg";
    startIcon?: ReactElement;
    lastIcon?: ReactElement;
    variant: "primary" | "secondary";
}

const sizeStyles = {
    "lg": "px-8 py-4 text-xl",
    "md": "px-4 py-2 text-xl",
    "sm": "px-2 py-1 text-xl",
}


const variantStyle = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-400 text-purple-600",
}


export function Button(props: ButtonInterface) {
    return (
      <button
        className={
          sizeStyles[props.size] +
          " bg-red-500 rounded-sm text-white px-4 py-2 flex items-center justify-center " + variantStyle[props.variant]
        }
      >
        <div className="flex items-center gap-2">
          {props.startIcon && <span>{props.startIcon}</span>}
          <span>{props.title}</span>
          {props.lastIcon && <span>{props.lastIcon}</span>}
        </div>
      </button>
    );
  }
  