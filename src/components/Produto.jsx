import React from "react";
import styled from "styled-components";

const EstiloProduto = styled.div`
display: flex;
flex-direction: column;
border: 1px solid;
border-radius: 8px;
align-items: center;
margin: 8px;

p {
    margin: 8px;
}

button {
    width: fit-content;
    margin-bottom: 12px;
}

img {
    width: 250px;
    height: 250px;
    border-radius: 8px;
    
}
`
class Produto extends React.Component {

    render() {
        const prod = this.props.prod
        return (
            <EstiloProduto>
                <img src={prod.img} alt={prod.titulo} />
                <p>{prod.titulo}</p>
                <p>{"R$ " + prod.valor + ", 00"}</p>
                <div>
                    <button onClick={() => this.props.onClickButton(prod.id)}>Adicionar ao carrinho</button>
                </div>
            </EstiloProduto>

        )
    }
}


export default Produto