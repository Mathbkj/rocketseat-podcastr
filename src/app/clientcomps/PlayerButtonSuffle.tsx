'use client'
import { useContext } from "react"
import { PlayerContext } from "../contexts/PlayerContext"

type Props = {
    activeClassName: string;
}

export function PlayerButtonShuffle(props:Props) {
    const {isShuffling,toggleShuffle} = useContext(PlayerContext)
    return <button type="button" className={isShuffling ? props.activeClassName : ''} onClick={toggleShuffle}>
    <img src="/shuffle.svg" alt="Embaralhar"/>
</button>
}