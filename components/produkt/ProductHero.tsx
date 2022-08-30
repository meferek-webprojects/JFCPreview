import Image from "next/image";
import { LgContainer } from "../Global/Containers";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
    name: string,
    description: string,
    code: string,
    photos: string[],
    capacity: string,
    dimensions?: string,
}

const ProductHero = ({name, description, code, photos, capacity, dimensions }: Props) => {
    return (
        <LgContainer className="mx-0 sm:mx-4">
            <>
                <div className="p-5 mt-6 sm:mt-20 bg-blue-100 flex flex-col 2xl:flex-row">
                    <div className="w-4/5 h-fit sm:w-3/5 2xl:w-1/3 relative mx-auto 2xl:mx-5 2xl:my-auto">
                        <Carousel showThumbs={false} showStatus={false} autoPlay={true} interval={3000} showIndicators={false} infiniteLoop={true} emulateTouch={true}>
                            { photos.map(photo => 
                                <div className="w-full aspect-square" key={ photo }>
                                    <Image alt="" src={ photo } layout="fill" objectFit="contain" quality="60"/>
                                </div>
                            )}
                        </Carousel>
                    </div>
                    <div className="flex w-full 2xl:w-2/3">
                        <div className="my-auto mx-auto py-10 xl:py-4 px-2 sm:px-10 xl:px-20 text-center xl:text-left">
                            <h5 className="text-3xl leading-7 font-proximabold text-blue-500/[.40] uppercase mb-2">JFC POLSKA</h5>
                            <h2 className="text-4xl leading-9 font-prometobold text-blue-700">{ name }</h2>
                            <p className="font-proxima text-left sm:text-justify leading-9 text-xl mt-4">{ description }</p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    { capacity ? 
                        <div className="sm:ml-auto text-center grow sm:grow-0 bg-blue-500 text-2xl text-white font-prometo py-2  px-0 sm:px-10">{ capacity }</div>
                    : null }
                    <div className={`bg-blue-300 text-center grow sm:grow-0 text-2xl text-white font-prometo py-2 px-0 sm:px-10 ` + (capacity ? null : `sm:ml-auto`)}>#{ code }</div>
                </div>
            </>
        </LgContainer>
    );
}

export default ProductHero;