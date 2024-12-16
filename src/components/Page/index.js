import React from "react";

import Navbar from "../Header/NavDisconnected";
import Home from "../Home";
import Apropos from "../Apropos";
import Mentorat from "../Mentorat";
import Temoignages from "../Temoignages";
import Login from "../Login";
import Contact from "../Contact";
import Footer from "../Footer";

import "./style.scss";

const Page = ({ children }) => (
  <>
    <header>
      <Navbar />
    </header>
    <Home />
    <Apropos />
    <Mentorat />
    <Temoignages />
    <Login />
    <Contact />
    <Footer />
  </>
);

export default Page;
