import { Button } from "../Button";
import { Input } from "../Input";
import { Title } from "../Title";

export function Main() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
      <Title title={"Entrar"}/>

      <div className="bg-white shadow-md rounded-md p-6 space-y-4 w-80">
        <Input 
        nome={"E-mail"} 
        placeholder={"Digite seu e-mail"} 
        id={"email"} />

        <Input
          nome={"Senha"}
          placeholder={"Digite sua senha"}
          id={"password"}
        />

        <a
          href="#"
          className="text-sm text-gray-500 text-right hover:underline block"
        >
          Esqueci minha senha
        </a>
        <Button text={"Entrar"} />
      </div>
    </div>
  );
}
