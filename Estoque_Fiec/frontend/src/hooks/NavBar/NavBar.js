import React from "react";
import { Body, Itens , A} from "./styles";

const NavBar = () => {
  return (
    <div>
      <Body>
        <Itens>
          <A href="/">HOME</A>
        </Itens>
        <Itens>
          <A href="/products/productsregistration">CADASTRO</A>
        </Itens>
        <Itens>
          <A href="/requests">PEDIDOS </A>
        </Itens>
        <Itens>
          <A href="#">MOVIMENTO</A>
        </Itens>
        <Itens>
          <A href="#">ACIDENTE</A>
        </Itens>
        <Itens>
          <A href="#">DESCARTE</A>
        </Itens>
        <Itens>
          <A href="#">RELATORIO</A>
        </Itens>
      </Body>
    </div>
  );
};

export default NavBar;
