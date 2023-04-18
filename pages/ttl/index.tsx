import BlockQuote from '@/components/BlockQuote/BlockQuote';
import ProgressBar from '@/components/LoadingIndicators/ProgressBar';
import ProgressBarAccelerating from '@/components/LoadingIndicators/ProgressBarAccelerating';
import ProgressBarCounterAccFlow from '@/components/LoadingIndicators/ProgressBarAccFlow';
import ProgressBarAccFlow from '@/components/LoadingIndicators/ProgressBarAccFlow';
import Head from 'next/head'

export default function Page() {
    return <>
        <Head>
            <title>Tids-tøyende lasting</title>
        </Head>
        <div className="overflow-hidden">
            <div className="container">

                <h1 id="gjør-nettsiden-din-12-raskere-enn-den-er">Tids-tøyende lasting</h1>

                <p>Lasteindikatorer. Et nødvendig onde i enhver ikke-triviell
                    nettside.</p>

                <p>Det beste hadde vært å slippe dem. Men nå er det nå en gang slik at
                    Ting Tar Tid.</p>

                <p>Som de rutinerte utviklerene vi er, er som regel løsningen vår å
                    slenge på en spinner and call it a day. Det er ikke alltid man tenker over at hvordan 
                    vi viser lastingen kan ha så mye å si.
                    Overraskelsen var derfor stor da vi oppdaget at det finnes et psykologisk fenomen vi
                    har valgt å kalle tids-tøyende lasting: Forskjellige lasteindikatorer
                    fører til forskjellig opplevd lastetid. Vi kan endre lastetiden, eller
                    hvertfall hvor lang lastetiden føles, kun ved å være litt smartere rundt
                    hvilken type lasteindikator vi bruker.</p>

                <h2 style={{marginBottom: '10px'}}>Ikke glem å dra frem progressbaren i ny og ne</h2>
                <p>Det finnes en tommelfingerregel for hvilken lasteindikator man skal
                    bruke, basert på lastetiden:</p>

                        <p>

                        <span>1. Under 1 sekund lastetid: Ikke vis noe som helst </span>
                        <br/>
                        <span>2. Mellom 1 og 10 sekunder lastetid: Vis en spinner</span>
                        <br/>
                        <span>3. Over 10 sekunder lastetid: Vis en progressbar</span>

                    <br/>
                    <a href="https://www.nngroup.com/articles/response-times-3-important-limits/">
                        (Tallene er hentet fra NNGroup)
                    </a>
                        </p>

                <p>Når lastetiden bikker 10 sekunder skal man altså bruke det som på
                    norsk så flott heter “fremdriftsindikator”. De fleste av oss kaller det gjerne bare
                    progressbar. Og det er i disse tilfellene vi kan gjøre oss litt ekstra
                    flid, og benytte oss av et knippe smarte triks for å “tøye” den
                    subjektive tiden vi laster.</p>

                <p>I utgangspunktet er det å bytte ut spinneren med en progressbar 
                    et overraskende godt triks for brukeropplevelsen. Som professor
                    David Maister skriver i artikkelen “The Psychology of Waiting
                    Lines”:</p>

                    <BlockQuote text={"Uncertain waits are longer than known, finite waits"} />

                <p>Vi mennesker takler usikkerhet dårlig. Det gir oss et snev av angst å ikke vite
                    når noe er ferdig. Et typisk eksempel som Maister trekker fram i
                    artikkelen er besøk hos tannlegen. De gangene man kommer før avtalt tid,
                    er det ikke noe problem å vente frem til tiden som var avtalt. Men i det
                    øyeblikket minuttviseren passerer avtaletiden blir man et utålmodig vrak
                    temmelig raskt. Ventetiden før avtalt tid er endelig. Ventetiden etter
                    har <em>ingen. kjent. ende</em>.</p>
                <p>Å vise en progressbar roer apehjernen vår ned noen hakk. Den gir
                    oss en visshet om tiden vi er nødt til å vente.</p>

                <h2 style={{marginBottom: '10px'}}>Bruk tidstøyende animasjoner</h2>
                <p>Men vi trenger ikke stoppe her. Overraskende nok kan vi gjøre enda
                    mer tids-tøyende akrobatikk ved å bruke noen velvalgte animasjoner. <a href="https://www.chrisharrison.net/projects/progressbars2/ProgressBarsHarrison.pdf">Chris Harrison</a> har, sammen med andre forskere, gjennomført to studier (<a className=''
                        href="https://www.chrisharrison.net/projects/progressbars2/ProgressBarsHarrison.pdf">Faster
                        Progress Bars Manipulating Perceived Duration with Visual
                        Augmentations</a>, <a className="" href="https://chrisharrison.net/projects/progressbars/ProgBarHarrison.pdf"> 
                          Rethinkingthe Progress Bar</a>) 
                    der de undersøkte hvordan vi opplever
                    tiden når vi ser en progressbar.
                    
                </p>
                <p>I disse studiene testet de flere forskjellige varianter. Her er tre
                    av dem. Alle er på 5 sekunder. Hvilken synes du virker raskest?</p>


                <h3>Vanlig progress bar</h3>
                <ProgressBar />

                <h3>Akselererende progress bar</h3>
                <ProgressBarAccelerating />

                <h3>Akselererende progress bar, med mot-akselererende linjer</h3>
                <ProgressBarCounterAccFlow hasCompleted={false} estimatedDuration={5} makeFaster={true} />

                <p>Om du er lik folk flest skal den tredje
                    progressbaren virke raskest. Denne har akselererende fremdrift, samtidig som den har
                    linjer som beveger seg akselererende bakover i motsatt retning. Ved å
                    bruke denne vil vi, ifølge studien, føle at tiden er 11% raskere enn om
                    vi ser en vanlig, helfarget progress bar. Et fint tids-tøyende knep å ha
                    med seg for å gjøre brukerne (11%) mer fornøyde.</p>
                
            </div>
        </div>

    </>
}