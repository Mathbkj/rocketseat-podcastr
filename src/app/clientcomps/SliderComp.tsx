'use client'

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { usePlayer } from '../contexts/PlayerContext';
import { RefObject } from 'react';

type Props = {
    emptyClassName: string;
}

export function SliderComp(props:Props) {
    const { episodeList, currentEpisodeIndex,progress,handleSeek } = usePlayer();

    const episode = episodeList[currentEpisodeIndex];

    

    return <>
        {episode ? (<Slider max={episode.duration}
            value={progress}
            onChange={handleSeek}
            trackStyle={{ backgroundColor: '#04d361' }}
            railStyle={{ backgroundColor: "#9f75ff" }}
            handleStyle={{borderColor:"#04d361",borderWidth:4}}
        >

        </Slider>) : (<div className={`${props.emptyClassName}`}/>)}
    </>
}