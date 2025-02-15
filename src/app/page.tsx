import Image from "next/image";
import { format } from "date-fns/format";
import { api } from "./services/api";
import { parseISO } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { convertDurationToTimeString } from "./utils/convertDurationToTimeString";
import Link from "next/link";
import styles from "./home.module.scss";
import { CtxEpisode } from "./contexts/PlayerContext";
import { MainButton } from "./clientcomps/MainButton";

export type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  published_at: string;
  file: {
    url: string;
    type?: string;
    duration: number;
  };
};
export default async function Home() {
  const response = await api.get("http://localhost:3333/episodes", {
    params: { _limit: 12, _sort: "published_at", _order: "desc" },
  });
  const info: Episode[] = await response.data;
  const formatData = info.map((ep) => {
    return {
      id: ep.id,
      title: ep.title,
      thumbnail: ep.thumbnail,
      members: ep.members,
      publishedAt: format(parseISO(ep.published_at), "d MMM yy", {
        locale: ptBR,
      }),
      duration: Number(ep.file.duration),
      durationAsString: convertDurationToTimeString(Number(ep.file.duration)),
      url: ep.file.url,
    };
  });
  const latestEpisodes = formatData.slice(
    formatData.length - 2,
    formatData.length
  );
  console.log(latestEpisodes);
  const allEpisodes = formatData.slice(2, formatData.length);
  const episodeList:CtxEpisode[] = [...latestEpisodes, ...allEpisodes];
  return (
    <div className={styles.homepage}>
      <section className={styles.latestEpisodes}>
        <h2>Últimos lançamentos</h2>
        <ul>
          {latestEpisodes.map((ep,index) => (
            <li key={ep.id}>
              <Image
                width={90}
                height={90}
                src={ep.thumbnail}
                alt={ep.title}
                objectFit="cover"
              />
              <div className={styles.episodeDetails}>
                <Link href={`/episodes/${ep.id}`}>{ep.title}</Link>

                <p>{ep.members}</p>
                <span>{ep.publishedAt}</span>
                <span>{ep.durationAsString}</span>
              </div>
              <MainButton list={episodeList} index={index} />         
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.allEpisodes}>
        <h2>Todos episódios</h2>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allEpisodes.map((ep,index) => (
              <tr key={ep.id}>
                <td>
                  <Image
                    width={120}
                    height={120}
                    src={ep.thumbnail}
                    alt={ep.title}
                  />
                </td>
                <td>
                  <Link href={`/episodes/${ep.id}`}>{ep.title}</Link>
                </td>
                <td>{ep.members}</td>
                <td style={{ width: 100 }}>{ep.publishedAt}</td>
                <td>{ep.durationAsString}</td>
                <td>
                  <MainButton list={episodeList} index={index + latestEpisodes.length} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
