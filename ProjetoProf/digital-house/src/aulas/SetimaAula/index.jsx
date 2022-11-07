import { useState } from 'react'
import './style.scss'
import { SetimaAulaCardProduto } from "../../components/SetimaAulaCardProduto"

export function SetimaAula() {

    // const [contador, setContador] = useState(0)
    // const [temaEscuro, setTemaEscuro] = useState(false)

    // function somarNumero(numero) {

    //     setContador(contador + numero)

    // }

    // function mudarTema() {

    //     setTemaEscuro(!temaEscuro)

    // }

    const [nomeProduto, setNomeProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState('')
    const [fotoProduto, setFotoProduto] = useState('')

    const products = [
        {
            id: 1,
            name: 'Xbox',
            price: '3.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
        },
        {
            id: 2,
            name: 'Playstation 5',
            price: '5.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
        },
        {
            id: 3,
            name: 'Switch',
            price: '2.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
        }
    ]
    const [allProducts, setAllProducts] = useState(products)



    const newProduct = {
        id: 4,
        name: 'Playstation 4',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

    function cadastrarProduto (event) {
        

        event.preventDefault()

        const novoProdutoCadastrado = {
            name:nomeProduto,
            price:precoProduto,
            picture:fotoProduto

        }

        setAllProducts([...allProducts, novoProdutoCadastrado])
    }

    function addNewProduct() {
        // setAllProducts(allProducts.push(newProduct))
        setAllProducts([...allProducts, newProduct])
    }

    return (

        // <main className={`setima-aula-component ${temaEscuro ? 'dark-theme' : ''}`}>

        //     <h1>Contador</h1>

        //     <button onClick={() => mudarTema()}>Mudar tema</button>
        //     <button onClick={() => somarNumero(2)}>Adicionar</button>
        //     <span>Número atual: {contador}</span>

        // </main>

        <main className="setima-aula-component">

            <div className="tittle-wrapper">
                <h1>Produtos</h1>
                <button onClick={addNewProduct}>Adicionar novo produto</button>
            </div>

            <form onSubmit = {event => cadastrarProduto(event)}>

                <div>
                    <label htmlFor="nomeProduto">Nome produto</label>
                    <input id="nomeProduto" type="text" onChange={event => setNomeProduto(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="precoProduto">Preço</label>
                    <input id="precoProduto" type="text" onChange={event => setPrecoProduto(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="fotoProduto">Foto produto</label>
                    <input id="fotoProduto" type="text" onChange={event => setFotoProduto(event.target.value)} />
                </div>

                <button type='submit' onClick={ event => cadastrarProduto(event)}>Cadastrar produto</button>
            </form>

            <section className='products'>
                {
                    allProducts.map(
                        product => {
                            return (
                                <SetimaAulaCardProduto
                                    productData={product}
                                />
                            )
                        }
                    )
                }
            </section>

        </main>

    )

}


// import { useState } from 'react'
// import './style.scss'

// export function SetimaAula() {

// // let contador=0
// const [contador, setContador] = useState(0)
// const [temaEscuro, setTemaEscuro] = useState(true)

// function somarNumero () {
    
//     setContador(contador+1)

// }

// function mudarTema() {
//     setTemaEscuro(!temaEscuro)
// }

// return (

// <main className ={`setima-aula-component ${temaEscuro ? 'dark-theme' :''}`}>

//     <h1>Contador</h1>
//     <button onClick = {mudarTema}>Mudar Tema</button>
//     <button onClick = {somarNumero}>Adicionar</button>
//     <span>Numero atual: {contador}</span>

// </main>

//     )
// }