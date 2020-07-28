import React from 'react';
import Menu from './componentes/menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import Footer from './componentes/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
        urlExtra = {dadosIniciais.categorias[0].link_extra.url}
      />
 
      <Carousel
        category={dadosIniciais.categorias[1]}
        urlExtra = {dadosIniciais.categorias[1].link_extra.url}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
        urlExtra = {dadosIniciais.categorias[2].link_extra.url}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
        urlExtra = {dadosIniciais.categorias[4].link_extra.url}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
        urlExtra = {dadosIniciais.categorias[5].link_extra.url}
      />      

      <Footer />
    </div>
  );
}

export default App;