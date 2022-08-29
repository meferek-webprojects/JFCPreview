import { GetStaticPaths, GetStaticProps } from "next";
import Image from 'next/image';
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../../components/Global/Footer/Footer";
import { MdContainer, SmContainer } from "../../components/Global/Containers";
import DownloadCatalogs from "../../components/Global/DownloadCatalogs";
import { DepartmentHeader, Header } from "../../components/Global/Headers";
import SubcategoryBox from "../../components/dzial/SubcategoryBox";
import Title from "../../components/Global/Title";
import Nav from "../../components/Global/Navbar/Nav";
import departments from "../database/departments.json";
import products from "../database/products.json";

type Params = {
	department: {
		id: string,
		name: string,
		urlName: string,
		title: string,
        description: string,
        keywords: string,
        heroImage: string,
        subcategory?: string[]
	}
}

const Dzial = ({ department }: Params) => {

    const thisProducts = products.filter(product => product.department_id.split(', ').includes(department.id));
    const title = `JFC POLSKA - ${department.name}`;

    return (
        <>
            <Head>  
                <title>{ title }</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={ department.description } />
                <meta name="keywords" content={ department.keywords } />
            </Head>
            
            <Nav type="static"/>

            <DepartmentHeader image={ "/images/departments/" + department.heroImage } title={ department.name } />

            { department.subcategory ? 
                <MdContainer>
                    <Title main="Wybierz podkategorię" secondary={ department.name }></Title>
                    <div className="flex flex-wrap text-center gap-2 justify-center">
                        { department.subcategory.map(sub =>
                            <SubcategoryBox key={sub} subcategory={ sub }/>
                        )}
                    </div>
                </MdContainer>
            : null }

            { department.subcategory ? 
                department.subcategory.map(subcategory => 
                    <SmContainer key={ subcategory }>
                        <Title main={ subcategory } secondary={ department.name } id={ subcategory }></Title>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 justify-center">
                            { thisProducts.filter(product => product.subcategory == subcategory).map((product) => 
                                <Link key={ product.id } href={`/produkt/${product.id}`}>
                                    <a className="aspect-square h-fit">
                                        <div className="flex flex-col justify-between w-full h-full border-8 border-blue-100 group overflow-hidden cursor-pointer relative">
                                            <h4 className="absolute z-10 top-0 right-0 bg-blue-100 px-2 pb-2 text-center font-prometobold text-blue-900 xl:-translate-y-full group-hover:translate-y-0 duration-300 transition-transform easy-in-out">#{ product.code }</h4>
                                            <div className="w-4/5 h-4/5 m-auto relative group-hover:scale-[1.1] duration-300 transition-transform">
                                                <Image alt={"produkt" + product.id} src={ product.images[0] } quality="50" layout="fill" loading="eager" objectFit="contain" />
                                            </div>
                                            <h4 className="absolute bottom-0 inset-x-0 bg-blue-100 px-2 pt-2 text-center font-prometobold text-blue-900 xl:translate-y-full group-hover:translate-y-0 duration-300 transition-transform easy-in-out truncate xl:text-clip xl:overflow-auto xl:whitespace-normal">{ parseInt(product.id) >= 52 &&parseInt(product.id) <= 69 ? product.capacity+" "+product.name : product.name }</h4>
                                        </div> 
                                    </a>
                                </Link>
                            )}
                        </div>
                    </SmContainer>
                )
            : 
                <SmContainer className="mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 justify-center">
                        { thisProducts.map((product) => 
                            <Link key={ product.id } href={`/produkt/${product.id}`}>
                                <a className="aspect-square h-fit">
                                    <div className="flex flex-col justify-between w-full h-full border-8 border-blue-100 group overflow-hidden cursor-pointer relative">
                                        <h4 className="absolute z-10 top-0 right-0 bg-blue-100 px-2 pb-2 text-center font-prometobold text-blue-900 xl:-translate-y-full group-hover:translate-y-0 duration-300 transition-transform easy-in-out">#{ product.code }</h4>
                                        <div className="w-4/5 h-4/5 m-auto relative group-hover:scale-[1.1] duration-300 transition-transform">
                                            <Image alt={"produkt" + product.id} src={ product.images[0] } layout="fill" objectFit="contain" />
                                        </div>
                                        <h4 className="absolute bottom-0 inset-x-0 bg-blue-100 px-2 pt-2 text-center font-prometobold text-blue-900 xl:translate-y-full group-hover:translate-y-0 duration-300 transition-transform easy-in-out truncate xl:text-clip xl:overflow-auto xl:whitespace-normal">{ product.name }</h4>
                                    </div>
                                </a>
                            </Link>
                        )}
                    </div>
                </SmContainer>
            }

            <DownloadCatalogs />

            <Footer />
        </>
    );
}

export default Dzial;

export const getStaticPaths: GetStaticPaths = () => {

    const paths = departments.map(department => {
        return {
            params: { urlName: department.urlName }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {

    const params = context.params!;
    
    const urlName = params.urlName;

    const department = departments.find(d => d.urlName == urlName);
    
    return {
        props: { department }
    }
}