import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import OrderComponent from "../src/components/OrderComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Order Summary Component</title>
        <meta name="description" content="Order Summary Component" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <div className="h-screen w-screen flex items-center justify-center z-10">
          <OrderComponent />
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
