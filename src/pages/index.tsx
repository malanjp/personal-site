import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Malan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>malan</h1>

        <h2>Profile</h2>
        <ul>
          <li>HN: malan</li>
          <li>Name: Michihiro Shibata</li>
          <li>Profession: Software Engineer (server-side web developer) / Manager / CTO</li>
          <li>Github: <a href="https://github.com/malanjp">https://github.com/malanjp</a></li>
          <li>Twitter: <a href="https://twitter.com/ma1anjp">https://twitter.com/ma1anjp</a></li>
          <li>Facebook: <a href="https://facebook.com/mshibata">https://facebook.com/mshibata</a></li>
          <li>Blog: </li>
        </ul>

        <h2>Skill</h2>
        <ul>
          <li>Python
            <ul>
              <li>Django / DRF</li>
              <li>Flask</li>
            </ul>
          </li>
          <li>PHP
            <ul>
              <li>Ethna</li>
              <li>Laravel</li>
            </ul>
          </li>
          <li>Java</li>
          <li>C#</li>
          <li>C / C++</li>
          <li>JavaScript</li>
          <li>TypeScript (Beginner)
            <ul>
              <li>Vue.js (Beginner)</li>
              <li>Nuxt.js (Beginner)</li>
              <li>React.js (Beginner)</li>
              <li>Next.js (Beginner)</li>
            </ul>
          </li>
          <li>Blockchain
            <ul>
              <li>Bitcoin</li>
              <li>Ethereum</li>
              <li>IOST</li>
            </ul>
          </li>
          <li>AWS</li>
          <li>Firebase (Beginner)</li>
          <li>MySQL / MariaDB</li>
          <li>Redis</li>
          <li>Nginx</li>
          <li>Docker / Docker-Compose</li>
        </ul>
      </main>

      <footer>
        Copyright 2020 malan. All rights reserved.
      </footer>
    </div>
  )
}
