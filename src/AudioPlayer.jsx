
export default function AudioPlayer({  audioRef }) {


  return (
    //public\mixkit-arcade-retro-game-over-213.wav 
    //./public/yt1s.com - Star Wars The Old Republic Theme Clash of Destiny  EPIC VERSION.mp3
    <audio ref={audioRef}>
      <source src="./public/yt1s.com - Star Wars The Old Republic Theme Clash of Destiny  EPIC VERSION.mp3" />
    </audio>
  );
}