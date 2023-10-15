import { useAppContext } from "@/AppContext";
import { AvatarCreator } from "@readyplayerme/react-avatar-creator";
import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
const config = {
  clearCache: true,
  bodyType: "halfbody",
  quickStart: false,
  language: "en",
};

const style = { width: "100wv", height: "100vh", border: "none", position: "fixed", zIndex: 1000 };

export default function CharacterCreator() {
  const { setAvatarCreatorShow, AvatarCreatorShow, avatar, setAvatar } = useAppContext();
  const handleOnAvatarExported = (event) => {
    setAvatar(event.data.url);
    setAvatarCreatorShow(false);
    runStep(4);
  };
  useEffect(() => {
    if (!avatar) return;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    const loader = new GLTFLoader();
    loader.load(avatar, (gltf) => {
      scene.add(gltf.scene);
      renderer.setSize(256, 256);
      renderer.render(scene, camera);
      const imgData = renderer.domElement.toDataURL();
      console.log(imgData);
    });
  }, [avatar]);
  return (
    <>
      <AvatarCreator subdomain='metareal-test' className={`${AvatarCreatorShow ? "block" : "hidden"} w-[100vw]`} config={config} style={style} onAvatarExported={handleOnAvatarExported} />
    </>
  );
}
