
export default function Playbutton({isPlaying, handlePlayButton}) {


    return (
        <button onClick={handlePlayButton}>
            <i className={!isPlaying ? "fa fa-play" : "fa fa-pause"}></i>
        </button>
    )

}           