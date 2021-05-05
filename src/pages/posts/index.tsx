import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {[1, 2, 3].map((item) => (
            <a key={item} href="#">
              <time>12 de março de 2020</time>
              <strong> Creatting amoebas gingantes</strong>
              <p>
                Lidar com importação de arquivos em uma aplicação de médio a
                grande porte com Node.js é trabalhoso. A IDE às vezes não é auto
                suficiente e começa a bugar nessa hora.
              </p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
