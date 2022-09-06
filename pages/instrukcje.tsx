import type { NextPage } from "next";
import Head from 'next/head'
import Footer from "../components/Global/Footer/Footer";
import { LgContainer } from "../components/Global/Containers";
import Title from "../components/Global/Title";
import Instruction from "../components/instrukcje/Instruction";
import Nav from "../components/Global/Navbar/Nav";
import { Input, Select } from "../components/Global/Inputs";
import Button from "../components/Global/Button";
import files from "../pages/database/files.json";
import products from "../pages/database/products.json";
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import PopUpPhoto from "../components/produkt/PopUpPhoto";

const Instrukcje: NextPage = () => {

    const [popup, setPopup] = useState('')
    const [url, setUrl] = useState('/pliki/0');
    const [disabledDownload, setDisabledDownload] = useState(true);
    const [changeHandle, setChangeHandle] = useState("");
    const select1 = useRef<HTMLSelectElement>(null);
    const select2 = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        let currentUrl = ""
        if(changeHandle == "product") {
            currentUrl = "/pliki/"+select1.current!.value+"?language="+select2.current!.value;
            setUrl(currentUrl);
        }
        else if(changeHandle == "language"){
            currentUrl = "/pliki/"+select1.current!.value+"?language="+select2.current!.value;
            setUrl(currentUrl);
            setDisabledDownload(false);
        }
        setChangeHandle("");
    }, [changeHandle])

    return (
        <>
            <Head>
                <title>JFC POLSKA - instrukcje</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Nav />

            <PopUpPhoto popup={popup} setPopup={setPopup} image={ popup } video={ popup }></PopUpPhoto>

            <LgContainer>
                <>
                    <Title main="Instrukcje produktów" secondary="JFC POLSKA"/>
                    <div className="grid grid-cols-2 xl:grid-cols-4">
                        <Instruction movie="6xFYNt2h0bQ" thumb="/images/thumbs/YT-wymiana-filtra-metalowego.jpg" setPopup={setPopup}/>
                    </div>
                    <Title main="Instrukcje w formacie PDF" secondary="JFC POLSKA"/>
                    <div className="grid grid-cols-2 gap-4">
                        
                        <select ref={select1} onChange={ () => setChangeHandle("product") } className={`custom-select font-proxima px-4 py-2 bg-blue-300/[0.07] w-full border-2 border-blue-900/[.09] active:border-blue-300 focus-visible:border-blue-300 focus:border-blue-300/[1] focus:outline-none `}>
                            <option disabled selected value="">--- Wybierz produkt ---</option>
                            { files.map(f => 
                                <option key={ f.id } value={ f.id }>{ products.find(p => p.id == f.product_id)!.name }</option>
                            )}
                        </select>
                        
                        <select ref={select2} onChange={ () => setChangeHandle("language") } className={`custom-select font-proxima px-4 py-2 bg-blue-300/[0.07] w-full border-2 border-blue-900/[.09] active:border-blue-300 focus-visible:border-blue-300 focus:border-blue-300/[1] focus:outline-none `}>
                                <option disabled selected value="">--- Wybierz język ---</option>
                                <option value="PL">PL</option>
                                <option value="ENG">ENG</option>
                        </select>

                        <Link href={ url }>
                            <a className={`w-full col-span-2 my-2` + (disabledDownload ? ` pointer-events-none` : ` pointer-events-auto` )}>
                                <Button type="submit" className="w-full">Wyświetl pliki</Button>
                            </a>
                        </Link>
                    </div>
                </>
            </LgContainer>

           <Footer /> 
        </>
    );
}

export default Instrukcje;