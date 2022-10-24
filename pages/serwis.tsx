import type { NextPage } from "next";
import Head from 'next/head'
import Footer from "../components/Global/Footer/Footer";
import ServiceForm from "../components/serwis/ServiceForm";
import { Header, TitleHeader } from "../components/Global/Headers";
import Nav from "../components/Global/Navbar/Nav";
import coverImage from "../public/images/serwis-obsluga.jpg";
import { SmContainer, MdContainer, LgContainer, XlContainer } from '../components/Global/Containers';
import Title from "../components/Global/Title";


const Serwis: NextPage = () => {

    return (
        <>
            <Head>
                <title>JFC POLSKA - serwis</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <Nav />

            <Header title="serwis" image={ coverImage.src } />

            <Title main="Zgłoś swoją usterkę" secondary="Formularz serwisowy JFC POLSKA"></Title>

            <LgContainer>
                <ServiceForm />
            </LgContainer>

            <Footer />
        </>
    );
}

export default Serwis;