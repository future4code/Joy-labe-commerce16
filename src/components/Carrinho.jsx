import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
border: 1px solid;
margin: 4px;
padding: 4px;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 30px;
    height: 30px;
}
`
class Carrinho extends React.Component {
    render() {
        const prod = this.props.prod
        return (
            <ContainerCarrinho>
                <img src={prod.img} alt = {prod.titulo}/>
                <div>
                    <p>{prod.titulo}</p>
                    <p>{"R$" + prod.valor + ",00"}</p>
                    <button onClick={()=>this.props.onClickRemover(prod.id)}>Remover do carrinho</button>
                </div>
            </ContainerCarrinho>
        )
    }
}



export default Carrinho