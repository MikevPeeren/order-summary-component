import Image from "next/image";

import ILLUSTRATION_HERO from "../../public/illustration-hero.svg";

import AnnualComponent from "./AnnualComponent";

const OrderComponent = () => {
  return (
    <div className="h-3/4 w-1/4 bg-white flex flex-col items-center justify-between text-center rounded-2xl pb-14 shadow-lg">
      <Image
        className="object-top rounded-t-2xl"
        src={ILLUSTRATION_HERO}
        alt="Illustration of Hero"
      />
      <h1 className="text-3xl font-black">Order Summary</h1>
      <h2 className="w-3/4 font-medium text-neutral-desaturated-blue">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </h2>
      <AnnualComponent />
      <button
        className="w-3/4 bg-primary-bright-blue hover:neutral-dark-blue text-white font-bold py-4 px-4 rounded-2xl shadow-lg"
        type="button"
      >
        Proceed to Payment
      </button>
      <a
        className="font-bold hover:font-black text-neutral-desaturated-blue tracking-tight drop-shadow-lg"
        href="#"
      >
        Cancel Order
      </a>
    </div>
  );
};

export default OrderComponent;
