"use client";
import { useContext, useEffect, useRef } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

export function PlayerAudio() {
  const { episodeList, currentEpisodeIndex, isPlaying, setPlayingState } =
    useContext(PlayerContext);
  const episode = episodeList[currentEpisodeIndex];
  const audioRef = useRef<HTMLAudioElement>(null);

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
          autoPlay
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
        />
      )}
    </>
  );
}
