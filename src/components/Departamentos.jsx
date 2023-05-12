import Administracion from "../assets/departamentos/Administracion.png";
import BusquedaYRescate from "../assets/departamentos/BusquedayRescate.png";
import Ciencia from "../assets/departamentos/Ciencia.png";
import Fuego from "../assets/departamentos/Fuego.png";
import SoporteVital from "../assets/departamentos/SoporteVital.png";
import { useState, useEffect } from "react";

const Departamentos = () => {
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
    <div name="especialidades">
      <div
        className={`${windowWidth < 1050 ? "px-2 pb-6" : "px-[300px] p-20"}`}
      >
        <div
          className={`${
            windowWidth ? "text-4xl" : "text-5xl"
          } p-10 font-light mb-20 text-[#0E385B]`}
        >
          | Especialidades
        </div>
        {/*Card 1 */}
        <div
          className={`rounded-tr-[45px] rounded-bl-[45px] flex ${
            windowWidth < 590 && "flex-col"
          }  border-4 border-[#0E385B]  items-center justify-center`}
        >
          <img
            src={BusquedaYRescate}
            className={`${
              windowWidth < 590 ? "flex-col w-2/5 mt-4" : "w-1/5 h-1/5"
            }`}
          />
          <div className="p-4 my-6 mx-3 overflow-y-scroll max-h-[150px]">
            <p>
              Es importante mantener actualizados los procedimientos y
              protocolos relacionados con la atención de heridos, estabilización
              y evacuación, de acuerdo a las normativas internacionales. En
              situaciones de emergencia de alto riesgo, la prioridad debe ser la
              vida de las personas involucradas. Por lo tanto, es fundamental
              evaluar y solicitar los insumos de rescate básico, intermedio y
              avanzado según sea la situación. Además, se deben elaborar planes
              operativos de emergencia en distintas zonas del país y mantener la
              instrucción y capacitación en temas de rescate SAR al día, de
              acuerdo a las normativas internacionales. En caso de un desastre
              nacional, se debe solicitar apoyo y trabajar conjuntamente con
              unidades locales y/o internacionales si es necesario. Es
              fundamental contar con personal altamente capacitado e instruido y
              apto para intervenir en emergencias a lo largo y ancho del país, e
              incluso internacionalmente si se requiere.
            </p>
          </div>
        </div>

        {/*Card  2 */}
        <div
          className={`rounded-tr-[45px] rounded-bl-[45px] flex ${
            windowWidth < 590 && "flex-col"
          } mt-8 border-4 border-[#0E385B] items-center justify-center`}
        >
          <img
            src={Administracion}
            className={`${
              windowWidth < 590 ? "flex-col w-2/5 mt-4" : "w-1/5 h-1/5"
            }`}
          />
          <div className="p-4 my-6 mx-3 overflow-y-scroll max-h-[150px]">
            <p>
              El personal de administración desempeña un papel fundamental en la
              gestión efectiva de una institución. Este rol se centra en cinco
              áreas principales de responsabilidad. En primer lugar, la
              planificación y organización de las operaciones diarias,
              incluyendo la asignación de tareas y la programación de reuniones
              y eventos. En segundo lugar, la gestión de recursos financieros,
              humanos y tecnológicos, con el objetivo de garantizar que la
              institución tenga los recursos necesarios y los utilice de manera
              eficiente. En tercer lugar, el control y seguimiento del desempeño
              de la institución, a través de la medición del rendimiento
              financiero, la revisión del desempeño del personal y el
              seguimiento de los procesos de trabajo. En cuarto lugar, la
              comunicación y coordinación entre los diferentes departamentos y
              niveles de la institución para asegurar que todos trabajen juntos
              hacia los mismos objetivos. Por último, la toma de decisiones
              importantes para la empresa basándose en información disponible y
              en las políticas y objetivos establecidos. La eficacia de la
              gestión depende en gran medida de la habilidad del personal de
              administración para equilibrar y cumplir estas responsabilidades
              de manera efectiva.
            </p>
          </div>
        </div>

        {/*Card 3 */}
        <div
          className={`rounded-tr-[45px] rounded-bl-[45px] flex ${
            windowWidth < 590 && "flex-col"
          } mt-8 border-4 border-[#0E385B] items-center justify-center`}
        >
          <img
            src={Ciencia}
            className={`${
              windowWidth < 590 ? "flex-col w-2/5 mt-4" : "w-1/5 h-1/5"
            }`}
          />
          <div className="p-4 my-6  mx-3 overflow-y-scroll max-h-[150px]">
            <p>
              La especialidad de Ciencia, Investigación y Tecnología se enfoca
              en mejorar la eficacia y seguridad de los bomberos voluntarios en
              situaciones de emergencia. Entre las principales áreas de trabajo
              se encuentra el desarrollo de aplicaciones que apoyen la toma de
              decisiones y mejoren las rutas de acceso, el ensamblaje de drones
              para capturar imágenes que permitan una mejor toma de decisiones,
              el seguimiento y monitoreo de los voluntarios en tierra para
              precautelar su seguridad, la optimización de estrategias de pronta
              respuesta, la elaboración de procesos y guías de emergencia, la
              investigación sobre los efectos de los desastres naturales en el
              medio, la implementación de herramientas para la integridad de los
              bomberos voluntarios, la elaboración de proyectos para asistencia
              humanitaria y apoyo a la población en general, la optimización de
              formas de mitigación de desastres, la mejora de los procesos de
              comunicación con patrullas desplegadas en emergencias a través del
              sistema de comando de incidentes, y el desarrollo de mecanismos de
              alerta temprana y post-desastre. En resumen, la especialidad de
              Ciencia, Investigación y Tecnología tiene como objetivo
              desarrollar y optimizar herramientas y procesos para garantizar la
              seguridad y eficacia de los bomberos voluntarios en situaciones de
              emergencia.
            </p>
          </div>
        </div>

        {/*Card 4 */}
        <div
          className={`rounded-tr-[45px] rounded-bl-[45px] flex ${
            windowWidth < 590 && "flex-col"
          } mt-8 border-4 border-[#0E385B] items-center justify-center`}
        >
          <img
            src={SoporteVital}
            className={`${
              windowWidth < 590 ? "flex-col w-2/5 mt-4" : "w-1/5 h-1/5"
            }`}
          />
          <div className="p-4 my-6 mx-3 overflow-y-scroll max-h-[150px]">
            <p>
              La especialidad de soporte vital tiene como responsabilidad
              principal mantener los procedimientos y protocolos actualizados
              para la atención de heridos, estabilización y evacuación, de
              acuerdo a las normativas internacionales. Además, interviene en
              situaciones de emergencias médicas de riesgo o impacto y evalúa y
              solicita insumos médicos para la estabilización de hospitales de
              campaña y evacuaciones móviles. La especialidad también se encarga
              de elaborar planes de emergencia y evacuación, considerando a
              personas vulnerables y de riesgo, y colaborar de forma inmediata
              en el sistema de comando de incidentes, cuando se requiera. En
              resumen, la especialidad de soporte vital es esencial en
              situaciones de emergencia médica, asegurando que se sigan los
              protocolos adecuados para la atención de heridos y la evacuación
              de personas, y trabajando en colaboración con el sistema de
              comando de incidentes para garantizar una respuesta rápida y
              eficaz.
            </p>
          </div>
        </div>

        {/*Card 5 */}
        <div
          className={`rounded-tr-[45px] rounded-bl-[45px] flex ${
            windowWidth < 590 && "flex-col"
          } mt-8 border-4 border-[#0E385B] items-center justify-center`}
        >
          <img
            src={Fuego}
            className={`${
              windowWidth < 590 ? "flex-col w-2/5 mt-4" : "w-1/5 h-1/5"
            }`}
          />
          <div className="p-4 my-6 mx-3 overflow-y-scroll max-h-[150px]">
            <p>
              La especialidad de fuego se encarga de atender las emergencias
              relacionadas con incendios forestales, estructurales, desastres
              con materiales peligrosos, incendios vehiculares y brindar apoyo
              en incendios aeroportuarios. Además, es responsable de desarrollar
              e implementar, en caso de ser necesario, el sistema de comando de
              incidentes, desplegar unidades a nivel nacional y mantener una
              estrecha relación de apoyo y trabajo con otras instituciones a
              nivel local y nacional. En resumen, la especialidad de fuego es
              fundamental en situaciones de emergencia relacionadas con
              incendios, trabajando en colaboración con otras instituciones para
              garantizar una respuesta rápida y eficaz en situaciones de riesgo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Departamentos;
