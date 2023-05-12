import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import YunkaLogo from "../assets/YunkaLogo.png";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ModalDonaciones from "./ModalDonaciones";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* 1era Seccion */}
      <div
        className={`${
          windowWidth < 693
            ? "bg-[#0E385B] flex flex-col items-center text-[#CACACA] py-4"
            : "bg-[#0E385B] w-full h-[80px] items-center text-white flex justify-center"
        } `}
      >
        <div
          className={`${
            windowWidth < 693
              ? "flex items-center"
              : "flex items-center pr-20 mx-20"
          } `}
        >
          <div
            className={`${
              windowWidth < 693 ? "pr-2 text-[20px]" : "pr-2 text-[30px]"
            }`}
          >
            <FiMail />
          </div>
          <div className={`${windowWidth < 693 ? "" : "text-[20px]"}`}>
            <a href="mailto:informaciones@yunkaatuq.org" target="a_blank">
              informaciones@yunkaatuq.org
            </a>
          </div>
        </div>
        <div className="flex items-center mx-20">
          <div
            className={`${
              windowWidth < 693 ? "pr-2 text-[20px]" : "pr-2 text-[30px]"
            }`}
          >
            <BsTelephone />
          </div>
          <div className="text-[20px]">
            <a href="tel:+591 62643328">+591 62643328</a>
          </div>
        </div>
      </div>

      {/* 2da Seccion */}
      <div className="bg-[#0E385B] w-full h-[280px] border-t-4 text-white">
        {windowWidth > 693 && (
          <ul className="flex justify-center text-[#CACACA] mt-5">
            <li>
              <Link
                to="/nosotros"
                onClick={() => scroll.scrollToTop({ duration: 500 })}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link>
                <ModalDonaciones />
              </Link>
            </li>
            <li>
              <a
                href="../src/assets/PENSUM DE MATERIAS - YA - Pensum.pdf"
                target="_blank"
              >
                Capacitaciones
              </a>
            </li>
            <li>
              <a href="#form">
                <li>Incorpórate</li>
              </a>
            </li>
          </ul>
        )}

        <div className="text-center text-[#CACACA] mt-10">
          Yunka Atoq - Bomberos Voluntarios
        </div>
        <div className="text-center text-[#CACACA] mt-1">
          Cochabamba, Bolivia
        </div>
        <div className="flex justify-center">
          <img className="w-[120px]" src={YunkaLogo} />
        </div>
        <div className="flex h-14 bg-[#0E385B] ">
          <div className="bg-[#C28507] flex-1 rounded-tr-full"></div>
          {windowWidth < 693 ? (
            <div className="bg-[#0E385B] flex-1 flex justify-center mt-4 text-zinc-300">
              Grupo SRS ®
            </div>
          ) : (
            <div className="bg-[#0E385B] flex-1 flex justify-center mt-4 text-zinc-300">
              Creado por Grupo SRS ®
            </div>
          )}
          <div className="bg-[#C28507] flex-1 rounded-tl-full"></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
