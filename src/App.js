import React, { useState } from 'react';
import styled from 'styled-components';

import Filtro from './components/Filtro';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';

const Home = styled.div`
display: flex;
`

class App extends React.Component {

  render(){
  return (
    <Home>
      <Filtro/>
      <Produtos/>
      <Carrinho/>
    </Home>
  );
}
}

export default App;
