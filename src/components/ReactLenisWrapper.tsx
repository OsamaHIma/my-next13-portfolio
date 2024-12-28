import React from "react";
import { ReactLenis } from "lenis/react";

const ReactLenisWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default ReactLenisWrapper;
