import React, { useState } from "react";
import styled from "styled-components";

const EstiloProduto = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
align-items: center;
p {
    margin: 10px;
}
button {
    width: fit-content;
    margin-bottom: 12px;
}
`
const Produto = (props) => {
return(
    <div>
        <img src={props.img}/>
        <p>{props.titulo}</p>
        <p>{"R$" + props.valor +",00"}</p>        
    </div>
    
)
}

class ContainerProduto extends React.Component{
    render(){
        return(
            <div>
                <EstiloProduto>
                    <Produto titulo="Satélites antigos" valor="300" img="https://picsum.photos/250"/>
                    <button>Adicionar ao carrinho</button>
                </EstiloProduto>
                
                
            </div>
        )
    }
}

export default ContainerProduto