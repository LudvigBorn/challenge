//import { CoffeeIcon } from "./icons&img/coffee-icon";

// color: #000;
// font-family: Inter;
// font-size: 60px;
// font-style: normal;
// font-weight: 700;
// line-height: normal;

import coffeeIcon from "./image/image_6.png";
import croods from "./image/croods_1.png";

export function Banner() {
  return (
    <div className=" min-h-[467px] flex  justify-center items-center">
      <div className="px-12">
        <div className="text-black text-6xl leading-tight font-bold block max-w-[354px] relative">
          Make better coffee
          <img
            src={coffeeIcon}
            alt="coffeeIcon"
            className="w-20 h-auto absolute top-[61px] left-[195px]"
          />
        </div>
        <div className="leading-tight text-3xl text-secodary-700 mt-5">
          why learn how to blog?
        </div>
      </div>
      <div className="px-12 max-w-[476px] h-auto">
        <img src={croods} alt="" />
      </div>
    </div>
  );
}
