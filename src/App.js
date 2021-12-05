import React from 'react';
import styled from 'styled-components';

import Filtro from './components/Filtro';
import ContainerDeProdutos from './components/ContainerDeProdutos';
import ProdutosNoCarrinho from './components/ProdutosNoCarrinho';

const Home = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 4px;
  margin: 0 12px;
  grid-gap: 8px;
  width: fit-content;
`

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('https://images7.alphacoders.com/805/thumbbig-805197.webp') ;
    background-size: cover;
    background-color: black;
    color: powderblue;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button{    
      background-color: powderblue;
      border-radius: 8px;
      padding: 4px;
      cursor: pointer;
      font-weight: bold;
      :hover{
        background-color: purple;
        color: powderblue;
      }
      :active{
        background-color: black;
        color: powderblue;
      }
    }
`

const Title = styled.div` 
  text-align: center;
  h1{
    margin: 0;
    padding: 0;
  }
  h4{
    margin: 0;
    padding: 0;
  }
`

const produtos = [
  {
    id: 1,
    titulo: "Meteorito pontiagudo",
    valor: 300,
    img: "https://i.ibb.co/RvHXTdC/5-1.png"
  },
  {
    id: 2,
    titulo: "Meteorito enferrujado",
    valor: 350,
    img: "https://i.ibb.co/DCrj1ss/1-1.png"
  },
  {
    id: 3,
    titulo: "Meteorito azul",
    valor: 500,
    img: "https://i.ibb.co/9Zs3Y9M/2-6.png"
  },
  {
    id: 4,
    titulo: "Meteorito raro - granito",
    valor: 1200,
    img: "https://i.ibb.co/S7zxWL7/2-7.png"
  },
  {
    id: 5,
    titulo: "Meteorito raro - carvão",
    valor: 900,
    img: "https://i.ibb.co/Wx1gxmR/3.png"

  },
  {
    id: 6,
    titulo: "Meteorito raro - liso",
    valor: 2900,
    img: "https://i.ibb.co/B65CQwD/1-3.png"
  },

]

class App extends React.Component {

  state = {
    minFilter: "",
    maxFilter: "",
    nomeFilter: "",
    carrinho: [],
    soma: 0,
  }

  onChangeMinFilter = (e) => {
    this.setState({
      minFilter: e.target.value
    })
  }

  onChangeMaxFilter = (e) => {
    this.setState({
      maxFilter: e.target.value
    })
  }

  onChangeNomeFilter = (e) => {
    this.setState({
      nomeFilter: e.target.value
    })
  }

  onClickButtonAdicionar = (id) => {
    const novoItem = [...this.state.carrinho]
    let somaValores = this.state.soma
    const novoCarrinho = produtos.filter((produto) => {
      if (id === produto.id) {
        const item = {...produto, tag:this.state.carrinho.length}
        novoItem.push(item)
        somaValores = somaValores + produto.valor
      }
    })

    return (this.setState({
      carrinho: novoItem,
      soma: somaValores
    }))
  }

  onClickButtonRemover = (tag) => {
    let subtraiValores = this.state.soma
    const novoCarrinho = this.state.carrinho.filter((produto) => {
      if (tag === produto.tag) {
        subtraiValores -= produto.valor
      }
      return (tag !== produto.tag)
    })

    return (this.setState({
      carrinho: novoCarrinho,
      soma: subtraiValores,
    }))
  }


  render() {
    console.log(this.state.carrinho)
    return (
      <Background>
        <Title>
          <h1>ASTRO STORE</h1>
          <hr />
          <h4>Os melhores meteoritos, pelos melhores preços.</h4>
        </Title>
        <Home>
          <Filtro
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nomeFilter={this.state.nomeFilter}
            onChangeMinFilter={this.onChangeMinFilter}
            onChangeMaxFilter={this.onChangeMaxFilter}
            onChangeNomeFilter={this.onChangeNomeFilter}
          />
          <ContainerDeProdutos
            produtos={produtos}
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nomeFilter={this.state.nomeFilter}
            onClickButton={this.onClickButtonAdicionar}

          />
          <ProdutosNoCarrinho
            carrinho={this.state.carrinho}
            soma={this.state.soma}
            remover={this.onClickButtonRemover}
          />
        </Home>
      </Background>
    );
  }
}

export default App;
