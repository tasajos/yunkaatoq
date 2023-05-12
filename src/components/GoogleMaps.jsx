import { useEffect, useState } from "react";

const GoogleMaps = () => {
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
    <div className={`flex justify-center items-center p-10 ${windowWidth < 526 && 'pt-64'}`}>
     {/* <div className="mx-[300px] mt-20"> */}
      {/* <div className="bg-red-400 mx-[300px] mb-8 rounded-lg"> */}
          <iframe
            className="rounded-lg m-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93917.93648426073!2d-66.21877876378832!3d-17.402143315672685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373e0d9e4ab27%3A0xa2719ae9532c3e65!2sCochabamba%2C%20Bolivia!5e1!3m2!1ses!2sar!4v1680203861790!5m2!1ses!2sar"
            width="840"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      {/* </div>
    </div> */}
    </div>
  );
};
export default GoogleMaps;
