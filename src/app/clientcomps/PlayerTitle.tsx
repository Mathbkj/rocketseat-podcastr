'use client'
import { useEffect, useState } from "react";
import { usePlayer } from "../contexts/PlayerContext";

export function PlayerTitle() {
    const { episodeList, currentEpisodeIndex } = usePlayer();
    const episode = episodeList[currentEpisodeIndex];
    const [_, forceUpdate] = useState(0);
    useEffect(() => {
        console.log("PlayerTitle - Episode:", episode);
        forceUpdate((prev) => prev + 1);
    }, [episode]);

    if(!episode) return <strong>Tocando Agora</strong>

    return <strong>Tocando agora {episode?.title}</strong>
}