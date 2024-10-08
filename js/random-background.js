const backgrounds = [
    "/images/backgrounds/1.webp",
    "/images/backgrounds/2.webp",
    "/images/backgrounds/3.webp",
    "/images/backgrounds/4.webp",
    "/images/backgrounds/5.webp",
    "/images/backgrounds/6.webp", 
    "/images/backgrounds/7.webp",
    "/images/backgrounds/8.webp",
    "/images/backgrounds/9.webp",
    "/images/backgrounds/10.webp",
    "/images/backgrounds/11.webp",
    "/images/backgrounds/12.webp",
    "/images/backgrounds/13.webp",
    "/images/backgrounds/14.webp",
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
