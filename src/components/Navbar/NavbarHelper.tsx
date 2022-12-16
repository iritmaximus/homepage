import React from "react";

import { Home } from "../Home";
import { Music } from "../Music/Music";

// type definitions
export type State = React.Dispatch<React.SetStateAction<JSX.Element>>

// interface definitions
export interface INavbarProps {
  setCurrentElement: State
}

// sets what element is currently showing
// NOT IN USE
const setElement = (setCurrElement: State, element: JSX.Element): void => {
  setCurrElement(element);
};

// navbar implemented with usestates, not in use. Kind of just stored here
// if I change my mind
export const NavbarUseState = ({ setCurrentElement }: INavbarProps) => {
  return (
    <>
    <div className="navbar">
      <button onClick={() => setElement(setCurrentElement, <Home />)}>Home</button>
      <button onClick={() => setElement(setCurrentElement, <Music />)}>Music</button>
    </div>
    </>
  );
};
