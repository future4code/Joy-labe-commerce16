import React, { useState } from "react";
import styled from "styled-components";

import Produto from "./Produto";

const ContainerProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class Produtos extends React.Component{
    render(){
        return(
            <div>
                <p>Quantidade de produtos: 4</p>
                <Produto/>
            </div>
        )
    }
}

export default Produtos