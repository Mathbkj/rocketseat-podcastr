import { CtxEpisode, usePlayer } from "../contexts/PlayerContext";

export function PlayerEpisode(props: CtxEpisode) {
    const {play} = usePlayer();
    return <button type="button" onClick={() => play(props)}>
       <img src="/play.svg" alt="Tocar episódio"/> 
    </button>
}