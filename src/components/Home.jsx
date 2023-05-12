import { useEffect, useState } from "react";
import Bomberos1 from "../assets/yunkabom1.png";
import Bomberos2 from "../assets/yunkabom2.png";
import Bomberos3 from "../assets/yunkabom3.png";
import Bomberos4 from "../assets/yunkabom4.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDash, RxDotFilled } from "react-icons/rx";
import GoogleMaps from "./GoogleMaps";
import Form from "./Form";
import FacebookPosts from "./FacebookPosts";
import Departamentos from "./Departamentos";
import Formacion from "./Formacion";

const Home = () => {
  const fotos = [Bomberos1, Bomberos2, Bomberos3, Bomberos4];

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [indiceActual, setIndiceActual] = useState(0);

  const fotoAnterior = () => {
    const primeraFoto = indiceActual === 0;
    const nuevoIndice = primeraFoto ? fotos.length - 1 : indiceActual - 1;
    setIndiceActual(nuevoIndice);
  };

  const fotoSiguiente = () => {
    const ultimaFoto = indiceActual === fotos.length - 1;
    const nuevoIndice = ultimaFoto ? 0 : indiceActual + 1;
    setIndiceActual(nuevoIndice);
  };

  const irAFoto = (indice) => {
    setIndiceActual(indice);
  };

  return (
    <div className="pt-[120px]" name="home">
      <div className="w-full h-[700px] group">
        {/* Para darle un sombreado negro degrade */}
        <div className="absolute w-full h-[700px] bg-gradient-to-r from-black">
          <div className="absolute w-full p-20 ">
            {/* Flecha Izquierda */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={fotoAnterior} size={30} />
            </div>

            {/* Flecha Derecha */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={fotoSiguiente} size={30} />
            </div>

            {/* Carrusel */}
            {
              <div className="flex justify-center">
                <div className=" hidden group-hover:flex absolute lg:top-[120%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer md: top-[130%] ">
                  {fotos.map((foto, indice) => (
                    <div key={indice} className="text-2xl cursor-pointer">
                      <RxDash onClick={() => irAFoto(indice)} size={50} />
                    </div>
                  ))}
                </div>
              </div>
            }

            <div className="text-zinc-300 text-4xl italic text-center lg:mt-[150px] md: mt-[150px]">
              Bomberos Voluntarios
            </div>
            <div className="text-zinc-300 text-center text-[20px] italic mt-2">
              COCHABAMBA, BOLIVIA
            </div>
            {windowWidth > 526 && (
              <div className="text-zinc-300 text-center text-[20px] lg:mx-[300px] italic mt-4">
                Nuestro objetivo es ofrecer un servicio de calidad y eficiente a
                la comunidad, y estamos dispuestos a trabajar duro para
                lograrlo. Esperamos tener la oportunidad de colaborar con
                ustedes en el futuro y brindar nuestros servicios a la
                comunidad.
              </div>
            )}
          </div>
        </div>

        <img className="w-full h-full object-cover" src={fotos[indiceActual]} />
      </div>

      <div className="text-5xl text-center p-10 italic font-light">
        "Para que otros puedan vivir"
      </div>
      <div className="lg:px-[300px] md: pl-4">
        <div className="py-3">
          YUNKA ATOQ es una fundación de protección medioambiental que cuenta
          con un brazo operativo de primera respuesta ante emergencias y
          desastres naturales.
        </div>
        <div className="py-3">
          Nació en el año 2023, con el fin de abastecer las emergencias
          (incendios forestales, rescates, atenciones médicas) y el objetivo de
          capacitar a jóvenes voluntarios que de manera desinteresada y
          altruista, arriesguen sus vidas para salvaguardar así, las de otros
          seres vivos.
        </div>
        <div className="py-3">
          Bajo el lema "Para que otros puedan vivir”, servimos al pueblo
          Boliviano del cual nacimos, devolviéndole a nuestra tierra un poco de
          todo lo que nos brindó.
        </div>
      </div>
      <Departamentos />
      <Formacion />
      <div className="parentFaceForm">
        <div className="divF1">
          <FacebookPosts />
        </div>
        <div className="divF2">
          <Form />
        </div>
      </div>
      <GoogleMaps />
    </div>
  );
};
export default Home;
