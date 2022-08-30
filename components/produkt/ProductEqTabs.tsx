import Image from "next/image";
import { LgContainer } from "../Global/Containers";
import { useState } from "react";

type Props = {
    equipment: string[],
    extraEquipment: string[],
    name: string,
    image: string,
    dimensions?: string,
}

const ProductEqTabs = ({ equipment, extraEquipment, name, image, dimensions }: Props) => {

    const [tab, setTab] = useState(true)

    return (
        <LgContainer className="mx-0 sm:mx-4 mt-28">
            <div className="flex flex-col w-full">
                <div className="flex">
                    <div className={`w-1/2 flex text-center text-blue-700 font-prometobold text-base xs:text-xl sm:text-2xl md:text-3xl py-4 cursor-pointer group ` + (tab ? `bg-blue-100` : ``) } onClick={() => setTab(true) }>
                        <p className="m-auto group-hover:-translate-y-[7px] transition-all duration-300 easy-in-out sm:px-2">WYPOSAŻENIE</p>
                    </div>
                    <div className={`w-1/2 flex text-center text-blue-700 font-prometobold text-base xs:text-xl sm:text-2xl md:text-3xl py-4 cursor-pointer group ` + (tab ? `` : `bg-blue-100`)} onClick={() => setTab(false) }>
                        <p className="m-auto group-hover:-translate-y-[7px] transition-all duration-300 easy-in-out xs:px-2">WYPOSAŻENIE OPCJONALNE</p>
                    </div>
                </div>
                <div className="overflow-hidden flex bg-blue-100 py-10">
                    <div className={`my-auto xl:pl-24 px-6 xs:px-10 py-4 xs:py-10 xl:py-0 xl:text-left` + (tab ? ` block` : ` hidden`)}>
                        <h5 className="text-2xl xs:text-3xl leading-7 font-proximabold text-blue-500/[.40] mb-2">{ name }</h5>
                        <h2 className="text-3xl xs:text-4xl leading-9 font-prometobold text-blue-700">WYPOSAŻENIE</h2>
                        <ul className="font-proxima leading-9 text-base xs:text-xl mt-4 list-[square]">
                            { equipment.map((eq) => 
                                    <li key={ eq }>{eq}</li>
                            )}
                        </ul>

                    </div>
                    <div className={`my-auto xl:pl-24 px-6 xs:px-10 py-4 xs:py-10 xl:py-0 xl:text-left` + (tab ? ` hidden` : ` block`)}>
                        <h5 className="text-2xl xs:text-3xl leading-7 font-proximabold text-blue-500/[.40] mb-2">{ name }</h5>
                        <h2 className="text-3xl xs:text-4xl leading-9 font-prometobold text-blue-700">WYPOSAŻENIE OPCJONALNE</h2>
                        <ul className="font-proxima leading-9 text-base xs:text-xl mt-4 list-[square]">
                            { extraEquipment.map((eq) => 
                                    <li key={ eq }>{eq}</li>
                            )}
                        </ul>
                    </div>
                    <div className="hidden 2xl:block h-[20rem] mx-auto aspect-square relative">
                        <Image alt="" src={ image } layout="fill" objectFit="contain" />
                    </div>
                </div>
                <div className={`flex `+ (dimensions ? "" : "hidden")}>
                    <div className={`bg-blue-300 text-center grow sm:grow-0 text-xl text-white font-prometo py-2  px-0 sm:px-10 ml-auto`}>{ dimensions }</div>
                </div>  
            </div>
        </LgContainer>
    );
}

export default ProductEqTabs;