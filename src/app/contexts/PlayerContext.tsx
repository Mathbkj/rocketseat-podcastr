'use client'
import { createContext, FC, PropsWithChildren, Ref, RefObject, useCallback, useContext, useEffect, useRef, useState } from "react";

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
    isShuffling: boolean;
    play: (episode: CtxEpisode) => void;
    togglePlay: () => void;
    setPlayingState: (state: boolean) => void;
    playList: (list: CtxEpisode[], index: number) => void;
    playNext: () => void;
    playPrevious: () => void;
    hasNext: boolean;
    hasPrevious: boolean;
    isLooping: boolean;
    progress: number;
    toggleLoop: () => void;
    toggleShuffle: () => void;
    audioRef: RefObject<HTMLAudioElement>;
    setupProgressListener: () => void;
    clearPlayerState: () => void;
    handleEpisodeEnd: () => void;
    handleSeek: (amount: number) => void;
}
type Props = PropsWithChildren;

export const PlayerContext = createContext<PlayerContextData>({
    episodeList: [],
    currentEpisodeIndex: 0,
    play: () => { },
    isPlaying: false,
    togglePlay: () => { },
    setPlayingState: () => { },
    playList: () => { },
    playNext: () => { },
    playPrevious: () => { },
    hasNext: false,
    hasPrevious: false,
    isLooping: false,
    isShuffling:false,
    toggleLoop: () => { },
    toggleShuffle: () => { },
    progress: 0,
    setupProgressListener: () => { },
    clearPlayerState: () => { },
    audioRef: null,
    handleSeek: () => { },
    handleEpisodeEnd:()=>{}

  });

export const PlayerContextProvider: FC<Props> = ({ children }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [episodeList, setEpisodeList] = useState<CtxEpisode[]>([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);
    const [progress,setProgress] = useState(0)

    function play(episode:CtxEpisode) {
        setEpisodeList([episode]);
        console.log("play called with episode", episode)
        setCurrentEpisodeIndex(0);
        setIsPlaying(true);
    }

    function playList(list:CtxEpisode[],index:number) {
        setEpisodeList(list);
        setCurrentEpisodeIndex(index);
        setIsPlaying(true);
    }

    function togglePlay() {
        setIsPlaying(!isPlaying);
    }

    function toggleLoop() {
        setIsLooping(!isLooping);
    }

    function toggleShuffle() {
        setIsShuffling(!isShuffling)
    }

    function setPlayingState(state?: boolean) {
        setIsPlaying(state);
    }
    const hasPrevious = currentEpisodeIndex > 0;
    const hasNext = isShuffling || (currentEpisodeIndex + 1) < episodeList.length;

    function setupProgressListener() {
        audioRef.current.currentTime = 0;
        audioRef.current.addEventListener("timeupdate", () => {
            setProgress(audioRef.current.currentTime)
        });
    }
    function handleSeek(amount:number) {
        audioRef.current.currentTime = amount;
        setProgress(amount);
    }
    function clearPlayerState() {
        setEpisodeList([]);
        setCurrentEpisodeIndex(0);
    }

    function playNext() {
        if (isShuffling) {
            const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
            setCurrentEpisodeIndex(nextRandomEpisodeIndex);
        }
        if (hasNext) {
            setCurrentEpisodeIndex(currentEpisodeIndex + 1);
        }
    }
    function playPrevious() {
        if (hasPrevious) {
            setCurrentEpisodeIndex(currentEpisodeIndex - 1);
        }
    }
    function handleEpisodeEnd() {
        if (hasNext) {
            playNext();
        } else {
            clearPlayerState();
        }
    }

    useEffect(() => {
        console.log(episodeList)
    }, [episodeList])
    
    useEffect(() => {
        console.log(progress)
    }, [progress])
    
    return <PlayerContext.Provider value={{episodeList,currentEpisodeIndex,play,isPlaying,togglePlay,setPlayingState,playList,playNext,playPrevious,hasNext,hasPrevious,isLooping,toggleLoop,toggleShuffle,isShuffling,progress,setupProgressListener,handleSeek,audioRef,clearPlayerState,handleEpisodeEnd}}>
        {children}
    </PlayerContext.Provider>
}

export const usePlayer = () => {
    return useContext(PlayerContext);
}