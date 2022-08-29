import Image from "next/image";
import { LgContainer } from "../Global/Containers";

type Props = {
    extraEquipment: string[],
    image: string,
    name: string,
}

const ProductExtraEq = ({extraEquipment, image, name}: Props) => {
    return (
        <LgContainer className="mx-0 sm:mx-4 mt-28">
            <div className="sm:p-5 bg-blue-100 flex flex-col 2xl:flex-row px-12">
                <div className="w-full 2xl:w-2/6 relative my-5 2xl:m-5 h-[20rem] sm:h-[25rem]">
                    <Image alt="" src={ image } layout="fill" objectFit="contain" />
                </div>
                <div className="w-full 2xl:w-4/6 flex">
                    <div className="my-auto xl:pl-24 sm:px-10 py-10 xl:py-0 xl:text-left">
                        <h5 className="text-3xl leading-7 font-proximabold text-blue-500/[.40] mb-2">{ name }</h5>
                        <h2 className="text-4xl leading-9 font-prometobold text-blue-700">WYPOSAŻENIE OPCJONALNE</h2>
                        <ul className="font-proxima leading-9 text-xl mt-4 xl:pr-20 list-[square]">
                            { extraEquipment.map((eq) => 
                                <li key={ eq }>{ eq }</li>
                            )} 
                        </ul>
                    </div>
                </div>
            </div>
        </LgContainer>
    );
}

export default ProductExtraEq;