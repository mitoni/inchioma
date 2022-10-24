import Image from "next/image";
import home from "../data/home";
import Footer from "./Footer";
import Logo from "./Logo";
import ContactDrawing from "./paths/ContactDrawing";
import MobileDrawing1 from "./paths/MobileDrawing1";
import MobileDrawing2 from "./paths/MobileDrawing2";
import MobileDrawing3 from "./paths/MobileDrawing3";
import MobileDrawing4 from "./paths/MobileDrawing4";
import MobileDrawing5 from "./paths/MobileDrawing5";
import MobileDrawing6 from "./paths/MobileDrawing6";
import MobileDrawing7 from "./paths/MobileDrawing7";
import MobileDrawing8 from "./paths/MobileDrawing8";
import Sidebar from "./Sidebar";
import SplitScreen from "./SplitScreen";
import TrigStroke from "./TrigStroke";

const HomeMobile = () => {
  return (
    <>
      <Sidebar />

      <div
        id="home"
        className="absolute top-0 left-0 righ-0 flex flex-row justify-start"
      >
        <Logo className="h-12 m-12" />
      </div>

      <SplitScreen
        screen1={
          <TrigStroke viewBox="0 0 4184 2982" className="w-full">
            <MobileDrawing1 />
          </TrigStroke>
        }
        screen2={home.hero}
      />

      <SplitScreen
        id="tree-climbing"
        screen1={
          <TrigStroke
            viewBox="0 0 2504 3698"
            className="w-full max-h-1/2-screen p-10"
          >
            <MobileDrawing2 />
          </TrigStroke>
        }
        screen2={home.tree_climbing}
      />

      <SplitScreen
        id="potatura"
        screen1={
          <TrigStroke viewBox="0 0 3603 1783" className="w-full p-10">
            <MobileDrawing3 />
          </TrigStroke>
        }
        screen2={home.potatura}
      />

      <SplitScreen
        id="abbattimento"
        screen1={
          <TrigStroke
            viewBox="0 0 2754 2738"
            className="w-full max-h-1/2-screen p-10"
          >
            <MobileDrawing4 />
          </TrigStroke>
        }
        screen2={home.abbattimento}
      />

      <SplitScreen
        id="vta"
        screen1={
          <TrigStroke
            viewBox="0 0 3609 1541"
            className="w-full max-h-1/2-screen p-10"
          >
            <MobileDrawing5 />
          </TrigStroke>
        }
        screen2={home.vta}
      />

      <SplitScreen
        id="trattamenti"
        screen1={
          <TrigStroke
            viewBox="0 0 4196 1026"
            className="w-full max-h-1/2-screen p-10"
          >
            <MobileDrawing6 />
          </TrigStroke>
        }
        screen2={home.trattamenti}
      />

      <SplitScreen
        id="consolidamenti"
        screen1={
          <TrigStroke
            viewBox="0 0 3688 1862"
            className="w-full max-h-1/2-screen p-10"
          >
            <MobileDrawing7 />
          </TrigStroke>
        }
        screen2={home.consolidamenti}
      />

      <SplitScreen
        id="messa-in-dimora"
        screen1={
          <TrigStroke
            viewBox="0 0 4205 2688"
            className="w-full max-h-1/2-screen p-10"
          >
            <MobileDrawing8 />
          </TrigStroke>
        }
        screen2={home.messa_a_dimora}
      />

      <div className="w-full text-center p-10">
        <Image
          width={600}
          height={900}
          src="/assets/img/tree-inchioma.jpg"
          layout="responsive"
          alt="tree image"
        />
      </div>

      <div className="w-full text-center p-10">{home.arbicoltura}</div>

      <div id="chi-siamo" className="w-full text-center p-10">
        <Image
          width={600}
          height={900}
          src="/assets/img/stefano-zanellati-inchioma.jpg"
          layout="responsive"
          alt="tree image"
        />
      </div>

      <div className="w-full text-center p-10">{home.chi_siamo}</div>

      <div id="contatti" className="w-full text-center p-10">
        <div className="w-full flex flex-row justify-center">
          <TrigStroke viewBox="0 0 1037 800" width={150}>
            <ContactDrawing />
          </TrigStroke>
        </div>

        <div className="h-5" />

        {home.contatti}
      </div>

      <div className="w-full text-center p-10">{home.legal}</div>

      <Footer />
    </>
  );
};

export default HomeMobile;
