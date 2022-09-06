import type { NextPage } from "next";
import Head from 'next/head'
import Footer from "../components/Global/Footer/Footer";
import ContactForm from "../components/kontakt/ContactForm";
import ContactIcons from "../components/kontakt/ContactIcons";
import { LgContainer } from "../components/Global/Containers";
import { Header } from "../components/Global/Headers";
import Title from "../components/Global/Title";
import Nav from "../components/Global/Navbar/Nav";
import headerImage from "../public/images/drone.jpg";

const Kontakt: NextPage = () => {
    return (
        <>
            <Head>
                <title>JFC POLSKA - kontakt</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <Nav />

            <Header image={ headerImage.src } title="Strona kontaktowa"/>

            <Title main="Skontaktuj się z nami" secondary="Zapraszamy do kontaktu"/>

            <LgContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <ContactForm />
                    <div className="border-2 border-blue-500 box-border overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.482973178157!2d21.322992016008577!3d52.470390447656655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471edd47c0f1cea5%3A0x80057137c89f6708!2sJFC%20Polska%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1658930953277!5m2!1spl!2spl" width="100%" height="100%" style={{border: "none", minHeight: "400px"}} loading="lazy"></iframe>
                    </div>
                </div>
            </LgContainer>

            <ContactIcons />

            <Footer />
        </>
    );
}

export default Kontakt;