import Image from "next/image";
import { LgContainer } from "../Global/Containers";
import PopUpPhoto from "./PopUpPhoto";
import { useState } from 'react';
import Link from "next/link";

type Props = {
    images: string[],
    movie?: string,
}

const ProductExtraImages = ({ images, movie }: Props) => {
    const [popup, setPopup] = useState('')

    return (
        <>
            <PopUpPhoto popup={popup} setPopup={setPopup} image={ popup }></PopUpPhoto>
            
            <LgContainer className="mt-6 md:mt-14 mx-1 sm:mx-4">
                <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-8 w-full gap-4">
                    { movie !== "URLtoMovie" && movie !== undefined ?
                        <Link href="#movie">
                            <div className="bg-blue-500 text-white flex text-center cursor-pointer group aspect-square">
                                <div className="mx-auto my-auto font-prometo group-hover:scale-[1.1] transition-all duration-300 easy-in-out">
                                    <i className="bi bi-film text-3xl md:text-5xl"></i><br/>
                                    <p className="mt-1">FILM</p> 
                                </div>
                            </div>
                        </Link> 
                    : null }
                    <div className="bg-blue-500 text-white flex text-center aspect-square">
                        <div className="mx-auto my-auto font-prometo">
                            <i className="bi bi-images text-3xl md:text-5xl"></i><br/>
                            <p className="mt-1">GALERIA</p> 
                        </div>
                    </div>
                    {images.map(image =>
                        <div key={image} className="w-full aspect-square relative cursor-pointer border-[5px] border-blue-100 group" onClick={() => setPopup(image)}>
                            <Image quality="50" alt="" src={image} layout="fill" objectFit="cover" className="group-hover:brightness-[1.1] group-hover:scale-[1.1] transition-all duration-300 easy-in-out"/>
                        </div>
                    )}
                </div>
            </LgContainer>
        </>
    );
}

export default ProductExtraImages;