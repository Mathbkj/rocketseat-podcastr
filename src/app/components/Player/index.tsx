import styles from './styles.module.scss';
import { PlayerTitle } from '../../clientcomps/PlayerTitle';
import { PlayerBox } from '../../clientcomps/PlayerBox';
import { SliderComp } from '../../clientcomps/SliderComp';
import { PlayerAudio } from '../../clientcomps/PlayerAudio';
import { PlayerButton } from '../../clientcomps/PlayerButton';

export function Player() {
    /*const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);*/

    /*const episode = episodeList[currentEpisodeIndex];*/
    
    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando Agora" />
               
                {/*<strong>Tocando Agora</strong >*/}
                
                <PlayerTitle />
            </header>
              
            {/*<div className={styles.emptyPlayer}>
                < strong > Selecione um podcast para ouvir</strong>
            </div >*/}
            <PlayerBox emptyPlayer={styles.emptyPlayer} currentEpisode={styles.currentEpisode} />
            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        <SliderComp emptyClassName={styles.emptySlider} />
                    </div>
                    <span>00:00</span>
                </div>
                <PlayerAudio/>
                <div className={styles.buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" alt="Embaralhar"/>
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg" alt="Tocar Anterior"/>
                    </button>
                    {/*<button type="button" className={styles.playButton}>
                        <PlayerImage/>
                    </button>*/}
                    <PlayerButton playButton={styles.playButton} />
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