'use client'
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString";
import { usePlayer } from "../contexts/PlayerContext";

export function EpisodeDuration() {
    const { episodeList, currentEpisodeIndex } = usePlayer();

    const episode = episodeList[currentEpisodeIndex];

    return <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
}