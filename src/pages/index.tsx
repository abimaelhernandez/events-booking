import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

export default function Home() {
  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      We are home
      <Head>
        <title> events app </title>
      </Head>
      <header>
        <nav>
          <Image src="" alt="main logo" />
          {/* <a href=""></a> */}
          <a href="about-us"> take me about </a>
          <a href="events"> to events </a>
        </nav>
      </header>

      <main>
        <div className="flex flex-direction-colum">
          <a href="">
            <h1 className="font-40">  events in londonm </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </a>

          <a href="">
            <h1> events in mexico </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </a>

          <a href="">
            <h1> events in brazil </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
