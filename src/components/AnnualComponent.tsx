import Image from "next/image";

import MUSIC_ICON from "../../public/icon-music.svg";

const AnnualComponent = () => {
  return (
    <div className="flex flex-row items-center w-10/12 md:w-3/4 bg-neutral-pale-blue p-5 rounded-xl ">
      <Image src={MUSIC_ICON} alt="Music Icon" />
      <div className="flex flex-col px-4">
        <h1 className="text-black text-sm md:text-lg font-black">
          Annual Plan
        </h1>
        <span className="text-neutral-desaturated-blue font-bold text-sm md:text-base text-left">
          $59.99/year
        </span>
      </div>
      <a
        className="text-sm md:text-base order-2 ml-auto underline hover:no-underline hover:text-opacity-40 text-primary-bright-blue font-black"
        href="#"
      >
        Change
      </a>
    </div>
  );
};

export default AnnualComponent;
