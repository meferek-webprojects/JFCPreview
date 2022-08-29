import type { NextPage } from 'next'
import Nav from '../components/Global/Navbar/Nav'
import Hero from '../components/index/Hero'
import Head from 'next/head'
import Title from '../components/Global/Title';
import { SmContainer, LgContainer } from '../components/Global/Containers';
import About from '../components/index/About';
import Departments from '../components/index/Departments';
import Popular from '../components/index/Popular';
import Counter from '../components/index/Counter';
import Attribs from '../components/Global/Attribs';
import Certs from '../components/index/Certs';
import Footer from '../components/Global/Footer/Footer';
import DownloadCatalogs from '../components/Global/DownloadCatalogs';
import ContactUs from '../components/Global/ContactUs';

const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>JFC POLSKA</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width, height=device-height" />
                <meta name="author" content="Mateusz Krysiak & Krzysztof Stępniak"/>
                <meta name="description" content="JFC jest miedzynarodową firmą projektującą i wdrażażającą innowacyjne rozwiązania w zakresie bezpiecznego magazynowania i dystrybucji oleju napędowego, opałowego oraz AdBlue®. Produkty JFC są używane w ponad 40 krajach na świecie, osiągając dominującą pozycję na rynku."/>
                <meta name="keywords" content="zbiorniki, rolnictwo, donice dekoracyjne, polietylen, higiena i bezpieczeństwo, systemy dezynfekcji, gromadzenie wody, zbiorniki na deszczówkę, recykling, boje, poidła, karmidła"/>
            </Head>

            <Nav />

            <Hero />

            <Title main="Poznaj JFC POLSKA" secondary="Doświadzcenie i innowacja" id="o-firmie"/>
        
            <LgContainer>
                <About />
            </LgContainer>

            <Title main="Zobacz nasze wszystkie produkty" secondary="Poznaj całą gamę produktów JFC" id="produkty-i-uslugi"/>
        
            <SmContainer>
                <Departments />
            </SmContainer>

            <Attribs />

            <Title main="Najpopularniejsze wyszukiwania" secondary="Zobacz nasze najpopularniejsze produkty"/>

            <SmContainer>
                <Popular/>
            </SmContainer>

            <Counter />

            <Title main="Jakość i bezpieczeństwo udowodnione certyfikatami" secondary="Twoje bezpieczeństwo na naszej uwadze"/>

            <Certs />

            <DownloadCatalogs />

            <ContactUs />

            <Footer />
        </>
    )
}

export default Home;
