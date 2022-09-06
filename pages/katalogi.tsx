import type { NextPage } from "next";
import Head from 'next/head'
import Footer from "../components/Global/Footer/Footer";
import { TitleHeader } from "../components/Global/Headers";
import Title from "../components/Global/Title";
import Nav from "../components/Global/Navbar/Nav";
import headerImage from "../public/images/drone.jpg";
import Catalog from "../components/katalogi/Catalog";
import { MdContainer } from "../components/Global/Containers";

const Katalogi: NextPage = () => {
    return (
        <>
            <Head>
                <title>JFC POLSKA - katalogi</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <Nav />

            <TitleHeader image={ headerImage.src } title="NASZE KATALOGI" />

            <Title main="Pobierz nasz katalog online" secondary="Bądź eko razem z nami" />

            <MdContainer>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
                    <Catalog image="/images/catalogs/bioasekuracja.jpg" pdf="/docs/Bioasekuracja-folder-informacyjny.pdf" />
                    <Catalog image="/images/catalogs/JFCBlue.jpg" pdf="/docs/JFCBlue-folder-PL.pdf" />
                    <Catalog image="/images/catalogs/folder-paliwowy.jpg" pdf="/docs/Folder-Paliwowy-JFC-Polska-PL.pdf" />
                    <Catalog image="/images/catalogs/gospodarka-wodno-sciekowa.jpg" pdf="/docs/Katalog-gospodarka-wodno-ściekowa-2020-high-res.pdf" />
                    <Catalog image="/images/catalogs/donice-dekoracyjne.jpg" pdf="/docs/folder-Donice-dekoracyjne.pdf" />
                    <Catalog image="/images/catalogs/recykling-dom-ogrod.jpg" pdf="/docs/Katalog-Recykling.-dom-i-ogród-online.pdf" />
                    <Catalog image="/images/catalogs/rolnictwo2017.jpg" pdf="/docs/Rolnictwo-JFC-Katalog.pdf" />
                    <Catalog image="/images/catalogs/systemy-dezynfkecji.jpg" pdf="/docs/Systemy-dezynfekcji-JFC-Polska-2020-www.pdf" />
                    <Catalog image="/images/catalogs/wyposazenie-stajni.jpg" pdf="/docs/katolog-Wyposażenie-stajni.pdf" />
                    <Catalog image="/images/catalogs/zbioniki-na-deszczowke.jpg" pdf="/docs/NOWY-KATALOG-DESZCZOWKA-2021-do-pobrania-2.pdf" />
                </div>
            </MdContainer>
           

            <Footer />
        </>
    );
}

export default Katalogi;