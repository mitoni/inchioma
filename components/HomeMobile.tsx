import H2 from "./headings/H2";
import H3 from "./headings/H3";
import Span from "./headings/Span";
import Logo from "./Logo";
import MobileDrawing1 from "./paths/MobileDrawing1";
import MobileDrawing2 from "./paths/MobileDrawing2";
import MobileDrawing3 from "./paths/MobileDrawing3";
import MobileDrawing4 from "./paths/MobileDrawing4";
import MobileDrawing5 from "./paths/MobileDrawing5";
import MobileDrawing6 from "./paths/MobileDrawing6";
import MobileDrawing7 from "./paths/MobileDrawing7";
import MobileDrawing8 from "./paths/MobileDrawing8";
import Sidebar from "./Sidebar";
import TrigStroke from "./TrigStroke";
import Image from "next/image";
import H4 from "./headings/H4";
import P from "./headings/P";
import ContactDrawing from "./paths/ContactDrawing";
import Footer from "./Footer";

const HomeMobile = () => {
  return (
    <>
      <Sidebar />

      <div
        id="home"
        className="absolute top-0 left-0 righ-0 flex flex-row justify-start"
      >
        <a href="#home">
          <Logo className="h-12 m-12" />
        </a>
      </div>

      <div className="h-screen w-full text-center p-10">
        <div className="h-1/2 flex flex-col justify-end items-center">
          <TrigStroke viewBox="0 0 4184 2982" className="w-full">
            <MobileDrawing1 />
          </TrigStroke>
        </div>

        <div className="h-1/2 flex flex-col justify-center items-center">
          <H2>
            Professionalità e vocazione nei confronti di chi, da sempre, ci
            permette di respirare
          </H2>
        </div>
      </div>

      <TrigStroke
        id="tree-climbing"
        viewBox="0 0 2504 3698"
        className="w-full max-h-1/2-screen p-10"
      >
        <MobileDrawing2 />
      </TrigStroke>

      <div className="w-full text-center p-10">
        <H3>TREE CLIMBING</H3>
        <Span>tecnica per intervenire su alberi ad alto fusto</Span>
      </div>

      <TrigStroke id="potatura" viewBox="0 0 3603 1783" className="w-full p-10">
        <MobileDrawing3 />
      </TrigStroke>

      <div className="w-full text-center p-10">
        <H3>POTATURA</H3>
        <Span>
          rimonda del secco Potatura di diradamento Recupero della chioma
        </Span>
      </div>

      <TrigStroke
        id="abbattimento"
        viewBox="0 0 2754 2738"
        className="w-full max-h-1/2-screen p-10"
      >
        <MobileDrawing4 />
      </TrigStroke>

      <div className="w-full text-center p-10">
        <H3>ABBATTIMENTO</H3>
        <Span>
          abbattimento al piede <br />
          abbattimento controllato <br />
          eliminazione ceppaie <br />
        </Span>
      </div>

      <TrigStroke
        id="vta"
        viewBox="0 0 3609 1541"
        className="w-full max-h-1/2-screen p-10"
      >
        <MobileDrawing5 />
      </TrigStroke>

      <div className="w-full text-center p-10">
        <H3>VALUTAZIONE DI STABILITÀ</H3>
        <Span>
          indagini strumentali <br />
          attribuzione classe di propensione al cedimento <br />
        </Span>
      </div>

      <TrigStroke
        id="trattamenti"
        viewBox="0 0 4196 1026"
        className="w-full max-h-1/2-screen p-10"
      >
        <MobileDrawing6 />
      </TrigStroke>

      <div className="w-full text-center p-10">
        <H3>SALUTE DELL&apos;ALBERO</H3>
        <Span>
          trattamenti ﬁtosanitari <br />
          miglioramento della rizosfera
        </Span>
      </div>

      <TrigStroke
        id="consolidamenti"
        viewBox="0 0 3688 1862"
        className="w-full max-h-1/2-screen p-10"
      >
        <MobileDrawing7 />
      </TrigStroke>

      <div className="w-full text-center p-10">
        <H3>CONSOLIDAMENTI</H3>
        <Span>
          intervento non invasivo tramite cablaggi dedicati al ﬁne di preservare
          l&apos;architettura dell&apos;albero e migliorarne il livello di
          sicurezza
        </Span>
      </div>

      <TrigStroke
        id="messa-in-dimora"
        viewBox="0 0 4205 2688"
        className="w-full max-h-1/2-screen p-10"
      >
        <MobileDrawing8 />
      </TrigStroke>

      <div className="w-full text-center p-10">
        <H3>MESSA A DIMORA</H3>
        <Span>
          trapianto di alberi nel pieno rispetto ﬁsiologico scelta della specie
          adatta al sito d’impianto
        </Span>
      </div>

      <div className="w-full text-center p-10">
        <Image
          width={600}
          height={900}
          src="/assets/img/tree-inchioma.jpg"
          layout="responsive"
          alt="tree image"
        />
      </div>

      <div className="w-full p-10">
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
          Tra i vari strumenti disponibili spiccano sicuramente le tecniche per
          lavorare gli alberi, ossia il metodo con cui si decide di operare
          sull’albero.
        </P>
        <P>
          Premesso che, se contestualizzati correttamente, possono essere tutti
          validi, di certo quello che si avvicina maggiormente a soddisfare le
          esigenze dell’albero è il tree climbing.
        </P>
        <P>
          Letteralmente tradotto in “arrampicata in pianta”, il tree climbing è
          un metodo poco invasivo e molto sostenibile che permette
          all’arboricoltore di lavorare all’interno della chioma andando ad
          intervenire in maniera mirata e nel rispetto dello sviluppo
          architettonico dell’albero.
        </P>
      </div>

      <div className="w-full text-center p-10">
        <Image
          width={600}
          height={900}
          src="/assets/img/stefano-zanellati-inchioma.jpg"
          layout="responsive"
          alt="tree image"
        />
      </div>

      <div className="w-full text-center p-10">
        <H3>STEFANO ZANELLATI</H3>
        <H4>TREE CLIMBER ETW</H4>
        <br />
        <P>
          Perito agrario iscritto al Collegio provinciale dei periti agrari e
          dei periti agrari laureati della provincia di Pavia al n. 413.
        </P>
        <P>
          Conseguita la certiﬁcazione ETW (European Tree Worker), si adopera per
          realizzare ispezioni in quota e interventi di cura di alberi
          ornamentali, applicando i concetti dell&apos;arboricoltura moderna,
          nel rispetto delle esigenze morfoﬁsiologiche dei soggetti arborei.
        </P>
      </div>

      <div className="w-full text-center p-10">
        <div className="w-full flex flex-row justify-center">
          <TrigStroke viewBox="0 0 1037 800" width={150}>
            <ContactDrawing />
          </TrigStroke>
        </div>

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
      </div>

      <div className="w-full text-center p-10">
        <P>zeneste.leon@pec.it</P>

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
      </div>

      <div className="w-full text-center p-10">
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
      </div>

      <Footer />
    </>
  );
};

export default HomeMobile;
