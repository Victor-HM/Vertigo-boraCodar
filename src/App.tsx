import { useState } from "react";

import { Button } from "./components/Button";
import { Input } from "./components/Input";

import Img from "./assets/img.png";
import Logo from "./assets/logo.svg";

function App() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="h-screen grid grid-cols-2 grid-rows-1 overflow-hidden">
      <div className="h-full w-full flex flex-col px-20 pt-10 gap-20">
        <div>
          <img src={Logo} alt="Logo da vertigo" />
        </div>

        <div className="w-3/4 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl">Acesse a plataforma</h1>
            <span>
              Faça login ou registre-se para começar a construir seus projetos
              ainda hoje.
            </span>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-sm">
                E-mail
              </label>
              <Input id="email" placeholder="Digite o seu e-mail" />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="flex justify-between font-semibold text-sm"
              >
                Senha
                <a className="text-[#7C3AED] cursor-pointer hover:underline">
                  Esqueceu a senha
                </a>
              </label>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Digite sua senha"
                icon={true}
                isShow={showPassword}
                setIsShow={setShowPassword}
              />
            </div>

            <Button text="Entrar" type="submit" />
            <a href="#" className="group">
              Ainda não tem uma conta?{" "}
              <strong className="text-[#7C3AED] group-hover:underline">
                Inscreva-se
              </strong>
            </a>
          </form>
        </div>
      </div>
      <div className="h-full relative">
        <div className="absolute bg-opacity-70 saturate-150 w-full h-full z-20 bg-[#7C3AED]"></div>
        <img
          src={Img}
          alt="Imagem"
          className="w-full h-full z-10 absolute brightness-200 contrast-150"
        />
      </div>
    </div>
  );
}

export default App;
