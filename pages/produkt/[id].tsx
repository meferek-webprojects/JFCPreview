import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Footer from "../../components/Global/Footer/Footer";
import Attribs from "../../components/Global/Attribs";
import Nav from "../../components/Global/Navbar/Nav";
import ContactSeller from "../../components/produkt/ContactSeller";
import { ProductCharacteristics, ProductCharacteristics2 } from "../../components/produkt/ProductCharacteristics";
import ProductAttribs from "../../components/produkt/ProductAttribs";
import ProductEq from "../../components/produkt/ProductEq";
import ProductExtraEq from "../../components/produkt/ProductExtraEq";
import ProductEqTabs from "../../components/produkt/ProductEqTabs";
import ProductExtraImages from "../../components/produkt/ProductExtraImages";
import SimilarProducts from "../../components/produkt/SimilarProducts";
import ProductHero from "../../components/produkt/ProductHero";
import ProductMovie from "../../components/produkt/ProductMovie";
import products from "../database/products.json";
import departments from "../database/departments.json";

type Params = {
	product: {
		id: string,
		name: string,
		code: string,
        description: string,
        department_id: string,
        capacity: string,
        images: string[],
        extraImages: string[],
        equipment: string[],
        sellers_id: string[],
        extraEquipment: string[],
        characteristics: string[],
        attribs?: string[],
        attribImage?: string,
        movie: string,
        dimensions: string,
        subcategory: string,
	}
}

const Produkt = ({ product }: Params) => {

    let similarProducts;
    
    if(product.subcategory){
        similarProducts = products.filter(p => p.subcategory == product.subcategory && p.id != product.id).slice(0, 6)
    }else{
        similarProducts = products.filter(p => p.department_id == product.department_id && p.id != product.id).slice(0, 6)
    }

    let charDim = false;
    let eqDim = false;

    if (product.equipment){
        eqDim = true;
    }
    else if (product.characteristics){
        charDim = true;
    }

    const title = `JFC POLSKA - ${product.name}`;
    
    return (
        <>
            <Head>  
                <title>{ title }</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={ departments.find(d => d.id == product.department_id.split(', ')[0])!.description } />
                <meta name="keywords" content={ departments.find(d => d.id == product.department_id.split(', ')[0])!.keywords } />
            </Head>
            
            <Nav type="static"/>

            <ProductHero capacity={ product.capacity } name={ product.name } description={ product.description } code={ product.code } photos={ product.images } />

            <ProductExtraImages images={ product.images.concat(product.extraImages).filter(image => image != "") } movie={ product.movie }/>

            { product.equipment && product.extraEquipment ? 
                <ProductEqTabs image={ product.images[0] } equipment={ product.equipment } extraEquipment={ product.extraEquipment } name={ product.name } />
            : null }

            <Attribs />

            { product.equipment && !product.extraEquipment ?
                <ProductEq image={ product.images[0] } name={ product.name } equipment={ product.equipment } dimensions={ eqDim ? product.dimensions : undefined } />
            : null }

            { product.extraEquipment && !product.equipment ?
                <ProductExtraEq image={ product.images[0] } name={ product.name } extraEquipment={ product.extraEquipment } />
            : null }

            { product.characteristics ? 
                product.extraImages[0] ?
                    <ProductCharacteristics2 characteristics={ product.characteristics }  image={ product.extraImages[0] } name={ product.name } dimensions={ charDim ? product.dimensions : undefined } />
                :
                    <ProductCharacteristics characteristics={ product.characteristics }  image={ product.images[0] } name={ product.name } dimensions={ charDim ? product.dimensions : undefined } />
            : null }
            
            { product.attribs ?
                <ProductAttribs attribs={ product.attribs } image={ product.attribImage ? product.attribImage : product.images[0] } />
            : null }

            { product.movie !== "URLtoMovie" && product.movie !== undefined ? 
                <ProductMovie movie={ product.movie } />
            : null }

            <ContactSeller sellersId={ product.sellers_id } />

            { similarProducts.length == 6 ? 
                <SimilarProducts products={similarProducts} />
            : null }

            <Footer />

        </>
    );
}
export default Produkt;

export const getStaticPaths: GetStaticPaths = () => {

    const paths = products.map(product => {
        return {
            params: { id: product.id }
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

    const product = products.find(p => p.id == id);
    
    return {
        props: { product }
    }
}