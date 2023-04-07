import ProgressBar from '@/components/LoadingIndicators/ProgressBar';
import ProgressBarAccelerating from '@/components/LoadingIndicators/ProgressBarAccelerating';
import ProgressBarCounterAccFlow from '@/components/LoadingIndicators/ProgressBarAccFlow';
import ProgressBarAccFlow from '@/components/LoadingIndicators/ProgressBarAccFlow';
import Head from 'next/head'

export default function Page() {
    let style = `
    h2 { margin-bottom: 10px;}
    blockquote {
        margin: 0;
        padding: 1em 1em 1em 2em;
        position: relative;
        font-size: 1.1em;
        font-style: italic;
        border-left: 0.25em solid #ccc;
      }
      blockquote:before {
        content: "\u201C"; /* Left double quotation mark */
        position: absolute;
        left: 0.1em;
        font-size: 3em;
        top: 0.0em;
        color: #ccc;
      }              
`;
    return <>
    <Head>
        <title>Tids-tøyende lasting</title>
    </Head>
    <style>
        {style}
    </style>
    <div className="overflow-hidden">
        <div className="container">
        <h1 id="gjør-nettsiden-din-12-raskere-enn-den-er">Tids-tøyende lasting</h1>
    <p>Lasteindikatorer. Et nødvendig onde i enhver ikke-triviell
nettside.</p>
<p>Det beste hadde vært å slippe dem. Men nå er det nå en gang slik at
Ting Tar Tid.</p>
<p>Som de rutinerte utviklerene vi er, er som regel løsningen vår å
slenge på en spinner and call it a day. Det har ikke falt oss inn at
hvordan vi viser lastingen til brukeren kan ha noe særlig å si.
Overraskelsen var derfor stor da vi oppdaget et psykologisk fenomen vi
har valgt å kalle “tids-tøyende lasting”: Forskjellige lasteindikatorer
fører til forskjellig opplevd lastetid. Vi kan endre lastetiden, eller
hvertfall hvor lang lastetiden føles, kun ved å være litt smartere rundt
hvilken type laste indikator vi bruker.</p>
<p>Det finnes en tommelfingerregel for hvilken laste-dings man skal
bruke, basert på lastetiden:</p>
<ol>


<li>&lt; 1 sekund lastetid: Ikke vis noe som helst </li>
<li>&gt; 1 sekund lastetid: Vis en spinner</li> 
<li>&gt; 10 sekunder lastetid: Vis en fremdriftsindikator</li>
</ol>
<p>
<a href="https://www.nngroup.com/articles/response-times-3-important-limits/">(Tallene
er hentet fra NNGroup)</a></p>
<p>Når lastetiden bikker 10 sekunder skal man altså bruke det som på
norsk så flott heter “fremdriftsindikator”. De av oss som ikke har et
Ivar Aasen portrett hengende over peisen hjemme kaller det gjerne bare
progress bar. Og det er i disse tilfellene vi kan gjøre oss litt ekstra
flid, og benytte oss av et knippe smarte triks for å “tøye” den
subjektive tiden vi laster.</p>
<p>I utgangspunktet er bare det å vise en progress bar istedenfor
spinner et overraskende godt triks for brukeropplevelsen. Som professor
David Maister skriver i artikkelen “The Psychology of Waiting
Lines”:</p>

<p>
<blockquote>
Uncertain waits are longer than known, finite waits
<br/>
- David Maister
</blockquote>
</p>

<p>Vi takler usikkerhet dårlig. Det gir oss et snev av angst å ikke vite
når noe er ferdig. Et typisk eksempel som Maister trekker fram i
artikkelen er besøk hos tannlegen. De gangene man kommer før avtalt tid,
er det ikke noe problem å vente frem til tiden som var avtalt. Men i det
øyeblikket minuttviseren passerer avtaletiden blir man et utålmodig vrak
temmelig raskt. Ventetiden før avtalt tid er endelig. Ventetiden etter
har <em>ingen. kjent. ende</em>.</p>
<p>Å vise en progress bar roer ape-hjernen vår ned noen hakk. Den gir
oss en visshet om tiden vi er nødt til å vente.</p>
<p>Men vi trenger ikke stoppe her. Overraskende nok kan vi gjøre enda
mer tids-tøyende akrobatikk ved å bruke noen velvalgte animasjoner.
Chris Harrison, ved “Human Computer Interaction Institute” på Carnegie
Mellon University har, sammen med andre forfattere, skrevet to artikler
om studier de har gjennomført der de undersøkte hvordan vi opplever
tiden når vi ser en progress bar.(<a
href="https://www.chrisharrison.net/projects/progressbars2/ProgressBarsHarrison.pdf">Faster
Progress Bars Manipulating Perceived Duration with Visual
Augmentations</a> og <a
href="https://chrisharrison.net/projects/progressbars/ProgBarHarrison.pdf">Rethinking
the Progress Bar</a>)</p>
<p>I disse studiene testet de flere forskjellige varianter. Her er tre
av dem. Alle er på 5 sekunder. Hvilken synes du virker raskest?</p>


<ProgressBar />
<p>Vanlig progress bar</p>

<ProgressBarAccelerating />
<p>Akselererende progress bar</p>

<ProgressBarCounterAccFlow hasCompleted={false} estimatedDuration={5} makeFaster={true}/>
<p>Akselererende progress bar, med mot-akselererende linjer</p>

<p>Om du er lik folk flest skal tids-tøyningen være størst på den tredje
progress baren. Denne har akselererende fremdrift, samtidig som den har
linjer som beveger seg akselererende bakover i motsatt retning. Ved å
bruke denne vil vi, ifølge studien, føle at tiden er 11% raskere enn om
vi ser en vanlig, helfarget progress bar. Et fint tids-tøyende knep å ha
med seg for å gjøre brukerne (11%) mer fornøyde.</p>
<p>Om du har noen ligenende, tids-tøyende, triks, gi oss gjerne en lyd
på hei@savvy.no</p>
<p>Alle de fire lasteindikatorene er tilgjengelige på vår GitHub <a
href="">her</a>. (Ikke at du trenger det, nå som vi alle har en <a
href="https://simonwillison.net/2023/Mar/27/ai-enhanced-development/">personlig
kode-assistent tilgjengelig 24/7</a>)</p>

    </div>
</div>

    </>
}