import React, { useState } from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div `
border: 1px solid;
`

const Carrinho = () => {

        return(
            <ContainerCarrinho>
                <h2>Carrinho:</h2>
                <p>Valor total: {"R$"}</p>
            </ContainerCarrinho>
        )
    }


export default Carrinho