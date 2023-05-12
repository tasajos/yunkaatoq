import Auxilios from "../assets/PrimerosAuxilios.png";
import Brigadas from "../assets/Brigadas.png";
import Evacuacion from "../assets/Evacuacion.png";
import Incendio from "../assets/Incendio.png";
import { useEffect, useState } from "react";

const Formacion = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formacion = [
    {
      logo: Auxilios,
      titulo: "Primeros Auxilios",
    },
    {
      logo: Brigadas,
      titulo: "Formación de Brigadas",
    },
    {
      logo: Evacuacion,
      titulo: "Evacuación",
    },
    {
      logo: Incendio,
      titulo: "Lucha Contra Incendios",
    },
  ];

  return (
    <div
      className={`${
        windowWidth < 470
          ? "bg-[#023763] text-white py-14"
          : "bg-[#023763] lg:h-[400px] text-white flex items-center px-20 mb-20 md:flex flex-wrap py-3"
      } `}
    >
      {formacion.map((el, indice) => (
        <div
          key={indice}
          className={`${
            windowWidth < 470
              ? "flex-1 border-2 rounded-lg m-4 bg-[#052B4A]"
              : "flex-1 border-2 rounded-lg mr-2 mx-10 bg-[#052B4A] md: m-2"
          }`}
        >
          <img src={el.logo} alt="" className="mx-auto block p-2 mb-20 mt-10" />
          <div
            id="hola"
            className={`bg-[#C28507] border-t-2 h-14 flex justify-center items-center ${windowWidth}text-xl font-bold`}
          >
            {el.titulo}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Formacion;
