"use client";
import { useEffect, useRef } from "react";
import { usePlayer } from "../contexts/PlayerContext";

export function PlayerAudio() {
  const { episodeList, currentEpisodeIndex, isPlaying, setPlayingState,isLooping,audioRef,setupProgressListener,handleEpisodeEnd} =
    usePlayer();
  const episode = episodeList[currentEpisodeIndex];

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);  
  return (
    <>
      {episode && (
        <audio
          ref={audioRef}
          src={episode.url}
          loop={isLooping}
          autoPlay
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
          onEnded={handleEpisodeEnd}
          onLoadedMetadata={setupProgressListener}
        />
      )}
    </>
  );
}
