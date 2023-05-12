import React, { useEffect, useState } from 'react'
import Foto from "../assets/yunkabom5.png"
import Rectangulo from "../assets/Rectangle-189.png"

const Directiva = () => {

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
        <div className=' max-h-[100vh] max-w-full parentDirect'>
            <div className='div10D'>
                <img className='absolute z-[-1] img' src={Rectangulo} alt="rectangulo" />
            </div>
            <div className="div1D ">
                <h1 className={`${windowWidth < 729 ? ' text-center text-4xl -mt-5 ml-3 ' : 'bg-fondo1 text-center text-4xl -mt-5 ml-[40px] w-[155px]'} `} >Directiva</h1>
            </div>
            <div className="div3D flex flex-col  items-center ">
                <div className="text-white bg-fondo2 div5D my-2 text-center text-2xl h-[161px] w-[580px] flex flex-col items-center justify-center">
                    <p>"Nunca dejamos a nadie atrás"</p>
                    <p>Claudia Hoepfner Loayza</p>
                    <p>Jefe Dpto de Ciencia , Investigacion y Tecnologia</p>
                </div>
                <div className="text-white bg-fondo2 div6D my-2 text-center text-2xl h-[161px] w-[580px] flex flex-col items-center justify-center">
                    <p>"Siempre listos para ayudar"</p>
                    <p>Claudia Ayala Campos</p>
                    <p>Jefe Dpto de Logistica</p>
                </div>
                <div className="text-white bg-fondo2 div7D my-2 text-center text-2xl h-[161px] w-[580px] flex flex-col items-center justify-center">
                    <p>"El fuego no espera, actúa rápido"</p>
                    <p>David rojas Cruz</p>
                    <p>Jefe de Operaciones</p>
                </div>
                <div className="text-white bg-fondo2 div8D my-2 text-center text-2xl h-[161px] w-[580px] flex flex-col items-center justify-center">
                    <p>“Valentía, honor y sacrificio"</p>
                    <p>Pablo Villazon Valdez</p>
                    <p>Jefe de Capacitacion</p>
                </div>
                <div className="text-white bg-fondo2 div9D my-2 text-center text-2xl h-[161px] w-[580px] flex flex-col items-center justify-center">
                    <p>“No somos héroes, hacemos lo que es justo"</p>
                    <p>Lenny Rivero Callejas</p>
                    <p>Jefe de Personal</p>
                </div>
            </div>
            <div className='div2D ml-16 mt-[5px]'>
                <img className='div4D' src={Foto} alt="bomberos" />
            </div>
        </div>
    )
}

export default Directiva
/* <div className=' max-h-full max-w-full '>
            <div className="text-center text-4xl  absolute left-1/2  ">
            <h1 className='bg-fondo' >Directiva</h1>
            </div>
            <div className="flex justify-center align-center gap-[250px] mb-[300px] ml-[165px] relative">
                <img className='absolute z-[-1] img' src={Rectangulo} alt="rectangulo" />
                
                <div className="flex flex-col w-[580px] h-[888px] justify-between my-[155px] ">
                    
                    <div className="text-white bg-blue-800 left-[135px] rounded text-center p-7">
                        <p>"Nunca dejamos a nadie atrás"</p>
                        <p>Carlos Andres Azcarraga Esquivel</p>
                        <p>Presidente de Yunca Atoq</p>
                    </div>
                    <div className="text-white bg-blue-800  left-[135px] rounded text-center p-7">
                        <p>"Nunca dejamos a nadie atrás"</p>
                        <p>Carlos Andres Azcarraga Esquivel</p>
                        <p>Presidente de Yunca Atoq</p>
                    </div>
                    <div className="text-white bg-blue-800  left-[135px] rounded text-center p-7">
                        <p>"Nunca dejamos a nadie atrás"</p>
                        <p>Carlos Andres Azcarraga Esquivel</p>
                        <p>Presidente de Yunca Atoq</p>
                    </div>
                    <div className="text-white bg-blue-800  left-[135px] rounded text-center p-7">
                        <p>"Nunca dejamos a nadie atrás"</p>
                        <p>Carlos Andres Azcarraga Esquivel</p>
                        <p>Presidente de Yunca Atoq</p>
                    </div>
                    <div className="text-white bg-blue-800  left-[135px] rounded text-center p-7">
                        <p>"Nunca dejamos a nadie atrás"</p>
                        <p>Carlos Andres Azcarraga Esquivel</p>
                        <p>Presidente de Yunca Atoq</p>
                    </div>
                </div>
                <div>
                    <img className='z-index-1 mt-[150px]' src={Foto} alt="bomberos" />
                </div>
            </div>
        </div> */