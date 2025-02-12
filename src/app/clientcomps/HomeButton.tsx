'use client'

import { useContext } from "react";
import {CtxEpisode, PlayerContext} from "../contexts/PlayerContext";

export function HomeButton(props:CtxEpisode) {
    const {play} = useContext(PlayerContext);
    return <button onClick={() => play(props)}>
        <img src="/play-green.svg"/>
    </button>
    
}