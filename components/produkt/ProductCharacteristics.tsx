import Image from "next/image";
import { LgContainer, MdContainer, SmContainer } from "../Global/Containers";

type Props = {
    image: string,
    name: string,
    characteristics: string[],
    dimensions?: string,
}

export const ProductCharacteristics = ({image, name, characteristics, dimensions}: Props) => {
    return (
        <LgContainer className="mt-28 mx-0 sm:mx-4">
            <div className="px-12 sm:p-5 bg-blue-100 flex flex-col 2xl:flex-row ">
                <div className="w-full 2xl:w-4/6 flex">
                    <div className="my-auto xl:pl-24 sm:px-10 py-10 xl:py-0 xl:text-left">
                        <h5 className="text-3xl leading-7 font-proximabold text-blue-500/[.40] mb-2">{ name }</h5>
                        <h2 className="text-4xl leading-9 font-prometobold text-blue-700 uppercase">CECHY</h2>
                        <ul className="font-proxima leading-9 text-xl mt-4 px-4 sm:px-0 xl:pr-20 list-[square]">
                            { characteristics.map((ch) => 
                                <li key={ ch }>{ch}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="w-full 2xl:w-2/6 relative m-5 h-[25rem] 2xl:my-auto 2xl:mx-0">
                    <Image alt="" src={ image } layout="fill" objectFit="contain" objectPosition="right" />
                </div>
            </div>
            <div className={`flex `+ (dimensions ? "" : "hidden")}>
                <div className={`bg-blue-300 text-center grow sm:grow-0 text-xl text-white font-prometo py-2  px-0 sm:px-10 ml-auto`}>{ dimensions }</div>
            </div>  
        </LgContainer>
    );
}

export const ProductCharacteristics2 = ({image, name, characteristics, dimensions}: Props) => {
    return (
        <MdContainer className="mt-28 mx-0 sm:mx-4">
            <div className="grid grid-cols-12 gap-0 xl:gap-4 items-stretch">
                <div className="sm:py-20 sm:px-10 px-20 w-full flex bg-blue-100 col-span-12 2xl:col-span-7">
                    <div className="my-auto xl:pl-24 sm:px-10 py-10 xl:py-0 xl:text-left">
                        <h5 className="text-3xl leading-7 font-proximabold text-blue-500/[.40] mb-2">{ name }</h5>
                        <h2 className="text-4xl leading-9 font-prometobold text-blue-700 uppercase">CECHY</h2>
                        <ul className="font-proxima leading-9 text-xl mt-4 px-4 sm:px-0 xl:pr-20 list-[square]">
                            { characteristics.map((ch) => 
                                <li key={ ch }>{ch}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="h-full bg-blue-900 relative col-span-12 2xl:col-span-5 aspect-[4/5]">
                    <Image quality="60" alt="" src={ image } layout="fill" objectFit="cover" objectPosition="right" />
                </div>
            </div>
            <div className={`flex `+ (dimensions ? "" : "hidden")}>
                <div className={`bg-blue-300 text-center grow sm:grow-0 text-xl text-white font-prometo py-2  px-0 sm:px-10 ml-auto`}>{ dimensions }</div>
            </div>  
        </MdContainer>
    );
}