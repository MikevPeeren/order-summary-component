import Image from "next/image";

import MUSIC_ICON from "../../public/icon-music.svg";

const AnnualComponent = () => {
  return (
    <div className="flex flex-row items-center w-3/4 bg-neutral-pale-blue p-5 rounded-xl">
      <Image className="" src={MUSIC_ICON} alt="Music Icon" />
      <div className="flex flex-col px-4">
        <span className="text-black text-lg font-black">Annual Plan</span>
        <span className="text-neutral-desaturated-blue font-bold text-left">
          $59.99/year
        </span>
      </div>
      <a
        className="order-2 ml-auto underline text-primary-bright-blue font-black"
        href="#"
      >
        Change
      </a>
    </div>
  );
};

export default AnnualComponent;
