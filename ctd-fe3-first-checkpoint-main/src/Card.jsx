//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import './styleCard.scss'

export function Card (props) {
  return (
    <div className='card'>
      <h1>{props.corData.nome}</h1>
      <h1>{props.corData.cor}</h1>

    </div>
  )
}