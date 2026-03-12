import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { RiHomeFill } from "react-icons/ri";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";

interface MenuMobileProps {
  onClose: () => void;
}

export default function MenuMobile({ onClose }: MenuMobileProps) {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`h-auto sm:hidden transition-colors duration-300 ${
        scrolled
          ? "bg-[#EFF6FF] text-blue-900"
          : "bg-gray-900/50 backdrop-blur-md border border-white/20 text-white"
      }`}
    >
      <div className="flex flex-col h-full">
        <li className="flex flex-col px-8 py-4 gap-10 mt-5 mb-5 ">
          <Link
            to="/"
            onClick={onClose}
            className="flex justify-between gap-5"
          >
            <span className="text-2xl">Início</span>
            <RiHomeFill size={30} />
          </Link>
          <Link
            to="/loja"
            onClick={onClose}
            className="flex items-center justify-between gap-5"
          >
            <span className="text-2xl">Loja</span>
            <MdOutlineStoreMallDirectory size={30} />
          </Link>
          <Link
            to="/sobrenos"
            onClick={onClose}
            className="flex items-center justify-between gap-5"
          >
            <span className="text-2xl">Sobre</span>
            <FaBuildingUser size={30} />
          </Link>
          <Link
            to="/contato"
            onClick={onClose}
            className="flex items-center justify-between gap-5"
          >
            <span className="text-2xl">Contato</span>
            <RiContactsFill size={30} />
          </Link>
          <Link
            to="/carrinho"
            onClick={onClose}
            className="flex items-center justify-between gap-5"
          >
            <span className="text-2xl">Carrinho</span>
            <FaOpencart size={30} />
          </Link>
        </li>
      </div>
    </div>
  );
}