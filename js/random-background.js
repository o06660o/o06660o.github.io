const backgrounds = [
    "/images/backgrounds/Minecraft1.jpg",
    "/images/backgrounds/Minecraft2.jpg",
    "/images/backgrounds/Minecraft3.jpg",
    "/images/backgrounds/Minecraft4.jpg",
    "/images/backgrounds/Minecraft5.jpg",
    "/images/backgrounds/Minecraft6.jpg",
    "/images/backgrounds/Minecraft7.jpg",
    "/images/backgrounds/Minecraft8.jpg",
    "/images/backgrounds/Minecraft9.jpg",
    "/images/backgrounds/Minecraft10.jpg",
    "/images/backgrounds/Minecraft11.jpg",
    "/images/backgrounds/Minecraft12.jpg",
    "/images/backgrounds/Minecraft13.jpg",
    "/images/backgrounds/Minecraft14.jpg",
    "/images/backgrounds/Minecraft15.jpg",
    "/images/backgrounds/Minecraft16.jpg",
    "/images/backgrounds/Minecraft17.jpg",
    "/images/backgrounds/Minecraft18.jpg",
  ];
  
// randomly select an image
const selected = backgrounds[Math.floor(Math.random() * backgrounds.length)];

// setup the background
// document.body.style.backgroundImage = `url(${selected})`;
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundAttachment = "fixed";
// document.body.style.backgroundSize = "cover";
// document.body.style.backgroundPosition = "50% 50%";
document.addEventListener('DOMContentLoaded', () => {
  const img = new Image();
  img.src = selected;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${selected})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = '50% 50%';
  };
});
