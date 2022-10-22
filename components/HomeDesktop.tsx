import Image from "next/image";
import Anchor from "./Anchor";
import Background from "./Background";
import Col from "./Col";
import FixedBlock from "./FixedBlock";
import Footer from "./Footer";
import Grid from "./Grid";
import H2 from "./headings/H2";
import H3 from "./headings/H3";
import H4 from "./headings/H4";
import P from "./headings/P";
import Span from "./headings/Span";
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
        <div className="relative mx-auto max-w-screen-xl mt-64">
          <Background />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 left-0">
        <H2 className="max-w-screen-xl mx-auto text-center mb-20 bg-white">
          <span className="font-medium">Professionalità</span> e{" "}
          <span className="font-medium">vocazione</span> nei confronti di chi,
          da sempre, ci permette di{" "}
          <span className="font-medium">respirare</span>
        </H2>
      </div>

      <FixedBlock offsetY={1125} offsetX={350}>
        <Anchor id="tree-climbing" />
        <H3>TREE CLIMBING</H3>
        <Span>tecnica per intervenire su alberi ad alto fusto</Span>
      </FixedBlock>

      <FixedBlock offsetY={1525} offsetX={50}>
        <Anchor id="potatura" />
        <H3>POTATURA</H3>
        <Span>
          rimonda del secco potatura di diradamento recupero della chioma
        </Span>
      </FixedBlock>

      <FixedBlock offsetY={2000} offsetX={-50} className="text-right">
        <Anchor id="abbattimento" />
        <H3>ABBATTIMENTO</H3>
        <Span>
          abbattimento al piede abbattimento controllato eliminazione ceppaie
        </Span>
      </FixedBlock>

      <FixedBlock offsetY={2400} offsetX={200}>
        <Anchor id="vta" />

        <H3>VALUTAZIONE DI STABILITÀ</H3>
        <Span>trattamenti ﬁtosanitari miglioramento della rizosfera </Span>
      </FixedBlock>

      <FixedBlock offsetY={2800} offsetX={-350} className="text-right">
        <Anchor id="trattamenti" />
        <H3>SALUTE DELL&apos;ALBERO</H3>
        <Span>
          indagini strumentali attribuzione classe di propensione al cedimento
        </Span>
      </FixedBlock>

      <FixedBlock offsetY={3050} offsetX={300}>
        <Anchor id="consolidamenti" />
        <H3>CONSOLIDAMENTI</H3>
        <Span>
          intervento non invasivo tramite cablaggi dedicati al ﬁne di preservare
          l&apos;architettura dell&apos;albero e migliorarne il livello di
          sicurezza
        </Span>
      </FixedBlock>

      <FixedBlock offsetY={3700} offsetX={-300} className="text-right">
        <Anchor id="messa-in-dimora" />
        <H3>MESSA A DIMORA</H3>
        <Span>
          trapianto di alberi nel pieno rispetto ﬁsiologico scelta della specie
          adatta al sito d’impianto
        </Span>
      </FixedBlock>

      <div className="h-40" />

      <Grid>
        <Col className="flex flex-col justify-center text-right p-8">
          <H3>ARBORICOLTURA E TREE CLIMBING</H3>
          <H4>Cosa sono e perché sceglierli</H4>
          <br />
          <P>
            Per deﬁnizione l’arboricoltura è la scienza e la tecnica della
            coltivazione degli alberi, al ﬁne di poter mantenere in equilibrio o
            migliorare il loro stato ﬁtosanitario nel rispetto delle esigenze
            delle specie.
          </P>
          <P>
            In sintesi: scienza e tecnica al servizio degli alberi. Come è ben
            noto, per ogni professione esiste un professionista, che in questo
            caso è l’arboricoltore, ossia colui che pratica l’arboricoltura. La
            sua formazione prevede la conoscenza e rispetto del sistema albero e
            la capacità di valutare gli interventi migliori in virtù di ogni
            singolo caso.
          </P>
          <P>
            Grazie ai concetti dell’arboricoltura moderna e alle competenze
            acquisite dai continui studi sugli alberi, l’arboricoltore oggi è
            dotato di una ricca “cassetta degli attrezzi” per fronteggiare le
            differenti esigenze.
          </P>
          <P>
            Tra i vari strumenti disponibili spiccano sicuramente le tecniche
            per lavorare gli alberi, ossia il metodo con cui si decide di
            operare sull’albero.
          </P>
          <P>
            Premesso che, se contestualizzati correttamente, possono essere
            tutti validi, di certo quello che si avvicina maggiormente a
            soddisfare le esigenze dell’albero è il tree climbing.
          </P>
          <P>
            Letteralmente tradotto in “arrampicata in pianta”, il tree climbing
            è un metodo poco invasivo e molto sostenibile che permette
            all’arboricoltore di lavorare all’interno della chioma andando ad
            intervenire in maniera mirata e nel rispetto dello sviluppo
            architettonico dell’albero.
          </P>
        </Col>

        <Col className="p-8">
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
        <Col className="p-8">
          <Image
            width={600}
            height={900}
            src="/assets/img/stefano-zanellati-inchioma.jpg"
            layout="responsive"
            alt="tree image"
          />
        </Col>

        <Col className="flex flex-col justify-center p-8">
          <Anchor id="chi-siamo" />
          <H3>STEFANO ZANELLATI</H3>
          <H4>TREE CLIMBER ETW</H4>
          <br />
          <P>
            Perito agrario iscritto al Collegio provinciale dei periti agrari e
            dei periti agrari laureati della provincia di Pavia al n. 413.
          </P>
          <P>
            Conseguita la certiﬁcazione ETW (European Tree Worker), si adopera
            per realizzare ispezioni in quota e interventi di cura di alberi
            ornamentali, applicando i concetti dell&apos;arboricoltura moderna,
            nel rispetto delle esigenze morfoﬁsiologiche dei soggetti arborei.
          </P>
        </Col>
      </Grid>

      <div className="h-40" />

      <Grid>
        <Col />

        <Col className="flex flex-col items-end text-right">
          <Anchor id="contatti" />

          <TrigStroke viewBox="0 0 1037 800" width={150}>
            <ContactDrawing />
          </TrigStroke>

          <div className="h-5" />

          <H3>CONTATTI</H3>

          <div className="h-5" />

          <P>
            Vuoi avere maggiori informazioni?
            <br />
            Vuoi richiedere un preventivo?
            <br />
            O semplicemente vuoi conoscerci meglio?
            <br />
            Qualsiasi siano le tue esigenze siamo qui per aiutarti.
            <br />
            <br />
            Chiamaci, mandaci un messaggio o scrivi una mail.
            <br />
          </P>
        </Col>
      </Grid>

      <div className="h-40" />

      <Grid>
        <Col>
          <H3>IN CHIOMA</H3>

          <div className="h-5" />

          <P>
            Via De Amicis 27 <br />
            Barbavara 27020 <br />
            Gravellona Lomellina (PV) <br />
          </P>

          <div className="h-5" />

          <P>
            C.F. ZNLSFN79M04L872X <br />
            P.IVA 01977180189
          </P>
        </Col>

        <Col className="text-right">
          <P>info@inchioma.it</P>

          <div className="h-5" />

          <P>
            Stefano Zanellati <br />
            +39 349 2962621
          </P>

          <div className="h-5" />

          <P>
            Enrico Zanellati <br />
            +39 348 2641615
          </P>
        </Col>
      </Grid>

      <Footer />
    </>
  );
};

export default HomeDesktop;
