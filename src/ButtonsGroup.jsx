import Button from "./Button"
import './buttonsGroup.css'
import Playbutton from "./PlayButton"

export default function ButtonsGroup({isPlaying, handlePlayButton}){
    


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



