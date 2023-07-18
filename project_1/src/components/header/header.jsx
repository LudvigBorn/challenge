import { InstaIcon } from "./icons/insta-icon";
import { LinkedinIcon } from "./icons/linkedIn-icon";
import { SearchIcon } from "./icons/search-icon";
import { TwitterIcon } from "./icons/twitter-icon";

export function Header() {
  return (
    <header className=" bg-white px-[85px] pt-9 pb-6 flex justify-between">
      <div className=" text-black text-xl font-semibold leading-tight">
        HotCoffee
      </div>
      <div className="flex gap-3 items-center ">
        <SearchIcon />
        <div className="text-secodary-600 text-base leading-tight ">
          Search...
        </div>
      </div>
      <div className="flex gap-7">
        <nav className="text-base leading-tight flex gap-[30px]">
          <ul className="flex gap-[30px] items-center">
            <li>Home</li>
            <li>Articles</li>
          </ul>
        </nav>
        <div className="flex gap-8">
          <button>
            <InstaIcon />
          </button>
          <button>
            <TwitterIcon />
          </button>
          <button>
            <LinkedinIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
