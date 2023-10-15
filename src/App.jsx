import React, { useEffect, useState } from "react";
import { AppProvider } from "@/AppContext";
import Authentication from "@/gui/Authentication/Authentication";
import Modal from "@/components/Modal/Modal";
import Popup from "@/components/Popup/Popup";
import Card from "@/components/Card/Card";
import Story from "@/story/Story";
import CharacterCreator from "./gui/CharacterCreator/CharacterCreator";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const App = () => {
  // useEffect(() => {
  //   const avatar = "./character.glb";
  //   const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(5, 1, 0.1, 2000);
  //   camera.position.z = 5;
  //   camera.position.y = 0.585;
  //   const light = new THREE.AmbientLight(0xffffff);
  //   scene.add(light);
  //   const loader = new GLTFLoader();
  //   loader.load(avatar, (gltf) => {
  //     gltf.scene.traverse((node) => {
  //       if (node instanceof THREE.Mesh) {
  //         node.material.color = new THREE.Color(1, 1, 1);
  //       }
  //     });
  //     gltf.scene.rotation.y -= 25 * (Math.PI / 180); 
  //     scene.add(gltf.scene);
  //     renderer.setSize(1024, 1024);
  //     renderer.render(scene, camera);
  //     const imgData = renderer.domElement.toDataURL();
  //     console.log(imgData);
  //   });
  // }, []);

  return (
    <AppProvider>
      <Authentication />
      <Modal />
      <Popup />
      <Card />
      <Story />
      <CharacterCreator />
    </AppProvider>
  );
};

export default App;
