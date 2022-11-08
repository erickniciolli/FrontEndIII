
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

import { Card } from "./Card"
import { useState } from 'react'

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs

  const [nomeCor, setNomeCor] = useState('')
  const [corHex, setCorHex] = useState('')
  
  const cores = []

  const [allCores, setAllCores] = useState(cores)

  

  function cadastrarCor (event) {
        

    event.preventDefault()

    const novaCorCadastrada = {

        nome: nomeCor,
        cor: corHex

    }

    setAllCores([...allCores, novaCorCadastrada])
}


  return (
    <div className="App">
     <h1>Carga de estudiantes</h1>
     <form onSubmit = {event => cadastrarCor(event)}>
      <div>

        <label htmlFor="nomeCor">Nome</label>
      
        <input id="nomeCor" type="text" onChange={event => setNomeCor(event.target.value)}/>

        <label htmlFor="cor">Cor</label>
        
        <input id="cor" type="color" onChange={event => setCorHex(event.target.value)} />

      </div>
        

        {/* <button type='submit' onClick={ event => cadastrarProduto(event)}>Cadastrar cor</button> */}
        <button type='submit' onClick={ event => cadastrarCor(event)} >Cadastrar cor</button>
     </form>

     <section className='cores'>
                {
                    allCores.map(
                        corNova => {
                            return (
                                <Card
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