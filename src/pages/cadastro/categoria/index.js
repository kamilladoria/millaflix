import React, {useState, useEffect} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormFields';
import Button from '../../../components/Button';


function CadastroCategoria() {

  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }  


  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://millaflix.herokuapp.com/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

    return (
      <PageDefault>
       <h1>Cadastro de Categoria:  </h1>
       <form onSubmit={function handleSubmit(infosDoEvento){
         infosDoEvento.preventDefault();
         setCategorias([
           ...categorias,
           values
         ]);
         setValues(valoresIniciais)
         
       }}>
         
         
         <FormField 
         label="Nome"
         type="text"
         name="nome"
          value={values.nome}
          onChange={handleChange}/>
         
         
          <FormField 
         label="Descrição"
         type="textarea"
         name="descricao"
          value={values.descricao}
          onChange={handleChange}/>
         
         <FormField 
         label="Cor"
         type="color"
         name="cor"
          value={values.cor}
          onChange={handleChange}/>
        
         <p></p>
         <Button>
           Cadastrar
         </Button>
        <p></p>
         <Link to="/"> Voltar</Link>
       </form>

       {categorias.length === 0 && (
         <div>
           {}
           Loading...
         </div>
       )}

       <ul>
         {categorias.map((categoria) => {
           return (
             <li key={`${categoria.nome}`}>
               {categoria.nome}
             </li>

           )
         })}
       </ul>

        
      </PageDefault>
    )
  }

  export default CadastroCategoria;