import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const ModalDonaciones = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const cerrar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={toggleModal}>Donaciones</button>
      {isOpen &&
        (windowWidth > 450 ? (
          <div className="modal" onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <FaTimes onClick={cerrar} style={{ color: 'white' }}/>
              <div>
                <h1>Yunka Atoq te necesita</h1>
              </div>
              <div className="bg-fondo2">
                <p className="my-4">
                  Estamos aceptando donaciones físicas para el cuartel de
                  bomberos. Cualquier contribución que puedan realizar, ya sea
                  en forma de equipos, herramientas, materiales, suministros u
                  otros recursos, será muy apreciada.
                </p>
                <p className="my-4">
                  {" "}
                  Si desea hacer una donación, puede ponerse en contacto con
                  nosotros a través de Whatsapp. Estaremos encantados de
                  coordinar una entrega o recogida que sea conveniente para
                  usted.
                </p>
              </div>
              <button className="btn hover:bg-[#D49105] hover:text-black rounded-full transition-all duration-500 ease-in-out">
                <BsWhatsapp size={30} className="mr-4"/>
                <a
                  href="https://wa.me/59162643328?text=Hola,%20me%20gustaria%20donar."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +591 62643328
                </a>
              </button>
            </div>

            <div className="modal-background"></div>
          </div>
        ) : (
          <div
            className="flex fixed z-10 left-0 top-0 w-full h-full justify-center items-center"
            onClick={toggleModal}
          >
            <div
              className="bg-[#0E385B] rounded-lg shadow-md z-20 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center items-center">
              {/* <FaTimes onClick={cerrar} className="absolute top-10 left-8"/> */}
              </div>
              <div>
                <div className="bg-[#0E385B] h-[25px] rounded-t-lg">

                </div>
                <h1 className="bg-yellow-50 h-full text-center font-nunito-sans font-bold leading-150 text-[#0E385B]">
                  Yunka Atoq te necesita
                </h1>
              </div>
              <div className="bg-fondo2 text-xs m-6">
                <p className="my-4 ">
                  Estamos aceptando donaciones físicas para el cuartel de
                  bomberos. Cualquier contribución que puedan realizar, ya sea
                  en forma de equipos, herramientas, materiales, suministros u
                  otros recursos, será muy apreciada.
                </p>
                <p className="my-4">
                  Si desea hacer una donación, puede ponerse en contacto con
                  nosotros a través de Whatsapp. Estaremos encantados de
                  coordinar una entrega o recogida que sea conveniente para
                  usted.
                </p>
              </div>
              <div className="flex justify-center pb-4">
                <button className="bg-yellow-50 text-[#0E385B] flex hover:bg-[#D49105] hover:text-black rounded-full transition-all duration-500 ease-in-out items-center px-6">
                  <BsWhatsapp size={30} className=""/>
                  <a
                    href="https://wa.me/59162643328?text=Hola,%20me%20gustaria%20donar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px]"
                  >
                    +591 62643328
                  </a>
                </button>
              </div>
            </div>
            <div className="modal-background"></div>
          </div>
        ))}
    </div>
  );
};

export default ModalDonaciones;
