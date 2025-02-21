import AudioPlayer from "./AudioPlayer"
import ButtonsGroup from "./ButtonsGroup"
import Picture from './Picture'
import Progress_container from './Progress_container'
import { useState, useRef, useEffect } from "react"

export default function AudioControler() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [timeStamp, setTimeStamp] = useState(0);
    const barRef = useRef(null);
    const audioRef = useRef(null);
    const vinylRef = useRef(null);
    const progressRef = useRef(null);


    function playMusic(song,vinyl) {
        song.play();
        vinyl.classList.add('play');
        setIsPlaying((prevState) => !prevState);
    }

    function PauseMusic(song,vinyl) {
        song.pause();
        vinyl.classList.remove('play');
        setIsPlaying((prevState) => !prevState);
    }


    function onBarClick(e) {
        const song = audioRef.current;
        const rect = barRef.current.getBoundingClientRect();
        const newPercentage = ((e.clientX - rect.x) / rect.width);
        const vinyl = vinylRef.current;

        //Updating the progress bar and audio when the user clicks on the progress
        //bar to change the timseStamp of the song. 
        progressRef.current.style.width = `${newPercentage * 100}%`;
        song.currentTime = newPercentage * song.duration;
        (!isPlaying) && playMusic(song,vinyl);

    }

    function handlePlayButton() {
        const vinyl = vinylRef.current;
        const song = audioRef.current;

        if (isPlaying) {
            PauseMusic(song,vinyl);
        } else {
            playMusic(song,vinyl);
        }
    }

    useEffect(() => {
        const song = audioRef.current;
        const vinyl = vinylRef.current;

        /// When the song plays, the time and
        //  progress displayed on the progress bar update continuously
        function updateProgress() {
            setTimeStamp(song.currentTime);
            const percentage = (song.currentTime / song.duration) * 100;
            progressRef.current.style.width = `${percentage}%`;
        }

        //When the the song is loaded, its duration is displayed
        function loadDuration() {
            setDuration(prevState => song.duration);
        }

        // When the song ends, the progress bar, 
        // the timestamp, and the rotating vinyl revert to their initial states.
        function handleTheEnd() {
            progressRef.current.style.width = `${0}%`;
            vinyl.classList.remove('play');
            setTimeStamp(0)
            setIsPlaying((prevState => (!prevState)));
        }

        song.addEventListener('loadedmetadata', loadDuration);
        song.addEventListener('timeupdate', updateProgress);
        song.addEventListener('ended', handleTheEnd);


        return () => {
            song.addEventListener('loadedmetadata', loadDuration);
            song.removeEventListener('timeupdate', updateProgress);
            song.removeEventListener('ended', handleTheEnd)
        }
    }, [])


    return (
        <>
            <Picture vinylRef={vinylRef} isPlaying={isPlaying} />
            <Progress_container timeStamp={timeStamp} duration={duration} progressRef={progressRef} onBarClick={onBarClick} barRef={barRef} />
            <AudioPlayer audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} vinylRef={vinylRef} />
            <ButtonsGroup isPlaying={isPlaying} handlePlayButton={handlePlayButton} />
        </>
    )
}