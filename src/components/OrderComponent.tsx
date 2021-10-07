import Image from "next/image";

import ILLUSTRATION_HERO from "../../public/illustration-hero.svg";

import AnnualComponent from "./AnnualComponent";

import styles from "./OrderComponent.module.scss";

const OrderComponent = () => {
  return (
    <div
      className={`${styles.OrderComponent} bg-white flex flex-col items-center justify-between text-center rounded-2xl pb-10 shadow-lg mx-4`}
    >
      <div className="container pb-4">
        <Image
          className="object-top rounded-t-2xl"
          src={ILLUSTRATION_HERO}
          alt="Illustration of Hero"
          layout="responsive"
        />
      </div>
      <h1 className="text-2xl md:text-3xl font-black my-2">Order Summary</h1>
      <h2 className="w-4/5 md:w-3/4 mx-4 my-4 font-medium text-neutral-desaturated-blue">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </h2>
      <AnnualComponent />
      <button
        className="w-10/12 md:w-3/4 bg-primary-bright-blue hover:bg-purple-300 text-white font-bold py-4 px-4 rounded-2xl shadow-lg drop-shadow-lg my-2"
        type="button"
      >
        Proceed to Payment
      </button>
      <a
        className="font-bold hover:text-black text-neutral-desaturated-blue tracking-tight drop-shadow-lg my-2"
        href="#"
      >
        Cancel Order
      </a>
    </div>
  );
};

export default OrderComponent;
