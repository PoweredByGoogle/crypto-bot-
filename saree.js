// saree.js - Modular Clothing System
const outfitLayers = {
  "bollywood": [
    {name: "dupatta", durability: 40, tearSound: "silk_rip.mp3"},
    {name: "blouse", durability: 30, tearSound: "button_pop.mp3"},
    {name: "skirt", durability: 50, tearSound: "zipper_slow.wav"}
  ]
};

function seductionMinigame() {
  let currentLayer = 0;
  setInterval(() => {
    if (arousalMeter > 70) {
      removeLayer(outfitLayers.bollywood[currentLayer++]);
    }
  }, 15000); // Every 15s of flirting
}
