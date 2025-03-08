import { useState, useEffect, useRef } from "react";

const BackgroundSlider = () => {
  const images = [
    "../src/assets/unsplash.jpg",
    "./src/assets/alex.jpg",
    "./src/assets/alex2.jpg",
    "./src/assets/senad.jpg",
    "./src/assets/urbain.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true); // Contrôler l'opacité
  const backgroundRef = useRef(null); // Référence à l'élément contenant l'image de fond

  useEffect(() => {
    const preloadImages = (images) => {
      images.map((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    // Applique l'image de fond avec un léger délai pour la transition de fondu
    preloadImages(images);
    
    if (backgroundRef.current) {
      backgroundRef.current.style.backgroundImage = `url(${images[currentImageIndex]})`;
      backgroundRef.current.style.transition = "opacity 1s ease-in-out"; // Transition d'opacité
    }

    const interval = setInterval(() => {
      setFade(false); // Déclenche la transition de l'opacité (fondu)
      setTimeout(() => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
        setFade(true); // Reviens à une opacité de 1 (visible) après le changement d'image
      }, 2000); // Attends la fin de la transition avant de changer d'image (2 secondes)

    }, 5000); // Change l'image toutes les 5 secondes

    return () => clearInterval(interval); // Nettoie l'intervalle quand le composant est démonté
  }, [currentImageIndex]);

  return (
    <div
      ref={backgroundRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: fade ? 1 : 0, // L'opacité change en fonction du state
        zIndex: -1, // Placer l'image en arrière-plan
      }}
    />
  );
};

export default BackgroundSlider;
