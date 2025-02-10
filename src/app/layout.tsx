import { Inter } from "next/font/google";
import "./styles/global.scss"
import styles from "./styles/app.module.scss";
import { Header } from "./components/Header";
import { Player } from "./components/Player";

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
      <body className={`${inter.className} ${styles.wrapper}`}>
        <main>
          <Header />
          {children}
        </main>
        <Player/>
        
      </body>
    </html>
  );
}
