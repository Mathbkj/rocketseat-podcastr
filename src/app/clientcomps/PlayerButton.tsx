'use client'
import { usePlayer } from "../contexts/PlayerContext";

type Props = {
    playButton: string;
}

export function PlayerButton(props:Props) {
  const { isPlaying, togglePlay } = usePlayer();
    return <>
       <button type="button" onClick={togglePlay} className={props.playButton}>
        {isPlaying ? (<img src="/pause.svg"/>) : (<img src="/play.svg"/>)}
      </button>
    </>
}