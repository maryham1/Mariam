import { createContext, useContext } from "react";
import { useRef } from "react";

const ScrollContext = createContext();

export function ScrollContextComponent({ children }) {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ aboutRef, projectRef, contactRef }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useComponent() {
  const context = useContext(ScrollContext);
  if (context === undefined) throw new Error("outside the component");
  return context;
}
