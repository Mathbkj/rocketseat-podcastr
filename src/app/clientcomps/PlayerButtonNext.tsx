'use client'
import { usePlayer } from "../contexts/PlayerContext";

export function PlayerButtonNext() {
    const { playNext,hasNext } = usePlayer();
    return <button type="button" onClick={playNext} disabled={!hasNext}>
        <img src="/play-next.svg" alt="Tocar próxima"/>
    </button>
}