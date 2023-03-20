import { useState } from "react";

import { Button } from "./components/Button";
import { Input } from "./components/Input";

import Img from "./assets/img.png";
import Logo from "./assets/logo.svg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeSlash } from "phosphor-react";

const schema = z.object({
  email: z.string().email("Digite um e-mail válido"),
  password: z.string().min(8, "Digite no mínimo 8 caracteres"),
});

function App() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  type FormProps = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  console.log("errors", errors);

  function handleForm(data: FormProps) {
    alert(`Email: ${data.email}, password: ${data.password}`);
  }
  return (
    <div className="h-screen lg:grid lg:grid-cols-2 lg:grid-rows-1 overflow-y-scroll lg:overflow-hidden">
      <div className="h-full w-full flex flex-col items-center lg:items-start px-0 lg:px-20 pt-10 gap-20 ">
        <div>
          <img src={Logo} alt="Logo da vertigo" />
        </div>

        <div className="w-3/4 flex flex-col text-center lg:text-start gap-10 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl">Acesse a plataforma</h1>
            <span>
              Faça login ou registre-se para começar a construir seus projetos
              ainda hoje.
            </span>
          </div>

          <form
            onSubmit={handleSubmit(handleForm)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-start font-semibold text-sm"
              >
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Digite o seu e-mail"
                aria-invalid={errors.email ? "true" : "false"}
                error={errors.email?.message?.length ? true : false}
              />
              {errors.email?.message && (
                <p className="text-[#ED3A5A]">{errors.email.message}</p>
              )}
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
                {...register("password")}
                id="password"
                placeholder="Digite sua senha"
                error={errors.password?.message?.length ? true : false}
                icon={
                  showPassword ? (
                    <Eye
                      size={24}
                      color="#94A3B8"
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <EyeSlash
                      size={24}
                      color="#94A3B8"
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )
                }
              />
              {errors.password?.message && (
                <p className="text-[#ED3A5A]">{errors.password.message}</p>
              )}
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
      <div className="hidden lg:flex h-full relative">
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
