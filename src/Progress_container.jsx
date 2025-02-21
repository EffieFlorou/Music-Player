import './progress.css'

export default function Progress_container({timeStamp, duration, progressRef,clickTheBar ,barRef}) {
    

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
            <div onMouseDown={clickTheBar} className="progress-container" ref={barRef}>
                <div ref={progressRef} className="progress-bar"></div>
            </div>
        </>
    )
}   