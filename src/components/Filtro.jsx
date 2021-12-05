import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
    border: 1px solid;
    border-radius: 8px;
    padding: 8px;
`
const ContainerInput = styled.div`
    margin: 0 10px;
    width: fit-content;
    input{
        max-width: 160px;
    }
`

class Filtro extends React.Component {
    render() {
        return (
            <ContainerFiltro>
                <h3>Filtros</h3>
                <ContainerInput>
                    <label>Valor mínimo:</label>
                    <br />
                    <input
                        type="number"
                        value={this.props.minFilter}
                        onChange={this.props.onChangeMinFilter}
                    />
                </ContainerInput>
                <ContainerInput>
                    <label>Valor máximo:</label>
                    <br />
                    <input
                        type="number"
                        value={this.props.maxFilter}
                        onChange={this.props.onChangeMaxFilter}
                    />
                </ContainerInput>
                <ContainerInput>
                    <label>Buscar por nome:</label>
                    <br />
                    <input
                        type="text"
                        value={this.props.nomeFilter}
                        onChange={this.props.onChangeNomeFilter}
                    />
                </ContainerInput>
            </ContainerFiltro>
        )
    }
}

export default Filtro