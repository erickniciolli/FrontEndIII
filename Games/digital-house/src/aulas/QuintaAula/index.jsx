import './style.scss'
import youtubeImage from './../../assets/images/yt.png'
import { QuintaAulaItem } from '../../components/QuintaAulaItem'

export function QuintaAula() {

    const componentsFinded = [
        {
            id:1,
            title: 'Video Component',
            image: youtubeImage,
            text: 'Esse e o vídeo 1.'
        },
        {
            id:2,
            title: 'Video Component 2',
            image: youtubeImage,
            text: 'Esse e o vídeo 2.'
        }
    ]
    
        
    
        return(
            <div className='quarta-aula-component'>

            {/* <QuintaAulaItem title = 'Primeiro componente' image = ''/>
            <QuintaAulaItem title = 'Primeiro componente2' image = ''/> */}
                
            <h1 className="main-title">Essa é a quarta aula.</h1>
    
            <ul className='components-finded'>
    
                {
                    
                    componentsFinded.map(
                        component => {
                            return (
                                <QuintaAulaItem key = {component.id} item={component}/>
                            )
                        }
                    )
    
                }
            </ul>
            </div>
        )
}