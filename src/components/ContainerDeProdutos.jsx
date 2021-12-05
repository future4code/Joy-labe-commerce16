import React from "react";
import styled from "styled-components";

import Produto from "./Produto";

const ContainerProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    label{
        margin-right: 8px;
    }
`

class ContainerDeProdutos extends React.Component {
    state = {
        ordenar: "Crescente"
    }

    filtrarProdutos = () => {
        return this.props.produtos
            .filter((produto) => {
                return this.props.minFilter === "" || produto.valor >= this.props.minFilter
            })
            .filter((produto) => {
                return this.props.maxFilter === "" || produto.valor <= this.props.maxFilter
            })
            .filter((produto) => {
                return produto.titulo.toLowerCase().includes(this.props.nomeFilter.toLowerCase())
            })
            .sort((a, b) => this.state.ordenar === "Crescente" ? a.valor - b.valor : b.valor - a.valor)
    }

    onChangeOrdenar = (e) => {
        this.setState({ ordenar: e.target.value })
    }

    render() {
        const arrayProdutos = this.filtrarProdutos()
        return (
            <div>
                <ContainerHeader>
                    <p>Quantidade de produtos: {arrayProdutos.length}</p>
                    <nav>
                        <label>Ordenação:</label>                        
                        <select value={this.state.ordenar} onChange={this.onChangeOrdenar}>
                            <option value={"Crescente"}>Crescente</option>
                            <option value={"Decrescente"}>Decrescente</option>
                        </select>
                    </nav>
                </ContainerHeader>
                <ContainerProdutos>
                    {arrayProdutos.map((produto) => {
                        return (
                            <Produto
                                prod={produto}
                                onClickButton={this.props.onClickButton}
                            />
                        )
                    })
                    }
                </ContainerProdutos>
            </div>
        )
    }
}

export default ContainerDeProdutos
