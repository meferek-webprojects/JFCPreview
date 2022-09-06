import type { NextPage } from "next";
import Image from "next/image";
import Head from 'next/head';
import Footer from "../components/Global/Footer/Footer";
import Title from "../components/Global/Title";
import Nav from "../components/Global/Navbar/Nav";
import { LgContainer } from "../components/Global/Containers";
import ProdukcjaKontraktowaImage from "../public/images/projektowanie-i-produkcja-kontraktowa.jpg";
import ContactUs from "../components/Global/ContactUs";

const ProdukcjaKontraktowa: NextPage = () => {
    return (
        <>
            <Head>
                <title>JFC POLSKA - produkcja kontraktowa</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <Nav />

            <Title main="Projektowanie oraz produkcja form na zlecenie" secondary="Wytwarzanie metodą formowania rotacyjnego" className="px-40"/>

            <LgContainer className="mb-10 md:mb-20 xl:mb-32">
                <div className="block lg:grid lg:grid-cols-2">
                    <div className="xl:min-h-[40rem] min-h-[35rem] h-full w-full relative">
                        <Image alt="image" src={ ProdukcjaKontraktowaImage } layout="fill" objectFit="cover" objectPosition="center" quality="75"/>
                    </div>
                    <div className="w-full flex bg-blue-100">
                        <p className="p-12 my-auto font-proxima text-lg xl:text-xl xl:leading-loose leading-loose">
                            Dzięki ponad 30-letniemu doświadczeniu w zakresie formowania rotacyjnego posiadamy wiedzę projektową i produkcyjną, aby oferować usługi projektowania produktów biznesowych i kontraktowych.<br/><br/>

                            Angażujemy się w nowy projekt na każdym etapie. Od pomysłu i nowych koncepcji projektowych, poprzez rozwój produktu, obrazowanie 3D, wykonanie form, prototyp, aż po pełną produkcję. Nasi klienci pochodzą z różnych branż. Od małych firm rozpoczynających działalność po duże międzynarodowe marki.<br/><br/>

                            Porozmawiaj dziś z naszymi inżynierami i pozwól nam pomóc w realizacji Twojego pomysłu na nowy produkt lub komponent.<br/><br/>
                        </p>
                    </div>
                </div>
            </LgContainer>

            <ContactUs />

            <Footer />
        </>
    );
}

export default ProdukcjaKontraktowa;