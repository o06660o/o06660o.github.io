const backgrounds = [
    // "/images/backgrounds/background1.jpg",
    "/images/backgrounds/Minecraft1.jpg",
    "/images/backgrounds/Minecraft2.jpg",
    "/images/backgrounds/Minecraft3.jpg",
  ];
  
// randomly select an image
const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

// setup the background
document.body.style.backgroundImage = `url(${randomBackground})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "50% 50%";
