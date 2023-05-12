import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Form = () => {
  const [alerta, setAlerta] = useState(false);
  const location = useLocation().pathname

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sweetAlert = () => {
    setAlerta(!alerta);
  };

  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload(); // refresca la aplicación para que se borre el form (medio pelo)
    }, 1000);
  };

  return (
    <div className={`${location === '/nosotros' ? 'pb-[100px] bg-white' : 'h-[500px] mb-8'}`} name="form" id="form">
      <form
        method="POST"
        action="https://getform.io/f/c66de937-64e0-4f48-bf27-9798f99aebaf"
        className=""
      >
        <h1 className={`text-3xl text-center p-20 italic font-semibold ${windowWidth < 526 && 'text-black'}`}>
          ¿Tienes alguna duda? ¿Quieres saber más sobre nosotros o incorporarte a
          nuestro equipo?
        </h1>
        <div className="flex flex-col">
          <input
            className=" backgroundInput my-2 mx-[100px] p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none rounded-t-lg"
            type="text"
            placeholder="Nombre y Apellido"
            name="name"
          />
          <input
            className="mx-[100px] backgroundInput my-2 p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none"
            type="text"
            placeholder="Ciudad"
            name="city"
          />
          <input
            className="mx-[100px] backgroundInput my-2 p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="mx-[100px] backgroundInput my-2 p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none"
            type="number"
            placeholder="Celular"
            name="phone"
          />

          {/* Para evitar Spams */}
          <input name="_gotcha" type="hidden" className="none!important" />
          {/*  */}

          <textarea
            className="mx-[100px] backgroundInput my-2 p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none rounded-lg"
            name="message"
            rows="3"
            placeholder="Mensaje"
          ></textarea>
          <div className="flex justify-center items-center">
            <button
              onClick={refreshPage}
              className="text-white mt-5 px-10 bg-[#0E385B] hover:px-20 hover:bg-[#D49105] hover:text-black rounded-full transition-all duration-500 ease-in-out "
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
