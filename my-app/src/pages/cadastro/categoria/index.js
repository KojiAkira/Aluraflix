import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault'


function CadastroCategoria(){
    return(
    <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <Link to="/cadastro/video">
            Cadastrar Vídeo
        </Link>
    </PageDefault>

    );
} 

export default CadastroCategoria;