'use client'
import { CtxEpisode, usePlayer } from "../contexts/PlayerContext";
type ThisEpisode = {
    list: CtxEpisode[],
    index: number;
}
export function MainButton(props:ThisEpisode) {
    const { playList } = usePlayer();
    return <button onClick={()=>playList(props.list,props.index)}>
            <img src="/play-green.svg"/>
    </button>
    
}