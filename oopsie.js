// oopsie.js - "Accidental" Exposure System
function triggerMalfunction() {
  const chance = Math.random() * (playerTipAmount / 10);
  if (chance > 0.8) {
    playSound("gasp_shock.wav");
    document.getElementById("dupatta").style.transform = "translateY(100px)";
    setTimeout(() => {
      document.getElementById("navel").classList.add("glow");
    }, 500); // The famous Bollywood "sparkle" effect
  }
}
