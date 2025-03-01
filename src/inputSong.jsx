import { useRef } from "react"
import Button from "./Button"


export default function InputSong() {
    const insertSong= useRef(null);
    return (
        <div className='nav'>
            <Button shape="fa-solid fa-folder-open" pushable={true} insertSong={insertSong} />
            <Button shape="fa-solid fa-headphones" pushable={true} />
            <input type="file" style={{ display: "none" }} accept=".wav, .aiff, .flac, .alac, .ape, .mp3, .aac, .ogg, .wma, .dts, .ac3, .opus" />
        </div>
        )
}