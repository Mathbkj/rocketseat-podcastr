'use client'
import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

type Props = {
    activeClassName: string;
}

export function PlayerButtonRepeat(props:Props) {
    const { toggleLoop,isLooping } = useContext(PlayerContext);
    return <button type="button" className={isLooping ? (props.activeClassName):''} onClick={toggleLoop}>
            <img src="/repeat.svg" alt="Repetir"/>
    </button>

}