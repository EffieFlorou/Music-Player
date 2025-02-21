import UpperBar from './UpperBar'

import AudioControler from './AudioControler'
import './container.css'

export default function Container() {

    return (
        <div className='music-container'>
            <UpperBar />
            <AudioControler/>
        </div>
    )

}