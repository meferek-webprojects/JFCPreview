import Image from "next/image";
import { LgContainer, MdContainer } from "./Containers";
import catalogsImage from "../../public/images/catalogs.png";
import Button from "./Button";

const DownloadCatalogs = () => {
    return (
        <MdContainer className="my-24">
            <div className="border-[15px] border-blue-100 flex flex-wrap w-full py-6 px-4 xl:px-40 gap-x-8">
                <div className="w-full 2xl:grow 2xl:basis-0 py-12  2xl:py-20 flex-wrap text-center md:px-10 xl:px-0">
                    <h5 className="text-3xl md:text-5xl font-proximabold uppercase text-center text-blue-900/[.89]">Pobierz nasze katalogi <br/> w wersji online</h5>
                    <Button link="/katalogi" color="orange" size="2xl" className="uppercase w-3/4 md:w-1/2 xl:w-full py-2 mt-5">POBIERZ</Button>
                </div>
                <div className="w-full 2xl:grow 2xl:basis-0 relative h-40 xl:h-60 2xl:h-auto order-first xl:order-last mt-8 xl:mt-0">
                    <Image alt="image" src={catalogsImage} layout="fill" objectFit="contain"></Image>
                </div>
            </div>
        </MdContainer>
    );
}

export default DownloadCatalogs;