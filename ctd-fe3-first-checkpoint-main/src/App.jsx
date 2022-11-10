

import { Card } from "./Card"
import { useState } from 'react'
import { Mensagem } from "./Mensagem"
import './style.scss'


function App() {
  
  const [nomeCor, setNomeCor] = useState('')
  const [corHex, setCorHex] = useState('#000000')
  const [formularioErro, setFormularioErro] = useState(false)
  const cores = []

  const [allCores, setAllCores] = useState(cores)

  function cadastrarCor (event) {
        
    event.preventDefault()

    const novaCorCadastrada = {
        
        nome: nomeCor.trim(),
        cor: corHex

    }

    const regex = /[0-9]/;

    if (nomeCor === '' || corHex === '' || nomeCor.trim().length<3 || corHex.length<6 || !regex.test(corHex)) {
       
        setFormularioErro(true)
      
    } else {
      setFormularioErro(false)
      setAllCores([...allCores, novaCorCadastrada])
    }

    document.getElementById('nomeCor').value='';

    
}


  return (
    <div className="App">
     <h1 className="main-title">ADICIONAR NOVA COR</h1>
     <form className={formularioErro ? 'form-error' : 'correto'} onSubmit = {event => cadastrarCor(event)}>
      <div>

        <h1 className="coresFavoritas">Cores favoritas</h1>

        <label htmlFor="nomeCor">Nome</label>
      
        <input id="nomeCor" type="text" onChange={event => setNomeCor(event.target.value)}/>

        <label htmlFor="cor">Cor</label>
        
        <input id="cor" type="color" onChange={event => setCorHex(event.target.value)} />

      </div>
    
        <button className="botao" type='submit' onClick={ event => cadastrarCor(event)} >Cadastrar cor</button>
     </form>

     {
         formularioErro ? (
           <span className="span">O seu formulário contem erros</span>
         ) : null
      }

     <section className='cores'>
        {
          allCores.map(
            (corNova, index) => {
               return (
                      <Card key = {index}
                       corData={corNova}
                       />
                     )
                 }
             )
        }
      </section>


    </div>
  )
}

export default App