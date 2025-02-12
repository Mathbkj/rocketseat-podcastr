'use client'
import { useParams} from "next/navigation"
import { api } from "../../services/api";
import type { Episode} from "../../page";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";
import styles from "./episode.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PlayerButton } from "../../clientcomps/PlayerButton";
import { HomeButton } from "../../clientcomps/HomeButton";
import { PlayerEpisode } from "../../clientcomps/PlayerEpisode";

type ThisEpisode = Episode & {
    description: string;
}

type EpisodeProps = {
    id: string;
    title: string;
    thumbnail: string;
    members: string;
    publishedAt: string;
    duration: number;
    durationAsString: string;
    description: string;
    url: string;
}

export default function Episode() {
    const params = useParams();
    const [ep, setEp] = useState<EpisodeProps|null>(null);
    useEffect(() => {
        (async () => {
            const response = await api.get(`episodes/${params.id}`);
            const data: ThisEpisode = response.data;
            const episode: EpisodeProps = {
                id: data.id,
                title: data.title,
                thumbnail: data.thumbnail,
                members: data.members,
                publishedAt: format(parseISO(data.published_at), "d MMM yy", {
                    locale: ptBR,
                }),
                duration: Number(data.file.duration),
                durationAsString: convertDurationToTimeString(Number(data.file.duration)),
                description: data.description,
                url: data.file.url
            }
            console.log(episode);
            setEp(episode);
        })();
        
    }, [params.id])    

    if (!ep) {
        return <div>Loading...</div>
    }
   
    return <div className={styles.episode}>
        <div className={styles.thumbnailContainer}>
            <Link href="/">
            <button className={styles.firstButton} type="button">
                <img src="/arrow-left.svg" alt="Voltar"/>
            </button>
            </Link>
            
            <Image width={700} height={300} src={ep.thumbnail} objectFit="cover" alt="" />
            <PlayerEpisode title={ep.title} members={ep.members} thumbnail={ep.thumbnail} duration={ep.duration} url={ep.url} />
        </div>
        <header>
            <h1>{ep.title}</h1>
            <span>{ep.members}</span>
            <span>{ep.publishedAt}</span>
            <span>{ep.durationAsString}</span>
        </header>
        <div className={styles.description} dangerouslySetInnerHTML={{__html:ep.description}}>
           
        </div>
    </div>
}