import React from 'react';
import './galeria.css';
import sim from "../assets/sim.jpg";
import sim2 from "../assets/sim2.jpg";
import sim3 from "../assets/sim3.jpg";


function Gallery() {
  const images = [
    { id: 1, url: sim, caption: 'Simulacro' },
    { id: 2, url: sim2, caption: 'Simulacro' },
    { id: 3, url: sim3, caption: 'Evento' },
   
    


    // Agrega más objetos de imagen según sea necesario
  ];

  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="image-containers">
          <img src={image.url} alt={image.caption} className="image" />
          <p className="caption">{image.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
