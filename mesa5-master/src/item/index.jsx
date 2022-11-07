export function QuintaAulaMesaItem(props) {

    console.log(props)

    return (
        <li>
            <img src={props.item.image} alt="" />
            <h1>{props.item.nome}</h1>
            <p>{props.item.preco}</p>
        </li>
    )
}