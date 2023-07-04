import React from 'react';
import Gallery from './galeriassimulacro';
import end397 from "../assets/end397.png";
import front397 from "../assets/front397.png";

function Noticias() {
  return (
    <div className="SomosContainer">
      <div className="div1S">
        <h1 className="lg:text-4xl text-blue-900 font-bold font-sans md:text-4xl p-[15px] mt-2">| Noticias</h1>
      </div>
      <div className="div2S text-2xl mt-1">
        <h1>| Simulacro 30 / Jun / 2023</h1>
        <p className="justified-text">
          El objetivo principal de la realización de este simulacro general de emergencia en el aeropuerto es el de estar preparados para reducir a un mínimo las consecuencias de un accidente que involucre a una aeronave, objetivo dirigido principalmente a salvar vidas humanas y secundariamente a coadyuvar al restablecimiento de las actividades normales del aeropuerto en el menor tiempo posible.
        </p>
        <br />
        <strong>Finalidad</strong>
        <br />
        <p>
          La finalidad del simulacro de emergencia en el aeropuerto es la de garantizar lo siguiente:
        </p>
        <ul>
          <li>a) Evaluar la operatividad del plan de emergencia relativo a la atención de víctimas en masa.</li>
          <li>b) Motivar la coordinación inter-institucional en situaciones de desastre.</li>
          <li>c) Evaluar la capacitación del personal involucrado en el plan de emergencia.</li>
          <li>d) Valorar la capacidad de respuesta, coordinación y atención prestada por las agencias.</li>
        </ul>
        <br />
      </div>

      <div className="div3S text-2xl">
        <strong>Nuestro Trabajo</strong>
        <p>
          En la zona de triaje, los bomberos voluntarios desempeñaron un papel crucial como primeros respondedores en situaciones de emergencia. Su principal función fue evaluar y clasificar a las víctimas de acuerdo con la gravedad de sus lesiones, utilizando un sistema de triaje para identificar a aquellos que requieren atención médica inmediata.
        </p>
        <p>
          Trabajando en estrecha colaboración con los servicios médicos, aplicaron sus conocimientos en primeros auxilios y técnicas de rescate para brindar asistencia vital y estabilizar a los heridos antes de que puedan ser trasladados a un centro médico adecuado.
        </p>
        <p>
          Tomando en cuenta:
          <p>
            -
          </p>
        </p>
        <ul>
          <li>- La valentía</li>
          <li>- Destreza</li>
          <li>- Dedicación</li>
        </ul>
        <p>
          En la zona de triaje fueron fundamentales para garantizar la atención rápida y eficiente de las víctimas.
        </p>
        <br></br>
        <h1>| <strong>Conoce la Tarjeta de Triaje</strong></h1>
        <br></br>
        <div className="div4S">
        <table style={{ borderCollapse: 'collapse' }}>
          <tr>
            <td>
              <img src={front397} alt="Imagen adicional" style={{ width: '80%' }} />
            </td>
            <td>
              <p>
              <ul>
<li> - Los numeros arriba son secunciales para cada paciente</li>
<li> - La fecha que fue el evento</li>
<li> - El tiempo demorado</li>
<li> - El Genero</li>
<li> - La ubicacion del evento</li>
<li> - El hospital que fue trasladado</li>
</ul>
<p>&nbsp;</p>
<p>Adicionalmente tomar en cuenta los colores</p>
<p>Negro: Fallecido</p>
<p>Rojo: Atencion Inmediata | Evacuacion Inmediata</p>
<p>Amarillo: El herido puede esperar</p>
<p>Verde: El herido no es de gravedad y puede moverse por sus propios medios, no requiere ambulancia</p>
              </p>
            </td>
          </tr>
        </table>
        <br></br>
        <br></br>
        <table style={{ borderCollapse: 'collapse' }}>
          <tr>
            <td>
            <p>
              <ul>
<li> - Las esquinas es para recortar y dejar uno al hospital y otro a la ambulancia (registro)</li>
<li> - Debe marcar las partes del cuerpo donde se presenta alteraciones o lesiones</li>
<li> - El Pulso actual</li>
<li> - La Presion actual</li>
<li> - Si hubo necesidad de intravenosa</li>
<li> - Si hubo necesidad de intramuscular</li>
</ul>
<p>&nbsp;</p>
<p>Adicionalmente tomar en cuenta los colores</p>
<p>Negro: Fallecido</p>
<p>Rojo: Atencion Inmediata | Evacuacion Inmediata</p>
<p>Amarillo: El herido puede esperar</p>
<p>Verde: El herido no es de gravedad y puede moverse por sus propios medios, no requiere ambulancia</p>
              </p>
            </td>
            <td>
            <img src={end397} alt="Imagen adicional" style={{ width: '80%' }} />
            </td>
          </tr>
        </table>     
        <br></br>
      </div>
       <br></br>
      </div>
      <Gallery />
    </div>
    
  );
}

export default Noticias;
