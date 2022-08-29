import Image from "next/image";
import { LgContainer } from "../Global/Containers";

type Props = {
    image: string,
    equipment: string[],
    name: string,
    dimensions?: string,
}

const ProductEq = ({image, equipment, name, dimensions}: Props) => {
    return (
        
        <LgContainer className="mt-28 mx-0 sm:mx-4">
            <div className="sm:p-5 bg-blue-100 flex flex-col 2xl:flex-row px-12">
                <div className="w-full 2xl:w-4/6 flex">
                    <div className="my-auto xl:pl-24 sm:px-10 py-10 xl:py-0 xl:text-left">
                        <h5 className="text-3xl leading-7 font-proximabold text-blue-500/[.40] mb-2">{ name }</h5>
                        <h2 className="text-4xl leading-9 font-prometobold text-blue-700">WYPOSAŻENIE</h2>
                        <ul className="font-proxima leading-9 text-xl mt-4 px-4 sm:px-0 xl:pr-20 list-[square]">
                            { equipment.map((eq) => 
                                    <li key={ eq }>{eq}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="w-full 2xl:w-2/6 relative my-5 2xl:m-5 h-[20rem] sm:h-[25rem]">
                    <Image alt="" src={ image} layout="fill" objectFit="contain" />
                </div>
            </div>
            <div className={`flex `+ (dimensions ? "" : "hidden")}>
                <div className={`bg-blue-300 text-center grow sm:grow-0 text-xl text-white font-prometo py-2  px-0 sm:px-10 ml-auto`}>{ dimensions }</div>
            </div>  
        </LgContainer>
    );
}

export default ProductEq;