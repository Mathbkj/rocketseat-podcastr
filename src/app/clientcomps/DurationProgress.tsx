'use client'
import { usePlayer } from "../contexts/PlayerContext"
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString"

export function DurationProgress() {
    const {progress} = usePlayer()
    return <span>{convertDurationToTimeString(progress)}</span>
}