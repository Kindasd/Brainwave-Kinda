

import React from 'react';
import DocumentMeta from 'react-document-meta';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const meta = {
    title: 'Some Meta Title',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
};

const App = () => {
  return (
    <DocumentMeta {...meta}>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
         <Header />
         <Hero />
         <Benefits />
         <Collaboration />
         <Services />
         <Pricing />
         <Roadmap />
         <Footer />
      </div>
      <ButtonGradient />
    </DocumentMeta>
  );
};

export default App;


