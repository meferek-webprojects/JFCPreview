import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
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

    const product = products.find(p => p.id == file.product_id)!;

    return (
        <>
            <Head>  
                <title>{ `PLIKI - `+product.name }</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <Nav type="static"/>

            <Title main="Pliki oraz dokumentacja" secondary={ product.name }/>

            <LgContainer>
                {/* Może w przyszłości dodać zdjęcie produktu do którego jest instrukcja? */}
                {/* <div className="mx-auto flex">
                    <div className="relative border-[5px] border-blue-100 aspect-square w-32 mb-20">
                        <Image src={product.images[0] } layout="fill" objectFit="contain" alt="" />
                    </div>
                    <p>{ product.name }</p>
                </div> */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    { file.files.PL.map(f =>
                        <FileBox key={ f } className="my-auto" name={ f[0] } file={ f[1] }/>
                    )}
                </div>
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