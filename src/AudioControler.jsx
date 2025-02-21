import AudioPlayer from "./AudioPlayer"
import Navigation from "./Navigation"
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


    function clickTheBar(e) {

        const song = audioRef.current;
        const progressBar = barRef.current;
        const rect = progressBar.getBoundingClientRect();
        const newPercentage = ((e.clientX - rect.x) / rect.width);
        const vinyl = vinylRef.current;

        progressRef.current.style.width = `${newPercentage * 100}%`;
        song.currentTime = newPercentage * song.duration;
        if (!isPlaying) playMusic(song,vinyl);


    }


    useEffect(() => {
        const song = audioRef.current;
        const vinyl = vinylRef.current;

        function updateProgress() {
            setTimeStamp(song.currentTime);
            const percentage = (song.currentTime / song.duration) * 100;
            progressRef.current.style.width = `${percentage}%`;
        }

        function loadDuration() {
            setDuration(song.duration);
        }


        function handleTheEnd() {
            progressRef.current.style.width = `${0}%`;
            vinyl.classList.remove('play');
            setDuration(song.duration);
            setTimeStamp(0)
            setIsPlaying((prevState => (!prevState)));
        }

        song.addEventListener('ended', handleTheEnd)
        song.addEventListener('timeupdate', updateProgress);
        song.addEventListener('loadedmetadata', loadDuration);

        return () => {
            song.addEventListener('loadedmetadata', loadDuration);
            song.removeEventListener('timeupdate', updateProgress);
            song.removeEventListener('ended', handleTheEnd)
        }
    }, [])

    function handlePlayButton() {
        const vinyl = vinylRef.current;
        const song = audioRef.current;
        if (isPlaying) {
            PauseMusic(song,vinyl);
        } else {
            playMusic(song,vinyl);
        }
    }



    return (
        <>
            <Picture vinylRef={vinylRef} isPlaying={isPlaying} />
            <Progress_container timeStamp={timeStamp} duration={duration} progressRef={progressRef} clickTheBar={clickTheBar} barRef={barRef} />
            <AudioPlayer audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} vinylRef={vinylRef} />
            <Navigation isPlaying={isPlaying} handlePlayButton={handlePlayButton} />
        </>
    )
}