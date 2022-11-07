import "./style.scss"

export function GamesItem(props) {

    console.log(props)

    return (
        // <h1>{props.title}</h1>
        <li className = "sexta-aula-item-component">
            <img src={props.item.picture} alt="" />
            <h2>{props.item.name}</h2>
            <p className="price">{props.item.price}</p>
            <p>{props.item.plataforms}</p>
            <span className = "categories">{props.item.categories.map(
                category => {
                    return  <a> {category} </a>
                }
            )}</span>
        </li>
    )
}

export function GamesItem2(props) {

    console.log(props)

    return (
        // <h1>{props.title}</h1>
        <li className = "sexta-aula-item-component">
            <img src={props.item.picture} alt="" />
            <h2>{props.item.name}</h2>
            <p className="price2">{props.item.newPrice}</p>
            <p>{props.item.plataforms}</p>
            <span className = "categories">{props.item.categories.map(
                category => {
                    return  <a> {category} </a>
                }
            )}</span>
        </li>
    )
}
