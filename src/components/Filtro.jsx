import React, { useState } from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
    border: 1px solid black;
    
    h3{
        margin: 20px 10px;
    }
`
const ContainerInput = styled.div`
    margin: 0 10px;
`

class Filtro extends React.Component{
    render(){
        return(
            <ContainerFiltro>
                <h3>Filtros</h3>
                <ContainerInput>
                    Valor mínimo:
                    <input 
                        type="number"
                        value={this.props.minFilter}
                        onChange={this.props.onChangeMinFilter}
                    />
                </ContainerInput>
                <ContainerInput>
                    Valor máximo:
                    <input 
                        type="number"
                        value={this.props.maxFilter}
                        onChange={this.props.onChangeMaxFilter}
                    />
                </ContainerInput>
                <ContainerInput>
                    Buscar por nome:
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