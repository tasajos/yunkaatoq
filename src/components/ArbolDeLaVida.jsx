import ArbolVida from "../assets/ArbolVida.png";
import FuegoBlanco from "../assets/FuegoBlanco.png";
import Tierra from "../assets/Tierra.png";
import Gota from "../assets/Gota.png";
import Aire from "../assets/Aire.png";
import { useEffect, useState } from "react";

const ArbolDeLaVida = () => {

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
    <div className="mb: bg-[#0E385B] bg-opacity-50 pb-4 border-white flex flex-wrap">
      <div className="h-full text-white  lg:mx-[300px] md:mx-0">
        <div className="text-4xl p-10 font-bold">
          | Los elementos del árbol de la vida
        </div>
        <div className="text-center lg:text-2xl mb-10 md:text-xl p-4">
          Todas estas fuerzas esenciales en nuestro planeta son las que permiten
          dar vida al árbol.
        </div>
        <div className="flex items-center justify-center">
        <div className="image-container">
          <img src={ArbolVida} alt="" className="mx-auto block " />
        </div>

        </div>


        <div className={`${windowWidth < 536 ? 'grid grid-cols-2 grid-rows-2 gap-4 mx-2 mb-6' : 'flex mb-10 mt-8'}`}>

          {/*  Crad */}
          <div className={`div1A flex-1 border-2 rounded-lg ${windowWidth > 526 && 'mr-2 flex flex-col ml-2' } p-2 h-[300px] hover:bg-black/40 transition-colors ease-in-out duration-500`}>
            <div className="text-center p-2 text-2xl flex-1">FUEGO</div>
            <img src={FuegoBlanco} alt="" className="mx-auto block p-2 flex-1" />
            <div className={`text-center p-2 flex-1 ${windowWidth < 599 && windowWidth > 535 && 'text-[13px]'}`}>
              La luz solar es la que permite que el árbol pueda nacer y crecer
            </div>
          </div>
          {/*  Crad */}
          <div className={`div2A flex-1 border-2 rounded-lg ${windowWidth > 526 && 'mr-2 flex flex-col' } p-2 h-[300px] hover:bg-black/40 transition-colors ease-in-out duration-500`}>
            <div className="text-center p-2 text-2xl flex-1">AGUA</div>
            <img src={Gota} alt="" className="mx-auto block p-2 flex-1" />
            <div className={`text-center p-2 flex-1 ${windowWidth < 599 && windowWidth > 535 && 'text-[13px]'}`}>
              La luz solar es la que permite que el árbol pueda nacer y crecer
            </div>
          </div>
          {/*  Crad */}
          <div className={`div3A flex-1 border-2 rounded-lg ${windowWidth > 526 && 'mr-2 flex flex-col' } p-2 h-[300px] hover:bg-black/40 transition-colors ease-in-out duration-500`}>
            <div className="text-center p-2 text-2xl flex-1">TIERRA</div>
            <img src={Tierra} alt="" className="mx-auto block p-2 flex-1" />
            <div className={`text-center p-2 flex-1 ${windowWidth < 599 && windowWidth > 535 && 'text-[13px]'}`}>
              La luz solar es la que permite que el árbol pueda nacer y crecer
            </div>
          </div>
          {/*  Crad */}
          <div className={`div4A flex-1 border-2 rounded-lg ${windowWidth > 526 && 'mr-2 flex flex-col' } p-2 h-[300px] hover:bg-black/40 transition-colors ease-in-out duration-500`}>
            <div className="text-center p-2 text-2xl flex-1">AIRE</div>
            <img src={Aire} alt="" className="mx-auto block p-2 flex-1" />
            <div className={`text-center p-2 flex-1 ${windowWidth < 599 && windowWidth > 535 && 'text-[13px]'}`}>
              La luz solar es la que permite que el árbol pueda nacer y crecer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArbolDeLaVida;
