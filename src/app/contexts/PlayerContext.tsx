'use client'
import { createContext, FC, PropsWithChildren, useState } from "react";

type CtxEpisode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayerContextData = {
    episodeList: CtxEpisode[];
    currentEpisodeIndex: number;
    play: (episode: CtxEpisode) => void;
}
type Props = PropsWithChildren;

export const PlayerContext = createContext({
    episodeList: [],
    currentEpisodeIndex: 0
} as PlayerContextData)

export const PlayerContextProvider:FC<Props> = ({children}) => {
    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

    function play(episode) {
        setEpisodeList([episode]);
        setCurrentEpisodeIndex(0);
    }
    return <PlayerContext.Provider value={{episodeList,currentEpisodeIndex,play}}>
        {children}
    </PlayerContext.Provider>
}