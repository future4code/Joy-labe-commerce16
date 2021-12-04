import React from "react";
import styled from "styled-components";
import Carrinho from "./Carrinho";

const CarrinhoHeader = styled.div`
    
`
const ContainerCarrinho = styled.div`
border: 1px solid;
padding: 8px;
`

class ProdutosNoCarrinho extends React.Component {

    render() {
        const arrayProdutos = this.props.carrinho
        return (
            <ContainerCarrinho>
                <CarrinhoHeader>
                    <h3>Carrinho</h3>
                    <p>Quantidade de itens: {arrayProdutos.length}</p>
                    <p>Valor total: {"R$ " + this.props.soma + ", 00"}</p>
                </CarrinhoHeader>
                {arrayProdutos.map((produto) => {
                    return (
                        <Carrinho prod={produto} 
                        onClickRemover={this.props.remover}
                        />
                    )
                })
                }
            </ContainerCarrinho>
        )
    }
}

export default ProdutosNoCarrinho