
export default function AudioPlayer({  audioRef }) {

  return (
    <audio ref={audioRef}>
      <source src="./relaxing-guitar-loop-v5-245859.mp3" />
    </audio>
  );
}