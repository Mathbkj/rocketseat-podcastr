import styles from './styles.module.scss';
import { PlayerTitle } from '../../clientcomps/PlayerTitle';
import { PlayerBox } from '../../clientcomps/PlayerBox';
import { SliderComp } from '../../clientcomps/SliderComp';
import { PlayerAudio } from '../../clientcomps/PlayerAudio';
import { PlayerButton } from '../../clientcomps/PlayerButton';
import { PlayerButtonBefore } from '../../clientcomps/PlayerButtonBefore';
import { PlayerButtonNext } from '../../clientcomps/PlayerButtonNext';
import { PlayerButtonRepeat } from '../../clientcomps/PlayerButtonRepeat';
import { PlayerButtonShuffle } from '../../clientcomps/PlayerButtonSuffle';
import { EpisodeDuration } from '../../clientcomps/EpisodeDuration';
import { DurationProgress } from '../../clientcomps/DurationProgress';

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
                    <DurationProgress/>
                    <div className={styles.slider}>
                        <SliderComp emptyClassName={styles.emptySlider} />
                    </div>
                    <EpisodeDuration/>
                </div>
                <PlayerAudio/>
                <div className={styles.buttons}>         
                    <PlayerButtonShuffle activeClassName={styles.isActive} />
                    <PlayerButtonBefore/>
                    <PlayerButton playButton={styles.playButton} />
                    <PlayerButtonNext/>
                    <PlayerButtonRepeat activeClassName={styles.isActive} />
                </div>
            </footer>
        </div>
    )
}