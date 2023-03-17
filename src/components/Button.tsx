import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <button className="w-full bg-[#7C3AED] px-6 py-4 transition-all hover:opacity-60 rounded-md text-white font-bold">
      {text}
    </button>
  );
}
