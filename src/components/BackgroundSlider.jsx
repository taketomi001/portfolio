import { useState, useEffect } from "react";
import Img1 from '../assets/unsplash.jpg';
import Img2 from '../assets/alex.jpg';
import Img3 from '../assets/alex2.jpg';
import Img4 from '../assets/senad.jpg';
import Img5 from '../assets/urbain.jpg';


const BackgroundSlider = () => {
  const images = [Img1, Img2, Img3, Img4, Img5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const preloadImages = (images) => {
      images.map((image) => {
        const img = new Image();
        img.src = image;
      });
    };


    preloadImages(images);
    document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.height = "100vh"; 
    document.body.style.transition = "background-image 1s ease-in-out";
    document.body.style.margin = 0;

    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [currentImageIndex, images]); 

  return null; 
};

export default BackgroundSlider;
