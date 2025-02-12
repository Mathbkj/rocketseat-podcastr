'use client'
import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

type Props = {
    playButton: string;
}

export function PlayerButton(props:Props) {
    const { isPlaying,togglePlay } = useContext(PlayerContext);
    return <>
       <button type="button" onClick={togglePlay} className={props.playButton}>
        {isPlaying ? (<img src="/pause.svg"/>) : (<img src="/play.svg"/>)}
      </button>
    </>
}