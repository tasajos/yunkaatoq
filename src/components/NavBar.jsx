import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import YunkaLogo from "../assets/YunkaLogo.png";
import { animateScroll as scroll } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalDonaciones from "./ModalDonaciones";



const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nosotros, setNosotros] = useState(false);
  const location = useLocation().pathname;
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ejecutador = () => {
    handleClick();
    scroll.scrollToTop({ duration: 500 });
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 150 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full items-center z-10">
      {/* Navbar 1era Secciom */}
      <div
        id="top"
        className={`bg-[#0E385B] w-full h-[70px] flex justify-between items-center text-3xl font-bold `}
      >
        <div className={`pl-10 flex-1`}>
          <Link to="home" smooth="true" duration={500}>
            <div
              className={`${
                windowWidth < 426
                  ? "text-white text-[20px]"
                  : "text-white cursor-pointer"
              } `}
              // onClick={handleNavClick}
            >
              <Link
                to={"/"}
                onClick={() => scroll.scrollToTop({ duration: 500 })}
              >
                YUNKA ATOQ
              </Link>
            </div>
          </Link>
        </div>

        <div className=" flex flex-1 justify-center ">
          <Link to="/" smooth="true" duration={500} className="">
            <img
              src={YunkaLogo}
              className={`${
                isScrolled
                  ? "w-[100px] pt-[40px] transition-all duration-400 ease-in-out hover:w-[110px] hover:pt-[50px]"
                  : "w-[180px] pt-40 transition-all duration-400 ease-in-out hover:w-[200px]"
              } cursor-pointer`}
              onClick={() => scroll.scrollToTop({ duration: 500 })}
            />
          </Link>
        </div>

        <div className="flex-1 text-white pr-10 hidden md:block">
          <ul className="flex justify-end">
            <li className="h-10 w-16">
              <a target="_blank" href="tel:+59162643328">
                <BsTelephone className="hover:text-[40px] transition-all duration-400 ease-in-out" />
              </a>
            </li>
            <li className="h-10 w-16">
              <a
                target="_blank"
                href="https://wa.me/59162643328?text=Hola,%20me%20podrían%20dar%20más%20información%20sobre%20la%20incorporación?"
              >
                <BsWhatsapp className="hover:text-[40px] transition-all duration-400 ease-in-out" />
              </a>
            </li>
            <li className="h-10 w-16">
              <a target="_blank" href="https://www.facebook.com/yunkabo">
                <AiOutlineFacebook className="hover:text-[40px] transition-all duration-400 ease-in-out" />
              </a>
            </li>
            <li className="h-10 w-16">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/yunkabo/"
              >
                <AiOutlineLinkedin className="hover:text-[40px] transition-all duration-400 ease-in-out" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar 2da Seccion */}
      {/* Primera opcion */}
      <div className="flex w-full flex-row bg-[#0E385B] h-[50px] items-center border-y-4 text-white text-lg">
        {/* Hamburguer */}
        <div onClick={handleClick} className="md:hidden z-10 ml-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0E385B] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link to="/nosotros" onClick={ejecutador}>
              Nosotros
            </Link>
          </li>
    


          <li className="py-6 text-4xl">
            <Link>
              <ModalDonaciones />
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <a
              href="/assets/PENSUMYA.pdf"
              target="_blank"
            >
              Malla Curricular
            </a>
          </li>
          {location !== "/nosotros" ?  <li className="py-6 text-4xl" onClick={handleClick}>
            <a href="#form">Incorpórate</a>
          </li> :           <li className="py-6 text-4xl" onClick={handleClick}>
            <a href="#form">Incorpórate</a>
          </li> }

          <li className="py-6 text-4xl">
            <a
              target="_blank"
              className="flex justify-between items-center w-full"
              href="https://wa.me/59162643328?text=Hola, me podrían dar más información sobre la incorporación?"
            >
              WhatsApp
            </a>
          </li>
          <li className="py-6 text-4xl">
            <a
              className="flex justify-between items-center w-full"
              target="_blank"
              href="https://www.linkedin.com/company/yunkabo/"
            >
              LinkedIn
            </a>
          </li>
          <li className="py-6 text-4xl">
            <a
              className="flex justify-between items-center w-full"
              href="tel:59170776212"
            >
              Llámanos
            </a>
          </li>
        </ul>

        <div className="flex-1 px-20 ">
          <ul className="flex justify-between">
            <Link
              to="/nosotros"
              className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out hidden md:block"
              onClick={() => scroll.scrollToTop({ duration: 500 })}
            >
              Nosotros
            </Link>
            
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out hidden md:block">
              <ModalDonaciones />
            </li>
          </ul>
        </div>
       
        <div className="flex-1 px-20">
          <ul className="flex justify-between">
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out hidden md:block">
              <a
                //href="../src/assets/PENSUMYA.pdf"
                href="/assets/PENSUMYA.pdf"
                target="_blank"
              >
                Malla Curricular
              </a>
            </li>
            {location !== "/nosotros" ? (
              <a
                href="#form"
                className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out hidden md:block"
              >
                <li>Incorpórate</li>
              </a>
            ) : (
              <a
                href="#form"
                className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out hidden md:block"
              >
                <li>Incorpórate</li>
              </a>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
