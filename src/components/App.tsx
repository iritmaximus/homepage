import { Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { Music } from "./Music/Music";
import { Navbar } from "./Navbar/Navbar";


export const App = ()  => {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Music />}></Route>
    </Routes>
    </>
  );
};
