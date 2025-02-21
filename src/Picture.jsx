import initial from './assets/initial-Image.jpg'

export default function Picture({vinylRef, isPlaying ,initialPicture = initial }){

    return(
        <div ref={vinylRef} className='container-cover'>
        <img src={initialPicture} alt="music-cover"/>
        </div>
    )
}