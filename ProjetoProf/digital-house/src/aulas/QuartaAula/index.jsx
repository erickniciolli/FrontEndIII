import './style.scss'
import youtubeImage from './../../assets/images/yt.png'
import { Component } from 'react'
export function QuartaAula() {

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
        <h1 className="main-title">Essa é a quarta aula.</h1>

        <ul className='components-finded'>

            {
                
                componentsFinded.map(
                    component => {
                        return (
                            <li key = {component.id}>
                                <img src={component.image} alt="" />
                                <h1>{component.title}</h1>
                                <p>{component.text}</p>
                            </li>
                        )
                    }
                )

            }
        </ul>
        </div>
    )
}