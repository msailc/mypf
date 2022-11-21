import React from "react";
import Image from "next/image";
import me from "../public/me.png";

const Bg = () => {
  return (
    <div className="bgWrap flex items-center justify-center">
      <Image
        src={me}
        alt="me"
        width={350}
        height={350}
        quality={100}
        priority={true}
      />
    </div>
  );
};

export default Bg;
