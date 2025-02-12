'use client'

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

type Props = {
    emptyClassName: string;
}

export function SliderComp(props:Props) {
    const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);

    const episode = episodeList[currentEpisodeIndex];

    return <>
        {episode ? (<Slider trackStyle={{ backgroundColor: '#04d361' }}
            railStyle={{ backgroundColor: "#9f75ff" }}
            handleStyle={{borderColor:"#04d361",borderWidth:4}}
        >

        </Slider>) : (<div className={`${props.emptyClassName}`}/>)}
    </>
}