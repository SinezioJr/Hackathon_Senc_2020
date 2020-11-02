import React from "react";
import { TopBar, GlobalStyle } from "../Styles/topBar";
import Logo from "../Assets/Logo.svg";

export default function TopBar_Component() {
  return (
    <>
      <GlobalStyle />
      <TopBar>
        <img src={Logo} alt="Logo da COOPs" />
        <a href="/">Logout</a>
      </TopBar>
    </>
  );
}
