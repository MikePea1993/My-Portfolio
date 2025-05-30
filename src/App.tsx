import React from "react";
import { Layout } from "./components/common/Layout";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Portfolio } from "./components/sections/Portfolio";
import { Resume } from "./components/sections/Resume";
import { Contact } from "./components/sections/Contact";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </Layout>
  );
};

export default App;
