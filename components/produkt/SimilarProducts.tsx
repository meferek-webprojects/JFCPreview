import Link from "next/link";
import Image from 'next/image';
import { LgContainer } from "../Global/Containers";

type Props = {
    products: any[],
}

const SimilarProducts = ({products}: Props) => {
    
    return (
        <LgContainer>
            <div className="my-auto mx-auto py-10 text-center xl:text-left">
                <h5 className="text-3xl leading-7 font-proximabold text-blue-500/[.40] uppercase mb-2">Zobacz więcej</h5>
                <h2 className="text-4xl leading-9 font-prometobold text-blue-700">Podobne produkty</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
                { products.map(p =>
                <Link href={`/produkt/${p.id}`} key={ p.id }>
                    <a className="aspect-square h-fit">
                        <div className="flex flex-col justify-between w-full h-full border-8 border-blue-100 group overflow-hidden cursor-pointer relative">
                            <h4 className="absolute z-10 top-0 right-0 bg-blue-100 px-2 pb-2 text-center font-prometobold text-blue-900 xl:-translate-y-full group-hover:translate-y-0 duration-300 transition-transform easy-in-out">#{ p.code }</h4>
                            <div className="w-4/5 h-4/5 m-auto relative group-hover:scale-[1.1] duration-300 transition-transform">
                                <Image alt={"produkt" + p.id} src={ p.images[0] } layout="fill" objectFit="contain" />
                            </div>
                            <h4 className="absolute bottom-0 inset-x-0 bg-blue-100 px-2 pt-2 text-center font-prometobold text-blue-900 xl:translate-y-full group-hover:translate-y-0 duration-300 transition-transform easy-in-out truncate xl:text-clip xl:overflow-auto xl:whitespace-normal">{ p.name }</h4>
                        </div> 
                    </a>
                </Link>
                )}
            </div>
        </LgContainer>
    );
}

export default SimilarProducts;