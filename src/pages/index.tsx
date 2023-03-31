import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen w-screen">
          <Navbar/>
          {/* require image-based landing, information with timeline and explanation, footer */}
          {/* authentication: simple modal form for signup and login */}
          {/* tile-based dashboard form with top, tile for current orders, previous orders, deals, new order button */}
      </div>
    </>
  );
};

export default Home;
