import * as THREE from "three";
class AzadiModel {
  constructor() {
    this.clickHandler = null;
    this.modifiedHandler = null;
    this.azadiInstance = null;
    this.pointLight = null; // Point light
  }

  setClickHandler(handler) {
    this.clickHandler = handler;
  }
  setModifiedHandler(handler) {
    this.modifiedHandler = handler;
  }
  setAzadiInstance(azadi) {
    this.azadiInstance = azadi;
  }

  runModifiedHandler() {
    if (this.modifiedHandler && this.azadiInstance) {
      this.modifiedHandler(this.azadiInstance);
    }
  }

  animateModel() {
    let [increasing, intensity] = [true, 0.01];
    const animate = () => {
      if (map) map.triggerRepaint();
      intensity = increasing ? intensity + 0.008 : intensity - 0.01;
      increasing = intensity >= 1.5 ? false : intensity <= 0.03 ? true : increasing;
      if (this.pointLight) {
        this.pointLight.intensity = intensity;
      }
      requestAnimationFrame(animate);
    };

    this.pointLight = new THREE.PointLight(0x0000ff, intensity, 1000); // افزایش distance به 100
    this.pointLight.position.set(50, 50, -50); // تنظیم موقعیت نور به بالا
    this.azadiInstance.add(this.pointLight);
    requestAnimationFrame(animate);
  }

  initial() {
    map.addLayer({
      id: "azadi_layer",
      type: "custom",
      renderingMode: "3d",
      onAdd: () => this.onAdd(),
      render: () => tb.update(),
    });
  }

  onAdd() {
    const options = {
      obj: "./models/azadi.gltf",
      type: "gltf",
      scale: 2,
      units: "meters",
      rotation: { x: 90, y: 0, z: 0 },
      anchor: "center",
    };
    tb.loadObj(options, (model) => {
      const azadi = model.setCoords([51.33806, 35.69974]);
      tb.add(azadi);
      this.setAzadiInstance(azadi);
      azadi.addEventListener("SelectedChange", (e) => this.clickHandler?.(e), false);
    });
  }
}

// Exported Instance
export const azadiModel = new AzadiModel();
