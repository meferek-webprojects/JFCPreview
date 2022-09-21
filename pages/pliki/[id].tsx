import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React, { useState, useRef } from "react";
import Nav from "../../components/Global/Navbar/Nav";
import files from "../database/files.json";
import products from "../database/products.json";
import departments from "../database/departments.json";
import Footer from "../../components/Global/Footer/Footer";
import Title from "../../components/Global/Title";
import FileBox from "../../components/pliki/FileBox";
import { LgContainer } from "../../components/Global/Containers";
import ProductHero from "../../components/produkt/ProductHero";
import Image from "next/image";
import { Input } from "../../components/Global/Inputs";

type Params = {
	file: {
		id: string,
        product_id: string,
        files: {
            PL: string[]
        }
	}
}

const Pliki = ({ file }: Params) => {
    const [correctPassword, setCorrectPassword] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const product = products.find(p => p.id == file.product_id)!;
    const password = "JFC123";

    return (
        <>
            <Head>  
                <title>{ `PLIKI - `+product.name }</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <Nav />

            <Title main="Pliki oraz dokumentacja" secondary={ product.name }/>

            <LgContainer>
                {/* Może w przyszłości dodać zdjęcie produktu do którego jest instrukcja? */}
                {/* <div className="mx-auto flex">
                    <div className="relative border-[5px] border-blue-100 aspect-square w-32 mb-20">
                        <Image src={product.images[0] } layout="fill" objectFit="contain" alt="" />
                    </div>
                    <p>{ product.name }</p>
                </div> */}
                
                { correctPassword ?
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        { file.files.PL.map(f =>
                            <FileBox key={ f } className="my-auto" name={ f[0] } file={ f[1] }/>
                        )}
                    </div>
                :
                    <input ref={inputRef} onChange={() => { inputRef.current!.value.toUpperCase() == password ? setCorrectPassword(true) : null}} placeholder="Podaj hasło by wyświetlić pliki" className={`font-proxima px-4 py-2 bg-blue-300/[0.07] w-full border-2 border-blue-900/[.09] active:border-blue-300 focus-visible:border-blue-300 focus:border-blue-300/[1] focus:outline-none file:font-proxima file:border-1 file:border-blue-500/[0.1] file:bg-white file:mr-5 file:px-4 file:py-1 file:text-blue-900 file:m-0 file:hover:bg-blue-700/[0.1] file:cursor-pointer file:transition file:duration-300 file:easy-in-out`}/>
                }
            </LgContainer>

            <Footer />
        </>
    );
}
export default Pliki;

export const getStaticPaths: GetStaticPaths = () => {

    const paths = files.map(file => {
        return {
            params: { id: file.id }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {

    const params = context.params!;
    
    const id = params.id;

    const file = files.find(p => p.id == id);
    
    return {
        props: { file }
    }
}