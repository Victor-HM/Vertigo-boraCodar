import { Eye, EyeSlash } from "phosphor-react";
import React, { ChangeEvent, InputHTMLAttributes } from "react";
import * as S from "./input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  icon?: JSX.Element;
  disable?: boolean;
  error: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder = "Digite um valor", icon, disable = false, error, ...rest },
    ref
  ) => {
    return (
      <S.InputContainer
        disable={disable}
        error={error}
        className="flex items-center gap-3 border-2 transition-all hover:border-[#7C3AED] border-[#E2E8F0] focus-within:border-[#7C3AED] rounded-md px-3"
      >
        <S.Input
          {...rest}
          disable={disable}
          placeholder={placeholder}
          disabled={disable}
          ref={ref}
          error={error}
          className="h-12 w-full bg-transparent focus:outline-none text-sm"
        />

        {icon}
      </S.InputContainer>
    );
  }
);

Input.displayName = "Input";

export { Input };
