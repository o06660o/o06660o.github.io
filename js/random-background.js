const backgrounds = [
    "/images/backgrounds/1.png",
    "/images/backgrounds/2.png",
    "/images/backgrounds/3.png",
    "/images/backgrounds/4.png",
    "/images/backgrounds/5.png",
    "/images/backgrounds/6.png", 
    "/images/backgrounds/7.png",
    "/images/backgrounds/8.png",
    "/images/backgrounds/9.png",
    "/images/backgrounds/10.png",
    "/images/backgrounds/11.png",
    "/images/backgrounds/12.png",
    "/images/backgrounds/13.png",
    "/images/backgrounds/14.png",
    "/images/backgrounds/15.png",
  ];
  
// randomly select an image
const selected = backgrounds[Math.floor(Math.random() * backgrounds.length)];

// setup the background
// document.body.style.backgroundImage = `url(${selected})`;
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundAttachment = "fixed";
// document.body.style.backgroundSize = "cover";
// document.body.style.backgroundPosition = "50% 50%";

document.addEventListener("DOMContentLoaded", () => {
  const img = new Image();
  img.src = selected;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${selected})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "50% 50%";
  };
});
