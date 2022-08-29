import Image from "next/image";
import { MdContainer } from "../Global/Containers";

type Props = {
    attribs: string[],
    image: string
}

const ProductAttribs = ({attribs, image}: Props) => {
    return (
        <MdContainer className="mt-28 text center hidden md:block">
            <div className="flex h-fit border-[10px] border-blue-100 px-8 md:px-16 py-4">
                <div className="basis-0 grow hidden md:flex flex-col text-right my-auto mr-8 xl:mr-0">
                    { attribs.map((a, index) => 
                        index % 2 == 0 ? 
                            <div className="my-8 py-1" key={index}>
                                <h2 className="font-proximabold text-2xl text-blue-900">{ a[0] }<i className="bi bi-check-square-fill text-orange ml-2"></i></h2>
                                <h5 className="font-proxima text-xl">{ a[1] }</h5>
                            </div>
                        : null
                    )}
                </div>
                <div className="hidden xl:block xl:basis-5/12 relative my-auto">
                    <div className="w-full aspect-square">
                        <Image alt="" src={ image } layout="fill" objectFit="contain" />
                    </div>
                </div>
                <div className="basis-0 grow hidden md:flex flex-col my-auto ml-8 xl:ml-0">
                    { attribs.map((a, index) => 
                        index % 2 == 1 ? 
                            <div className="my-8 py-1" key={index}>
                                <h2 className="font-proximabold text-2xl text-blue-900"><i className="bi bi-check-square-fill text-orange mr-2"></i>{ a[0] }</h2>
                                <h5 className="font-proxima text-xl">{ a[1] }</h5>
                            </div>
                        : null
                    )}
                </div>
                <div className="basis-0 grow md:hidden flex-col my-auto">
                    { attribs.map((a, index) => 
                        <div className={"my-8 py-1" + (index % 2 == 0 ? "" : " text-right")} key={index}>
                            <h2 className="font-proximabold text-xl sm:text-2xl text-blue-900">{ index % 2 == 0 ? null : a[0] }<i className={ "bi bi-check-square-fill text-orange" + (index % 2 == 0 ? " mr-2" : " ml-2") }></i>{ index % 2 == 0 ? a[0] : null }</h2>
                            <h5 className="text-xl sm:text-base">{ a[1] }</h5>
                        </div>
                    )}
                </div>
            </div>
        </MdContainer>
    );
}

export default ProductAttribs;