import type { NextPage } from "next";
import Head from 'next/head'
import Image from "next/image";
import Footer from "../components/Global/Footer/Footer";
import { LgContainer, MdContainer } from "../components/Global/Containers";
import Nav from "../components/Global/Navbar/Nav";
import Title from "../components/Global/Title";
import { ProductCharacteristics, ProductCharacteristics2 } from "../components/produkt/ProductCharacteristics";
import ContactSeller from "../components/produkt/ContactSeller";
import ProductExtraImages from "../components/produkt/ProductExtraImages";
import Attribs from "../components/Global/Attribs";


const images = [
    "/images/products/rolnictwo/SNG/SNG-1.jpg",
    "/images/products/rolnictwo/SNG/SNG-2.jpg",
    "/images/products/rolnictwo/SNG/SNG-3.jpg",
    "/images/products/rolnictwo/SNG/SNG-4.jpg",
    "/images/products/rolnictwo/SNG/SNG-5.jpg",
    "/images/products/rolnictwo/SNG/SNG-6.jpg",
    "/images/products/rolnictwo/SNG/SNG-7.jpg",
    "/images/products/rolnictwo/SNG/SNG-8.jpg",
    "/images/products/rolnictwo/SNG/SNG-9.jpg",
];

const characteristics = [
    "Prostota systemu przekłada się na niską awaryjność.",
    "Oszczędność energii (sprężarka z silnikiem o mocy około 4kW).",
    "Brak korozji (wykonane z materiałów nierdzewnych i PVC).",
    "Brak konieczności używania mieszadeł, które są bardzo energochłonne w trakcie długotrwałej eksploatacji.",
    "Zwiększenie zawartości azotu do 50% oraz azotanu amonu (saletry amonowej) do 70% suchej masy (potwierdzenie w badaniach laboratoryjnych).",
    "Obniżenie poziomu emisji szkodliwych gazów, stężenia siarkowodoru (H2S), amoniaku (NH3).",
    "Zmniejszenie ryzyka zatrucia zwierząt oraz personelu w trakcie mieszania.",
    "Równomierne wymieszanie składników, jednorodność zawiesiny.",
    "Gnojowica cały czas jest w idealnym stanie do użycia w nisko emisyjnym sprzęcie do rozprowadzania.",
    "Gnojowicy tzn. wóz asenizacyjny, aplikator wtryskowy, płozy wleczone.",
    "Gnojowica o takiej konsystencji bardzo szybko przenika do gleby, co zmniejsza uciążliwość Anawożenia dla ludzi (zapachy).",
    "Łatwa przyswajalność przez rośliny.",
    "Duże przyrosty roślin przy wykorzystaniu nawozu naturalnego.",
    "Ograniczenie stosowania nawozów chemicznych."
];

const sellersId = "3";

const SNG: NextPage = () => {
    
    return (
        <>
            <Head>
                <title>JFC POLSKA - System napowietrzania gnojowicy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Nav />

            <LgContainer>
                <>
                    <Title main="System napowietrzania gnojowicy" secondary="JFC POLSKA"/>
                    <p className="text-xl text-justify px-5 md:px-0">System napowietrzania gnojowicy (zawiesiny) został opracowany jako wysoce efektywna i przyjazna
                        dla środowiska naturalnego metoda utrzymywania gnojowicy w stanie płynnym, która jest zawsze
                        przygotowana do zagospodarowania.
                        Napowietrzanie spowodowane jest grawitacyjnym przemieszczaniem się pęcherzyków powietrza.
                        Dostarczenie dużej ilości tlenu skutkuje intensywnym namnażaniem bakterii tlenowych, które
                        dokonują rozkładu toksyn, kwasów tłuszczowych oraz amoniaku. Tak przygotowana gnojowica ma
                        ciągle płynną konsystencję. Ograniczenie fermentacji sprawia, że w składzie emitowanych gazów
                        jest dużo mniejsze stężenie siarkowodoru (H2S), amoniaku (NH3) oraz innych czynników szkodliwych
                        dla środowiska naturalnego. Odpowiednio zaprojektowana instalacja, dostosowana do konkretnego
                        obiektu pozwala także na upłynnienie gnojowicy w przypadku zaniedbania mieszania, gdy zbrylona
                        gnojowica utworzyła na powierzchni kożuch.
                    </p>
                </>
            </LgContainer>

            <ProductExtraImages images={images}/>

            <ProductCharacteristics2 name="System napowietrzania gnojowicy" characteristics={characteristics} image={images[2]}/>

            <Attribs />

            <ContactSeller sellersId={sellersId}/>

           <Footer /> 
        </>
    );
}

export default SNG;