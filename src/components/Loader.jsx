import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 26,
          color: "#ffffff33",
          fontWeight: 200,
          marginTop: 40,
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default Loader;
