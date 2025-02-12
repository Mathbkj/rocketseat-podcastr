'use client'
import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import Image from "next/image";

type Props = {
    currentEpisode: string;
    emptyPlayer: string;
}

export function PlayerBox(props:Props) {
    const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);
    const episode = episodeList[currentEpisodeIndex];
    return <>
        {
        episode ? (<div className={props.currentEpisode}>
            <Image width={350} height={300} src={episode.thumbnail} alt="" />
            <strong>{episode.title}</strong>
            <span>{episode.members}</span>
    </div>):(<div className={props.emptyPlayer}><strong>Selecione um podcast para ouvir</strong></div>)}
    </>
    
}