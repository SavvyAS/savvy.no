import Head from 'next/head'
import styles from './index.module.scss'
import ProgressBar from '@/components/LoadingIndicators/ProgressBar'
import Spinner from '@/components/LoadingIndicators/Spinner'
import TextLoader from '@/components/LoadingIndicators/TextLoader'
import { useEffect, useState } from 'react'
import ProgressBarAccelerating from '@/components/LoadingIndicators/ProgressBarAccelerating'
import ProgressBarCounterAccFlow from '@/components/LoadingIndicators/ProgressBarAccFlow'
import LoadingContent from '@/components/LoadingContent/LoadingContent'
export default function Page() {

    const [hasCompleted, setHasCompleted] = useState(false)
    // useEffect(()=> {setTimeout(() => {setHasCompleted(true)}, 6000)}, [])

    return <>
    <Head>
        <title>Progress Bar bloggpost</title>
    </Head>
    <style>
        {`h2 { margin-bottom: 10px;}`}
    </style>
    <div className="overflow-hidden">
        <div className="container">
        <h1 id="gjør-nettsiden-din-12-raskere-enn-den-er">Gjør nettsiden din 12%
raskere enn den er!</h1>
<p>Når man mekker nettsider så vil man gjerne at de skal oppleves som
raske og responsive. Det er mye man kan gjøre for å sørge for at
systemene man bygger er så raske som mulig, men ofte når man
begrensninger man ikke kommer seg rundt. På et punkt er nettsiden så
rask som den kommer til å bli.</p>
<p>Så hva gjør man? Når nettsiden er så kjapp det er mulig å få den, men
man fremdeles ønsker å forbedre brukeropplevelsen?</p>
<p>På engelsk har man uttrykket “A watched pot never boils”. Dette
illustrerer et viktig poeng: Tid oppfattes ulikt avhengig av
situasjonen. Selv om en gryte bruker like lang tid uansett på å koke
opp, oppleves ventetiden forskjellig avhengig av hva man fyller
ventetiden med. Man kan referere til den faktiske tiden man må vente som
den reelle ventetiden, mens vår subjektive opplevelse av tid kan kalles
oppfattet ventetid.</p>
<p>Derfor kan det være lurt å være bevisst på hva man fyller ventetiden
til en bruker med. Hvis man fyller ventetiden til en bruker med feil
innhold så vil brukeren oppleve nettsiden som treigere enn nødvendig.
Valget av lasteindikator er derfor viktig.</p>
<p>Ulike lasteindikatorer vil spille inn på brukeres oppfattede
ventetid. La oss derfor gå gjennom de tre vanligste alternativene.</p>
<h2 id="statisk-tekst">1. Statisk tekst</h2>


<LoadingContent loadingIndicator={<TextLoader/>} loadingTime={2000}>
<p>I “The Pshychology of Waiting Lines” <a href="#fn1"
className="footnote-ref" id="fnref1" role="doc-noteref"><sup>1</sup></a>
forklarer professor David Maister at “Occupied Time Feels Shorter Than
Unoccupied Time”. Dette er et faktum som flittig blir utnyttet av
flyselskaper. Om du noen gang har sittet i et fly hvor det har oppstått
forsinkelser har du kanskje lagt merke til at piloten kontinuerlig
kunngjør over høytalerne om tåke på rullebanen, forsinkelse i bagasjen
eller andre konkrete hendelser som fører til forsinkelsene. Dette er
nettop fordi vi oppfatter forsinkelser og ventetid som kortere om vi har
en forklaring på hvorfor vi er nødt til å vente.</p>
<p>Ikke overraskende er derfor den aller enkleste indikatoren på
lastetid å vise statisk tekst. Tekst som “Laster data…” eller “Vennligs
vent. Vi behandler forespørselen din” indikerer til brukeren at
applikasjonen ikke har kræsjet, men bare trenger litt tid på å gjøre
operasjonen. Vi informerer brukeren om hva som foregår, som får
ventetiden til å føles kortere.</p>
<p>Problemet med statisk tekst er at det er umulig å vite om
applikasjonen henger eller har kræsjet. Ingenting indikerer at det
faktisk jobbes med forspørselen din i bakgrunnen. I samme artikkel
nevner Maister at “angst (eng: anxiety) fører til at ventingen virker
lengre” (TODO: Bytt til ENGELSK). En statisk tekst kan se ut som
applikasjonen har fryst, og gjør oss urolige for at forespørselen vår
ikke blir jobbet med.</p>
<p>Vi må finne på noe bedre. Så hvorfor ikke bruke alle utviklers
favoritt lasteindikator: spinneren.</p>


</LoadingContent>



<h2 id="spinner-en-sikker-vinner">2. Spinner: En sikker vinner?</h2>

<LoadingContent loadingIndicator={<Spinner/>} loadingTime={2000}>

<p>En spinner er en animasjon som gjentas i det uendelige. Et typisk
eksempel er <a
href="https://en.wikipedia.org/wiki/Spinning_pinwheel">“badeballen” på
Mac</a>.</p>
<p>En spinner indikerer til brukeren at noe foregår i bakgrunnen.
Applikasjonen virker ikke fryst, og fjerner uroligheten vår for at noe
faktisk jobbes med.</p>
<p>Sasser (et al) <a href="#fn2" className="footnote-ref" id="fnref2"
role="doc-noteref"><sup>2</sup></a> forteller om en hotellkjede som
opplevde klager på ventetiden på heisene deres. I stedet for å faktisk
korte ned den reelle ventetiden på heisene, ble det installert speil
utenfor heisdørene. Dette gjorde at gjestene fylte ventetiden med å se
på seg selv i speilet. Dette førte til en markant nedgang i antall
klager på de treige heisene. På samme måte som speilene fungerte som en
distraksjon for hotellgjestene, fungerer en spinner som en distraksjon
for brukerne av en nettside.</p>
<p>Spinnere er også enkle for utviklere å implementere, og føles
“korrekte” å bruke. I de aller fleste tilfeller vil lastetiden på
brukerens maskin være uviss. Vi som utviklere <em>vet</em> dette og den
ærligste feedbacken vi da kan gi er en spinner.</p>
<p>Ulempen med spinners er at de ikke gir noen indikasjon på hvor lang
tid man må vente. Dette kan skape frustrasjon ved lengre ventetider. For
å løse dette kan man ta i bruk en “progress bar”.</p>

</LoadingContent>



<h2 id="progress-bar">3. Progress bar</h2>

<LoadingContent loadingIndicator={<ProgressBar hasCompleted={hasCompleted} estimatedDuration={2000}/>} loadingTime={2000}>

<p>En progress bar er en lasteindikator som kontinuerlig gir brukeren
informasjon om hvor stor del av ventettiden er unnagjort. Man kan se et
typisk eksempel på en progress bar, når man laster ned et spill på
Steam. [GIF]</p>
<p>Til forskjell fra andre lasteindikatorer, gir progress baren en
indikasjon på hvor lenge det er igjen å vente. Dette har en positiv
invirkning på oppfattet ventetid. Maister<a href="#fn3"
className="footnote-ref" id="fnref3" role="doc-noteref"><sup>3</sup></a>
beskriver det slik: “Uncertain Waits Are Longer than Known, Finite
Waits”.</p>
<p>Dette fenomenet tydeliggjøres i situasjoner hvor man befinner seg på
et venterom, eksempelvis hos tannlegen. Om man ankommer tretti minutter
før tiden, er det som regel ikke noe problem å vente disse tretti
minuttene. Man vet at ventetiden minimum vil være en halvtime. Men i det
øyeblikket tidspunktet for avtalen har passert blir man utålmodig
temmelig kjapt, og irritasjonen øker. Ventetiden før avtalt tid er
endelig. Ventetiden etter har ingen kjent ende.</p>
<p>Utfordringen med progress bar, som utvikler, er at den faktiske
ventetiden ofte er ukjent. Man er avhengig av å måtte estimere
ventetiden på forhånd. En god kilde til å sette et godt estimat er å ta
i bruk logger fra produksjonsmiljøet. Moderne verktøy gjør disse dataene
lett tilgjengelig, og lar deg enkelt aggregere flere datapunkter over
tid. Om man ikke har dette tilgjengelig i systemet man jobber med kan
man alltids bruke <a
href="https://developer.chrome.com/docs/devtools/network/">Nettverks-verktøyet
i f.eks. Chrome Developer Tools</a>.</p>
<p>Når man vet dette kan progress baren bevege seg fremover med en jevn
hastighet som vil nå 100 prosent ila. tiden som er estimert. Dersom
operasjonen man venter på fullfører på kortere enn estimert, kan man
fullføre animasjonen med en gang. Dette kan se slik ut:</p>

    
<ProgressBarAccelerating/>

<ProgressBarCounterAccFlow makeFaster hasCompleted={false} estimatedDuration={4000} />
    
<p>Dersom operasjonen tar lengre tid enn estimert, må man stoppe
animasjonen på et punkt før 100 prosent. Dette kan se slik ut:</p>
<p>[LAST E KOMPONENT]</p>
<p>Underestimering er noe man helst vil unngå. Da havner man i samme
knipe som når avtaletiden på tannlegekontoret er passert: Gjenstående
tid er ukjent.</p>
<p>Vi vil heller overestimere: Å se en progress bar som akselererer
[KILDE] oppeleves nemlig som mer positivt, enn en som stopper opp.</p>
<p>Det finnes flere måter å velge et estimat på, og dette vil variere
fra system til system. Men en god tommelfingerregel er å ta i bruk noen
av de øvre prosentilene. Eksempelvis kan man bruke 90ende prosentil som
estimat. Da bør 90 prosent av brukerene få et tall som ikke er
underestimert, og heller ikke overdrevent overestimert. (Gitt at
ventetiden er uniformt fordelt.)</p>

</LoadingContent>
<p>[Kanskje: Nevne adaptive loading?]</p>
<hr />
<section id="footnotes" className="footnotes footnotes-end-of-document"
role="doc-endnotes">
<hr />
<ol>
<li id="fn1"><p>David Maister (1985), The Psychology of waiting Lines.
<a
href="https://davidmaister.com/articles/the-psychology-of-waiting-lines/">DavidMaister.com</a><a
href="#fnref1" className="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn2"><p>Sasser, W.E., J. Olsen, and D.D. Wyckoff
(1979), _Management of Service Operations_: Text, Cases and Readings.
New York: Allyn and Bacon.<a href="#fnref2" className="footnote-back"
role="doc-backlink">↩︎</a></p></li>
<li id="fn3"><p>David Maister (1985), The Psychology of waiting Lines.
<a
href="https://davidmaister.com/articles/the-psychology-of-waiting-lines/">DavidMaister.com</a><a
href="#fnref3" className="footnote-back" role="doc-backlink">↩︎</a></p></li>
</ol>
</section>
        </div>
    </div>
    </>
}
