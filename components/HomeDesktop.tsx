import Image from "next/image";
import home from "../data/home";
import Anchor from "./Anchor";
import Background from "./Background";
import Col from "./Col";
import FixedBlock from "./FixedBlock";
import Footer from "./Footer";
import Grid from "./Grid";
import Logo from "./Logo";
import ContactDrawing from "./paths/ContactDrawing";
import Sidebar from "./Sidebar";
import TrigStroke from "./TrigStroke";

const HomeDesktop = () => {
  return (
    <>
      <Sidebar />

      <div
        id="home"
        className="absolute top-0 left-0 right-0 flex flex-row justify-center"
      >
        <Logo className="h-32 my-16" />
      </div>

      <div className="relative block max-w-screen">
        <div className="relative mx-auto max-w-screen-xl mt-72">
          <Background />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 left-0 mb-20">{home.hero}</div>

      <FixedBlock offsetY={1400} offsetX={350}>
        <Anchor id="tree-climbing" />
        {home.tree_climbing}
      </FixedBlock>

      <FixedBlock offsetY={1825} offsetX={50}>
        <Anchor id="potatura" />
        {home.potatura}
      </FixedBlock>

      <FixedBlock offsetY={2350} offsetX={50} className="text-right">
        <Anchor id="abbattimento" />
        {home.abbattimento}
      </FixedBlock>

      <FixedBlock offsetY={2800} offsetX={100}>
        <Anchor id="vta" />
        {home.vta}
      </FixedBlock>

      <FixedBlock offsetY={3250} offsetX={-300} className="text-right">
        <Anchor id="trattamenti" />
        {home.trattamenti}
      </FixedBlock>

      <FixedBlock offsetY={3525} offsetX={200}>
        <Anchor id="consolidamenti" />
        {home.consolidamenti}
      </FixedBlock>

      <FixedBlock offsetY={4000} offsetX={-50} className="text-right">
        <Anchor id="messa-in-dimora" />
        {home.messa_a_dimora}
      </FixedBlock>

      <div className="h-40" />

      <Grid>
        <Col className="flex flex-col justify-center text-right ">
          {home.arbicoltura}
        </Col>

        <Col>
          <Image
            width={600}
            height={900}
            src="/assets/img/tree-inchioma.jpg"
            layout="responsive"
            alt="tree image"
          />
        </Col>
      </Grid>

      <Grid>
        <Col>
          <Image
            width={600}
            height={900}
            src="/assets/img/stefano-zanellati-inchioma.jpg"
            layout="responsive"
            alt="tree image"
          />
        </Col>

        <Col className="flex flex-col justify-center">
          <div className="relative">
            <Anchor id="chi-siamo" offsetY={50} />
            {home.chi_siamo}
          </div>
        </Col>
      </Grid>

      <div className="h-40" />

      <Grid>
        <Col className="flex flex-col justify-end">{home.legal}</Col>

        <Col className="flex flex-col justify-end items-end text-right">
          <Anchor id="contatti" offsetY={10} />

          <TrigStroke viewBox="0 0 1037 800" width={150}>
            <ContactDrawing />
          </TrigStroke>

          <div className="h-5" />

          {home.contatti}
        </Col>
      </Grid>

      <Footer />
    </>
  );
};

export default HomeDesktop;
