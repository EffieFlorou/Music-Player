import initial from './assets/susan-wilkinson-KsXMr9DasZE-unsplash.jpg'

export default function Picture({ vinylRef, initialPicture = initial }) {

    return (
        <div ref={vinylRef} className='container-cover'>
            <img src={initialPicture} alt="music-cover" />
        </div>
    )
}