import { AvatarCreator } from "@readyplayerme/react-avatar-creator";
import { Avatar } from "@readyplayerme/visage";
import { useState } from "react";

const config = {
  clearCache: true,
  bodyType: "fullbody",
  quickStart: true,
  language: "en",
};

const style = { width: "100wv", height: "100vh", border: "none", position: "fixed", zIndex: 1000 };

export default function CharacterCreator() {
  const [avatarUrl, setAvatarUrl] = useState("");
  const handleOnAvatarExported = (event) => {
    setAvatarUrl(event.data.url);
  };

  return (
    <>
      <AvatarCreator subdomain='metareal-test' className="w-[100vw]" config={config} style={style} onAvatarExported={handleOnAvatarExported} />
      {avatarUrl && <Avatar modelSrc={avatarUrl} />}
    </>
  );
}
