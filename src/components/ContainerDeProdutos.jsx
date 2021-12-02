import React from "react";
import styled from "styled-components";

import Produto from "./Produto";

const ContainerProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
`

class ContainerDeProdutos extends React.Component {
    render(){
        const arrayProdutos = this.props.produtos
        return(
            <ContainerProdutos>
                {arrayProdutos.map((produto)=>{
                    return(
                        <Produto prod={produto}/>
                    )
                })}            
            </ContainerProdutos>
        )
    }
}

export default ContainerDeProdutos
