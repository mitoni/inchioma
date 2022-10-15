import type { NextPage } from "next";
import Background from "../components/Background";
import Grid from "../components/Grid";
import H3 from "../components/headings/H3";
import Span from "../components/headings/Span";
import Logo from "../components/Logo";
import H2 from "../components/headings/H2";

const Home: NextPage = () => {
  return (
    <>
      <div className="absolute w-full flex flex-row justify-center">
        <Logo className="h-20 my-20" />
      </div>

      <div className="w-full flex flex-row justify-center">
        <Background />
      </div>

      <Grid style={{ height: "100vh" }}>
        <H2 className="row-start-6 col-start-3 col-end-10 text-center">
          Professionalità e vocazione nei confronti di chi, da sempre, ci
          permette di respirare
        </H2>
      </Grid>

      <Grid style={{ height: "20vh" }}>
        <div className="row-start-2 row-end-6 col-start-8 col-span-4 flex flex-col justify-center">
          <H3>TREE CLIMBING</H3>
          <Span>tecnica per intervenire su alberi ad alto fusto</Span>
        </div>
      </Grid>

      <Grid style={{ height: "50vh" }}>
        <div className="row-start-2 row-end-6 col-start-6 col-span-3 flex flex-col justify-center">
          <H3>POTATURA</H3>
          <Span>
            rimonda del secco potatura di diradamento recupero della chioma
          </Span>
        </div>
      </Grid>

      <Grid style={{ height: "40vh" }}>
        <div className="row-start-2 row-end-6 col-start-5 col-span-3 flex flex-col justify-center text-right">
          <H3>ABBATTIMENTO</H3>
          <Span>
            abbattimento al piede abbattimento controllato eliminazione ceppaie
          </Span>
        </div>
      </Grid>

      <Grid style={{ height: "30vh" }}>
        <div className="row-start-2 row-end-6 col-start-7 col-span-3 flex flex-col justify-center text-left">
          <H3>VALUTAZIONE DI STABILITÀ</H3>
          <Span>trattamenti ﬁtosanitari miglioramento della rizosfera </Span>
        </div>
      </Grid>

      <Grid style={{ height: "45vh" }}>
        <div className="row-start-2 row-end-6 col-start-3 col-span-3 flex flex-col justify-center text-right">
          <H3>SALUTE DELL'ALBERO</H3>
          <Span>
            indagini strumentali attribuzione classe di propensione al cedimento
          </Span>
        </div>
      </Grid>

      <Grid style={{ height: "10vh" }}>
        <div className="row-start-2 row-end-6 col-start-7 col-span-4 flex flex-col justify-center text-left">
          <H3>CONSOLIDAMENTI</H3>
          <Span>
            intervento non invasivo tramite cablaggi dedicati al ﬁne di
            preservare l'architettura dell'albero e migliorarne il livello di
            sicurezza
          </Span>
        </div>
      </Grid>

      <Grid style={{ height: "100vh" }}>
        <div className="row-start-2 row-end-6 col-start-3 col-span-4 flex flex-col justify-center text-right">
          <H3>MESSA A DIMORA</H3>
          <Span>
            trapianto di alberi nel pieno rispetto ﬁsiologico scelta della
            specie adatta al sito d’impianto
          </Span>
        </div>
      </Grid>

      <div className="h-screen" />
    </>
  );
};

export default Home;
