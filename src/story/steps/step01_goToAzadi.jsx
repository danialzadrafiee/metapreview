import { MAPBOX } from "@/story/constants";
import { azadiModel } from "@/models/azadi";
let flyingStatus = "stoped";
export const step01_goToAzadi = (setAuthVisible) => {
  azadiModel.setClickHandler(() => {
    console.log("we are in step 1 now");
  });


  if (flyingStatus === "flying" || flyingStatus === "ended") return;

  setAuthVisible(false);
  map.stop();
  map.setStyle(MAPBOX.STYLE_META);
  map.flyTo({
    center: MAPBOX.CENTER,
    zoom: 17.5,
    bearing: 60,
    pitch: 75,
    duration: 1000,
  });
  flyingStatus = "flying";
  map.on("moveend", function (e) {
    if (flyingStatus === "flying") {
      flyingStatus = "ended";
      runStep(2);
    }
  });
};
