import { BsWhatsapp } from "react-icons/bs";


const SerParte = () => {
  return (
    <div className="bg-gradient-to-t from-[white]">
    <div className="h-full lg:mx-[200px]  ">
      <div className="text-5xl p-10 font-light text-black">| Te gustaría ser parte?</div>
      <div className="lg:mx-[200px]">
      <div className="lg:text-2xl mb-10  md: text-2xl p-4 text-black">
        Conviértete en bombero voluntario y conoce la satisfacción de ayudar a
        quienes más lo necesitan. Tu coraje y tus aportes siempre serán
        bienvenidos.
      </div>
      <div className="text-[#0E385B] lg:text-4xl pb-10 md: text-4xl p-4">
        Requisitos y Documentación
      </div>
      <div className="ml-4 text-[#0E385B] text-2xl mb-5">Para incorporarte a nuestro equipo es necesario:</div>
      <ul className="list-disc text-[#0E385B] text-2xl" >
        <li className="mb-2">Documento Nacional de Identidad.</li>
        <li className="mb-2">Certificado de estudios y/o trabajo.</li>
        <li className="mb-2">Antecedentes penales o policiales.</li>
        <li className="mb-2">Aprobar las fases de entrevista.</li>
        <li>Exámenes médicos, psicológico y de aptitud física.</li>
      </ul>
      </div>
        <div className="flex flex-col items-center align-center pt-10 text-[#0E385B]">
            <div className="lg:my-10  text text-2xl md: my-4 mx-11">Contactanos para recibir el formulario de inscripción</div>
            <div className="text-white px-10 bg-[#0E385B] mb-10 items-center align-center flex cursor-pointer hover:px-12 py-1 hover:bg-[#D49105] hover:text-black rounded-full transition-all duration-500 ease-in-out">
              <div className="pr-3"><BsWhatsapp /></div>
              <div>
              <a
              target="_blank"
              className="flex justify-between items-center w-full"
              href="https://wa.me/5492617234395?text=Hola, me podrían dar el formulario de inscripción?"
            >+591 62643328</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};
export default SerParte;
