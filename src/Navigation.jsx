import Button from "./Button"
import './navigation.css'
import Playbutton from "./PlayButton"

export default function Navigation({isPlaying, handlePlayButton}){
    


    return(
        <div className="buttons">
            <Button shape = "fa fa-random" />
            <Button shape = "fa fa-backward"/>
            <Playbutton isPlaying={isPlaying} handlePlayButton={handlePlayButton}/>
            <Button shape = "fa fa-forward"/>
            <Button shape = "fa fa-repeat" />
        </div>
    )
}



