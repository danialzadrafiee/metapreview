import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import mapboxgl from "mapbox-gl";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { Threebox } from "threebox-plugin";
import { MAPBOX } from "@/story/constants";
import "/src/css/main.scss";
import { azadiModel } from "@/models/azadi";


const mapboxConfig = new mapboxgl.Map({
  accessToken: MAPBOX.ACCESS_TOKEN,
  center: MAPBOX.CENTER,
  style: MAPBOX.STYLE_GLOBE,
  container: "map",
  projection: "globe",
  antialias: true,
  zoom: 1,
});

window.map = mapboxConfig;
window.tb = new Threebox(map, map.getCanvas().getContext("webgl"), {
  defaultLights: true,
  enableSelectingObjects: true,
});


const secondsPerRevolution = 120;
const maxSpinZoom = 5;
const slowSpinZoom = 3;
let userInteracting = false;
let spinEnabled = true;

map.on("style.load", () => map.setFog({}));
window.spinGlobe = () => {
  let spinEnabled = true;
  const zoom = map.getZoom();
  if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
    let distancePerSecond = 360 / secondsPerRevolution;
    const center = map.getCenter();
    center.lng -= distancePerSecond;
    map.easeTo({ center, duration: 1000, easing: (n) => n });
  }
};

map.on("mousedown", () => {
  userInteracting = true;
});
map.on("mouseup", () => {
  userInteracting = false;
  spinGlobe();
});
map.on("dragend", () => {
  userInteracting = false;
  spinGlobe();
});
map.on("pitchend", () => {
  userInteracting = false;
  spinGlobe();
});
map.on("rotateend", () => {
  userInteracting = false;
  spinGlobe();
});
map.on("moveend", () => {
  spinGlobe();
});
//
window.modelsHandler = {};

map.on("style.load", () => {
  azadiModel.initial();
});
spinGlobe();

const projectId = "96fe8e83b504c9c47bde8b4637cc86da";
const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, appName: "Metareal" });

window.story = {
  currentSetp: 0,
};

createWeb3Modal({ wagmiConfig, projectId, chains });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
