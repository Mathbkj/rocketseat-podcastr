'use client'

import { CtxEpisode, usePlayer } from "../contexts/PlayerContext";

export function HomeButton(props:CtxEpisode) {
    const { play } = usePlayer();
    return <button onClick={() => play(props)}>
        <img src="/play-green.svg"/>
    </button>
    
}