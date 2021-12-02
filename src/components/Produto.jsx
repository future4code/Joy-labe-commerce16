import React, { useState } from "react";
import styled from "styled-components";

const EstiloProduto = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
align-items: center;
margin: 7px;

p {
    margin: 10px;
}
button {
    width: fit-content;
    margin-bottom: 12px;
}

img {
    width: 250px;
    height: 250px;
}
`
class Produto extends React.Component{

    render(){
        const prod = this.props.prod
        return (
            <EstiloProduto>
                <img src={prod.img} />
                <p>{prod.titulo}</p>
                <p>{"R$" + prod.valor + ",00"}</p>
                <div>
                    <button>Adicionar ao carrinho</button>
                </div>
            </EstiloProduto>
    
        )
    }   
}


export default Produto