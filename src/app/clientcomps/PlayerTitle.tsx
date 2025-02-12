'use client'
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

export function PlayerTitle() {
    const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);
    const episode = episodeList[currentEpisodeIndex];
    const [_, forceUpdate] = useState(0);
    useEffect(() => {
        console.log("PlayerTitle - Episode:", episode);
        forceUpdate((prev) => prev + 1);
    }, [episode]);

    if(!episode) return <strong>Tocando Agora</strong>

    return <strong>Tocando agora {episode?.title}</strong>
}