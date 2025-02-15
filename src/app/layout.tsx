import { Inter } from "next/font/google";
import "./styles/global.scss"
import styles from "./styles/app.module.scss";
import { Header } from "./components/Header";
import { Player } from "./components/Player";
import { PlayerContextProvider } from "./contexts/PlayerContext";


const inter = Inter({
  weight: "500",
  subsets: ['latin'],
  style:"normal",

})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <PlayerContextProvider>
      <body className={`${inter.className} ${styles.wrapper}`}>
        <main>
          <Header />
          {children}
        </main>
        <Player/> 
        </body>
      </PlayerContextProvider>
    </html>
  );
}
