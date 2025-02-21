import './progress.css'

export default function Progress_container({ timeStamp, duration, progressRef, onBarClick, barRef }) {

    //Changing the time display to show as a timestamp
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };


    return (
        <>
            <div className='duration-container'>
                <div>{formatTime(timeStamp)}</div>
                <div className='duration'>{formatTime(duration)}</div>
            </div>
            <div onMouseDown={onBarClick} className="progress-container" ref={barRef}>
                <div ref={progressRef} className="progress-bar"></div>
            </div>
        </>
    )
}   