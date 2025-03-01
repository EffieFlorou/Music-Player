export default function Button({shape, pushable=false,insertSong} ){

    return (

        <button className={pushable?'pushable':''} ref={insertSong}>
            <i className={shape}>
            </i>
        </button>
    )
}