import React from "react";
import { Center, LoginCard } from "../Styles/loginCard";
import { Input, Button } from "./forms";
import Logo from "../Assets/LogoTipo2.svg";
import { Link } from "react-router-dom";

export default function LoginCard_Component() {
  return (
    <>
      <Center>
        <LoginCard>
          <img src={Logo} alt="Logo da Coops" />
          <Input label="Matricula"></Input>
          <Input label="Senha"></Input>
          <Link to="/dashboard">
            <Button>Entrar</Button>
          </Link>
        </LoginCard>
      </Center>
    </>
  );
}
