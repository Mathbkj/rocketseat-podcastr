'use client'
import { usePlayer } from "../contexts/PlayerContext";

export function PlayerButtonBefore() {
    const { playPrevious,hasPrevious } = usePlayer();
    return <button onClick={playPrevious} disabled={!hasPrevious} type="button">
        <img src="/play-previous.svg" alt="Repetir"/>
    </button>
}