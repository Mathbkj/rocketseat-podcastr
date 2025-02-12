'use client'
import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";

export type CtxEpisode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayerContextData = {
    episodeList: CtxEpisode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    play: (episode: CtxEpisode) => void;
    togglePlay: () => void;
    setPlayingState: (state?: boolean) => void;
}
type Props = PropsWithChildren;

export const PlayerContext = createContext<PlayerContextData>({
    episodeList: [],
    currentEpisodeIndex: 0,
    play: () => { },
    isPlaying: false,
    togglePlay: () => { },
    setPlayingState:()=>{}
  });

export const PlayerContextProvider:FC<Props> = ({children}) => {
    const [episodeList, setEpisodeList] = useState<CtxEpisode[]>([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    function play(episode) {
        setEpisodeList([episode]);
        console.log("play called with episode", episode)
        setCurrentEpisodeIndex(0);
        setIsPlaying(true);
    }
    function togglePlay() {
        setIsPlaying(!isPlaying);
    }
    function setPlayingState(state?: boolean) {
        setIsPlaying(state);
    }
    useEffect(() => {
        console.log(episodeList)
    },[episodeList])
    return <PlayerContext.Provider value={{episodeList,currentEpisodeIndex,play,isPlaying,togglePlay,setPlayingState}}>
        {children}
    </PlayerContext.Provider>
}