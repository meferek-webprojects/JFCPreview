import type { NextPage } from "next";
import Head from 'next/head'
import Image from "next/image";
import Footer from "../components/Global/Footer/Footer";
import { LgContainer, MdContainer } from "../components/Global/Containers";
import Nav from "../components/Global/Navbar/Nav";
import headerImage from "../public/images/UE-dofinansowania.png";
import Title from "../components/Global/Title";
import { ProductCharacteristics, ProductCharacteristics2 } from "../components/produkt/ProductCharacteristics";
import ContactSeller from "../components/produkt/ContactSeller";
import ProductExtraImages from "../components/produkt/ProductExtraImages";
import Attribs from "../components/Global/Attribs";


const images = [
    "/images/products/rolnictwo/HZO/HZO-5.png",
    "/images/products/rolnictwo/HZO/HZO-6.png",
    "/images/products/rolnictwo/HZO/HZO-7.png",
    "/images/products/rolnictwo/HZO/HZO-8.png",
    "/images/products/rolnictwo/HZO/HZO-9.png",
];

const characteristics = [
    "Może być zamontowany zarówno w nowych, jak i w istniejących już budynkach inwentarskich.",
    "Posiada chroniony patentem układ mechaniczny,urządzenie wyzwalające (wyłączające).",
    "Posiada opatentowane urządzenie czyszczące obciążone sprężyną;.",
    "Posiada przekaźnik czasowy i przełącznik dla każdego korytarza.",
    "Kontroluje ruch zgarniaczy w przypadku zablokowania.",
    "Może kontrolować maksymalnie 6 korytarzy na tym samy panelu sterowania.",
    "Szybkość zgarniaczy wynosi 3.0-3.5 m/min",
];

const sellersId = "3";

const Zgarniacz: NextPage = () => {
    
    return (
        <>
            <Head>
                <title>JFC POLSKA - Hydrauliczny zgarniacz obornika</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Nav />

            <LgContainer>
                <>
                    <Title main="Hydrauliczny zgarniacz obornika" secondary="JFC POLSKA"/>
                    <p className="text-xl text-justify px-5 md:px-0">Hydrauliczny system zgarniaczy obornika jest prostym i niezawodnym systemem zgarniającym przeznaczonym
                    dla otwartych korytarzy w oborach wolnostanowiskowych, chlewniach i kurnikach. Może on pracować
                    w ekstremalnych warunkach, od bardzo niskich do wysokich temperatur.
                    Zgarniacz napędza cichy zasilacz hydrauliczny połączony z siłownikami hydraulicznymi umieszczonymi
                    w każdym kanale. Jeden zasilacz hydrauliczny może obsługiwać do 6 kanałów zgarniających. Siłownik
                    hydrauliczny wprawia w ruch szynę, która poruszając się ruchem posuwisto-zwrotnym przesuwa element
                    zgarniający na całej długości kanału. Element zgarniający przesuwa się skokowo, zatrzymuje się na kilka
                    sekund, aby nie stresować zwierząt (mogą one łatwo przejść nad nim). System sterowany jest przy
                    pomocy łatwego w obsłudze panelu. Każdy kanał ma swój oddzielny czasomierz oraz wyłącznik. Ich prace
                    można programować indywidualnie lub sekwencyjnie. Można również ustawić zatrzymanie się zgarniacza
                    w dowolnym miejscu</p>
                </>
            </LgContainer>

            <ProductExtraImages images={images}/>

            <ProductCharacteristics2 name="Hydrauliczny Zgarniacz Obornika" characteristics={characteristics} image={images[0]}/>

            <Attribs />

            <MdContainer className="mt-10 lg:mt-20 xl:mt-32 text-center">
                <div className="grid grid-cols-2">
                    <div className="col">
                        <p className="text-3xl font-prometobold text-blue-700">
                        Zgarniacz linowy
                        </p>
                        <div className="w-full aspect-square relative mt-10">
                            <Image alt="" src={ images[3] } layout="fill" objectFit="contain" quality="60"/>
                        </div>
                    </div>
                    <div className="col">
                        <p className="text-3xl font-prometobold text-blue-700">
                        Zgarniacz szynowy
                        </p>
                        <div className="w-full aspect-square relative mt-10">
                            <Image alt="" src={ images[4] } layout="fill" objectFit="contain" quality="60"/>
                        </div>
                    </div>
                </div>
            </MdContainer>

            <ContactSeller sellersId={sellersId}/>

           <Footer /> 
        </>
    );
}

export default Zgarniacz;