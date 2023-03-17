import { Eye, EyeSlash } from "phosphor-react";
import { ChangeEvent, InputHTMLAttributes } from "react";
import * as S from "./input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  icon?: boolean;
  disable?: boolean;
  isShow?: boolean;
  setIsShow?: (value: boolean) => void;
}

export function Input({
  placeholder = "Digite um valor",
  icon = false,
  disable = false,
  isShow = false,
  setIsShow,
  ...rest
}: InputProps) {
  return (
    <S.InputContainer
      disable={disable}
      className="flex items-center gap-3 border-2 hover:border-[#7C3AED] border-[#E2E8F0] focus-within:border-[#7C3AED] rounded-md px-3"
    >
      <S.Input
        {...rest}
        disable={disable}
        placeholder={placeholder}
        disabled={disable}
        className="h-12 w-full bg-transparent focus:outline-none text-sm"
      />
      {icon ? (
        isShow ? (
          <Eye
            size={24}
            color="#94A3B8"
            className="cursor-pointer"
            onClick={() => setIsShow && setIsShow(!isShow)}
          />
        ) : (
          <EyeSlash
            size={24}
            color="#94A3B8"
            className="cursor-pointer"
            onClick={() => setIsShow && setIsShow(!isShow)}
          />
        )
      ) : (
        <></>
      )}
    </S.InputContainer>
  );
}
