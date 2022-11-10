//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import './styleCard.scss'

export function Card (props) {
  return (
    <div style = {{background: props.corData.cor}} className='card'>
      <h2>{props.corData.nome}</h2>
      <h1>{props.corData.cor}</h1>

    </div>
  )
}