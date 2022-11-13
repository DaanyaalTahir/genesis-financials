import React from "react";
import { Image } from "antd";
function GFLogo({ size, mode }) {
  const logoSizes = {
    small: 37,
    medium: 50,
    large: 80,
  };
  return (
    <Image
      height={logoSizes[size] || logoSizes.small}
      src={mode == "light" ? "/logos/icon-light.png" : "/logos/icon-dark.png"}
      preview={false}
    />
  );
}

export default GFLogo;
