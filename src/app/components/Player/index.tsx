'use client'
import { useContext } from 'react';
import styles from './styles.module.scss';
import { PlayerContext } from '../../contexts/PlayerContext';

export function Player() {    
    const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);

    const episode = episodeList[currentEpisodeIndex];
    
    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando Agora" />
               
                <strong>Tocando Agora {episode?.title}</strong>
              
            </header>
            <div className={styles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>
            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.emptySlider} />
                    <span>00:00</span>
                </div>
                <div className={styles.buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" alt="Embaralhar"/>
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg" alt="Tocar Anterior"/>
                    </button>
                    <button type="button" className={styles.playButton}>
                        <img src="/play.svg" alt="Tocar episódio"/>
                    </button>
                    <button type="button">
                        <img src="/play-next.svg" alt="Tocar próxima"/>
                    </button>
                    <button type="button">
                       <img src="/repeat.svg" alt="Repetir"/>
                    </button>
                </div>
            </footer>
        </div>
    )
}