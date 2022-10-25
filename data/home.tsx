import H2 from "../components/headings/H2";
import H3 from "../components/headings/H3";
import H4 from "../components/headings/H4";
import P from "../components/headings/P";
import Span from "../components/headings/Span";
import Strong from "../components/headings/Strong";

const home = {
  hero: (
    <H2 className="max-w-screen-xl mx-auto text-center   bg-white">
      <span className="font-medium">Professionalità</span> e{" "}
      <span className="font-medium">vocazione</span> nei confronti di chi, da
      sempre, ci permette di <span className="font-medium">respirare</span>
    </H2>
  ),
  tree_climbing: (
    <>
      <H3>TREE CLIMBING</H3>
      <Span>Tecnica per intervenire su alberi ad alto fusto</Span>
    </>
  ),
  potatura: (
    <>
      <H3>POTATURA</H3>
      <Span>
        Rimonda del secco
        <br />
        Potatura di diradamento
        <br />
        Recupero della chioma
      </Span>
    </>
  ),
  abbattimento: (
    <>
      <H3>ABBATTIMENTO</H3>
      <Span>
        Abbattimento al piede
        <br />
        Abbattimento controllato
        <br />
        Eliminazione ceppaie
      </Span>
    </>
  ),
  vta: (
    <>
      <H3>VALUTAZIONE DI STABILITÀ</H3>
      <Span>
        V.T.A. (visual tree assessment)
        <br />
        Indagini strumentali
        <br />
        Attribuzione classe di propensione al cedimento
      </Span>
    </>
  ),
  trattamenti: (
    <>
      <H3>SALUTE DELL&apos;ALBERO</H3>
      <Span>
        Trattamenti fitosanitari
        <br />
        Miglioramento della rizosfera
        <br />
      </Span>
    </>
  ),
  consolidamenti: (
    <>
      <H3>CONSOLIDAMENTI</H3>
      <Span>
        Intervento non invasivo tramite cablaggi dedicati al fine di preservare
        l&apos;architettura dell&apos;albero e migliorarne il livello di
        sicurezza
      </Span>
    </>
  ),
  messa_a_dimora: (
    <>
      <H3>MESSA A DIMORA</H3>
      <Span>
        Trapianto di alberi nel rispetto della loro fisiologia
        <br />
        Scelta della specie adatta al sito d’impianto
      </Span>
    </>
  ),
  arbicoltura: (
    <>
      <H3>ARBORICOLTURA E TREE CLIMBING</H3>
      <H4>Cosa sono e perché sceglierli</H4>
      <br />
      <P>
        Per definizione l’arboricoltura è la scienza e la tecnica della
        coltivazione degli alberi, al fine di poter mantenere in equilibrio o
        migliorare il loro stato fitosanitario nel rispetto delle esigenze delle
        specie.
      </P>
      <P>
        In sintesi: <Strong>scienza</Strong> e <Strong>tecnica</Strong> al
        <Strong>servizio</Strong> degli <Strong>alberi</Strong>. Come è ben
        noto, per ogni professione esiste un <Strong>professionista</Strong>,
        che in questo caso è l’arboricoltore, ossia colui che pratica
        l’arboricoltura.
      </P>
      <P>
        Grazie ai concetti dell’arboricoltura moderna e alle competenze
        acquisite dai continui studi sugli alberi, l’arboricoltore oggi è dotato
        di una ricca “cassetta degli attrezzi” per fronteggiare le differenti
        esigenze.
      </P>
      <P>
        Tra i vari strumenti disponibili spiccano sicuramente le tecniche per
        lavorare gli alberi, ossia il metodo con cui si decide di operare
        sull’albero.
      </P>
      <P>
        Premesso che, se contestualizzati correttamente, possono essere tutti
        validi, di certo quello che si avvicina maggiormente a soddisfare le
        esigenze dell’albero è il <Strong>tree climbing</Strong>.
      </P>
      <P>
        Letteralmente tradotto in “arrampicata in pianta”, il tree climbing è un
        metodo poco invasivo e molto sostenibile che permette all’arboricoltore
        di lavorare all’interno della chioma andando ad intervenire in maniera
        mirata e nel rispetto dello sviluppo architettonico dell’albero.
      </P>
    </>
  ),
  chi_siamo: (
    <>
      <H3>STEFANO ZANELLATI</H3>
      <H4>TREE CLIMBER ETW</H4>
      <br />
      <P>
        Perito agrario iscritto al Collegio provinciale dei periti agrari e dei
        periti agrari laureati della provincia di Pavia al n. 413.
      </P>
      <P>
        Conseguita la certiﬁcazione ETW (European Tree Worker), si adopera per
        realizzare ispezioni in quota e interventi di cura di alberi
        ornamentali, applicando i concetti dell&apos;arboricoltura moderna, nel
        rispetto delle esigenze morfoﬁsiologiche dei soggetti arborei.
      </P>
    </>
  ),
  contatti: (
    <>
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

      <div className="h-5" />

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
    </>
  ),
  legal: (
    <>
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
    </>
  ),
};

export default home;
