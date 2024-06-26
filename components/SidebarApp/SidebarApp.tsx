import React, { useState } from "react";
import Image from "next/image";
import bag from "./assets/bag.svg";
import cart from "./assets/cart.svg";
import dash from "./assets/dash.svg";
import { motion } from "framer-motion";
interface SidebarAppProps {
  setActivePage: (page: string) => void;
}

const SidebarApp: React.FC<SidebarAppProps> = ({ setActivePage }) => {
  const [activeIcon, setActiveIcon] = useState<number>(0);

  const handleIconClick = (index: number) => {
    setActiveIcon(index);
    switch (index) {
      case 0:
        setActivePage("dashboard");
        break;
      // O case 1 foi removido
      case 2:
        setActivePage("paginaTres");
        break;
      default:
        setActivePage("dashboard");
    }
  };

  return (
    <aside className="bg-black text-white flex flex-col items-center py-4 justify-center">
      <div className="text-center">
        <div
          className={`mb-2  cursor-pointer rounded-full p-2 h-16 w-16 flex justify-center transition items-center ${
            activeIcon === 0 ? "bg-[#3AFF4E]" : "bg-[#1d1d1d]"
          }`}
          onClick={() => handleIconClick(0)}
        >
          <Image
            src={dash}
            alt="Dashboard icon"
            width={32}
            height={32}
            style={{ filter: activeIcon === 0 ? "invert(1)" : "invert(0)" }}
          />
        </div>{" "}
        <p
          className={`transition mb-2 ${
            activeIcon === 0 ? "text-white font-medium" : "text-neutral-500"
          }`}
        >
          Home
        </p>
      </div>

      <div className="text-center">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.15}}
          transition={{ repeat: 21, repeatType:"mirror", duration: 0.4 }}
          className={`mt-4  cursor-pointer mb-2 rounded-full p-2 h-16 w-16 flex justify-center items-center ${
            activeIcon === 2 ? "bg-[#3AFF4E]" : "bg-[#1d1d1d]"
          }`}
          onClick={() => handleIconClick(2)}
        >
          <Image
            src={bag}
            alt="Pagina Tres icon"
            width={32}
            height={32}
            style={{ filter: activeIcon === 2 ? "invert(1)" : "invert(0)" }}
          />
        </motion.div>
        <p
          className={`transition ${
            activeIcon === 2 ? "text-white font-medium" : "text-neutral-500"
          }`}
        >
          Buy
        </p>
      </div>
    </aside>
  );
};

export default SidebarApp;
