import AudioControler from './AudioControler'
import './container.css'

export default function Container() {

    const style = {
        color:"var(--letter-primary-colour)",
        textAlign: "center"
    
    };

    return (
        <div className='music-container'>
            <h2 style={style}>Now Playing</h2>
            <AudioControler/>
        </div>
    )

}