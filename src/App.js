import React, { useEffect, createContext, useState, useContext } from "react";
import "./styles.css";

import DashBoardDesktop from "./desktop/DashBoardDesktop";
import DialogBoxMobil from "./mobil/DialogBoxMobil";

// render responsive vue mobil and desktop

const viewportContext = createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => <DialogBoxMobil />;
const DesktopComponent = () => <DashBoardDesktop />;

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function App() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}
