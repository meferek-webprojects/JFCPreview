import type { NextPage } from "next";
import Head from 'next/head'
import Footer from "../components/Global/Footer/Footer";
import Button from "../components/Global/Button";
import { LgContainer, XlContainer } from "../components/Global/Containers";
import Nav from "../components/Global/Navbar/Nav";

const OWS: NextPage = () => {
    return (
        <>
            <Head>
                <title>JFC POLSKA - ogólne warunki sprzedaży</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Nav type="static"/>

            <embed src="/docs/OWS-JFCPOLSKA.pdf" className="w-full h-[calc(100vh-102px)]" type="application/pdf"></embed>
        </>
    );
}

export default OWS;