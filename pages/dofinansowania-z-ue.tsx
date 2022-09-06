import type { NextPage } from "next";
import Head from 'next/head'
import Image from "next/image";
import Footer from "../components/Global/Footer/Footer";
import { LgContainer } from "../components/Global/Containers";
import Nav from "../components/Global/Navbar/Nav";
import headerImage from "../public/images/UE-dofinansowania.png";

const Dofinansowania: NextPage = () => {
    return (
        <>
            <Head>
                <title>JFC POLSKA - dofinansowania z UE</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Nav />

            <LgContainer className="mt-[9rem]">
                <>
                    <div className="relative h-16 my-10">
                        <Image alt="image" src={ headerImage } layout="fill" objectFit="contain"/>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 mb-48 text-xl">
                        <div className="border-4 border-blue-300 p-12">
                        <b>Beneficjent JFC Spółka z ograniczoną odpowiedzialnością realizuje projekt dofinansowany z Funduszy Europejskich „Wsparcie przedsiębiorstwa JFC poprzez opracowania nowego projektu wzorniczego” w ramach Programu Operacyjnego Inteligentny Rozwój na lata 2014 – 2020, Poddziałanie 2.3.5</b><br/><br/><br/>

                        Celem projektu jest wprowadzenie do oferty nowego produktu – dwupłaszczowego kontenerowego zbiornika „JFC AdBlue CUBE (3w1)” na AdBlue przeznaczonego dla stacji paliw, powstałego w oparciu o autorski projekt wzorniczy.<br/><br/>

                        <b>Wartość projektu:</b> 608 573,00 PLN<br/><br/>

                        <b>Wkład Funduszy Europejskich:</b> 416 585.00 PLN<br/><br/>

                        <b>Projekt realizowany w okresie</b> 01.01.2019 – 01.06.2021<br/><br/>
                        </div>
                        <div className="border-4 border-blue-300 p-12">
                            <b>Dofinansowania z UE</b><br/><br/><br/>

                            JFC Polska Sp. z o.o. jako dynamicznie rozwijającą się firma korzysta z możliwości jakie daje nam członkostwo w Unii Europejskiej. W ostatnich latach firma z sukcesem korzystała ze dofinansowań unijnych. Udało nam się pozyskać środki z następujących programów:<br/><br/>

                            <ol>
                                <li>
                                    1. Regionalny Program Operacyjny Województwa Mazowieckiego 2007-2013 (RPO WM).  Działanie 1.5 Rozwój przedsiębiorczości. Tytuł projektu: „Wzrost konkurencyjności przedsiębiorstwa JFC Polska Sp. z o.o. poprzez zakup nowoczesnej linii technologicznej wraz z formami do produkcji wyrobów przeznaczonych dla gospodarstw hodowlanych”.<br/><br/>
                                </li>
                                <li>
                                    2. Program Operacyjny Innowacyjna Gospodarka, lata 2007-2013. Działanie 6.1 Paszport do eksportu. Tytuł projektu: „Wdrożenie Planu rozwoju eksportu w firmie JFC Polska Sp. z o.o”.<br/><br/>
                                </li>
                            </ol>
                            Uzyskane środki niewątpliwie przyczyniły się do wzrostu konkurencyjności, poszerzenia oferty handlowej firmy oraz zwiększenia sprzedaży na rynkach eksportowych.
                        </div>
                    </div>
                </>
            </LgContainer>

           <Footer /> 
        </>
    );
}

export default Dofinansowania;