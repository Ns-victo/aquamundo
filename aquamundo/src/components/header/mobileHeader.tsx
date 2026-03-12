import { LuFish } from "react-icons/lu";

import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";


export default function MobileHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 hidden md:block 
         
        transition-all duration-700
        ${scrolled
          ? "items-center bg-[#EFF6FF] shadow-md backdrop-blur-md h-25 "
          : "bg-transparent "}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 ">

        <div className="flex items-center gap-3">
          <LuFish
            className={`${scrolled ? "text-blue-800" : "text-[#5ca2b5]"} transition-colors`}
            size={42}
          />
          <h1
            className={`font-playfair text-3xl font-bold transition-colors ${
              scrolled ? "text-blue-900" : "text-white"
            }`}
          >
            Aqua Mundo
          </h1>
        </div>

        <nav>
          <ul className="flex gap-8">
            {["Início", "Loja", "Sobre nós", "Contato"].map(item => (
              <li key={item}>
                <a
                  className={`font-lato text-2xl cursor-pointer transition-colors ${
                    scrolled
                      ? "text-blue-900 hover:text-[#5ca2b5]"
                      : "text-white hover:text-[#5ca2b5]"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <FiMenu
          size={40}
          className={`cursor-pointer transition-colors ${
            scrolled
              ? "text-blue-900 hover:text-[#5ca2b5]"
              : "text-white hover:text-[#5ca2b5]"
          }`}
        />
      </div>
    </header>
  );
}