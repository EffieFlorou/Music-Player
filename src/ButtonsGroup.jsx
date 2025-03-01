import Button from "./Button"
import './buttonsGroup.css'
import Playbutton from "./PlayButton"

export default function ButtonsGroup({isPlaying, handlePlayButton}){
    


    return(
        <div className="buttons">
            <Button shape = "fa fa-random" pushable="true"/>
            <Button shape = "fa fa-backward" pushable="true"/>
            <Playbutton isPlaying={isPlaying} handlePlayButton={handlePlayButton}/>
            <Button shape = "fa fa-forward" pushable="true"/>
            <Button shape = "fa fa-repeat" pushable="true"/>
            
        </div>

    )
}



