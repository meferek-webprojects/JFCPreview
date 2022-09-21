import Image from "next/image";
import { SmContainer } from "./Containers";

type Props = {
    title: string,
    image: string,
}

export const Header = ({title, image}: Props) => {
    return (
        <div>
            <SmContainer>
                <div className="h-32 md:h-48 lg:h-64 xl:h-64 2xl:h-96 overflow-hidden relative mx-auto mt-5 xl:mt-[4rem] pt-30">
                    <Image alt="image" src={ image } quality="100" layout="fill" objectFit="cover"/>
                </div>
            </SmContainer>
        </div>
    );
}

export const TitleHeader = ({title, image}: Props) => {
    return (
        <div>
            <SmContainer>
                <div className="h-32 md:h-48 lg:h-64 xl:h-64 2xl:h-96 overflow-hidden relative mx-auto mt-5 xl:mt-[4rem] pt-30">
                    <Image alt="image" src={ image } layout="fill" objectFit="cover"/>
                    <div className="absolute flex w-full h-full bg-blue-700/[.79]"></div>
                    <div className="absolute flex w-full h-full">
                        <h2 className="font-proximabold uppercase text-white/[.99] opacity-100 text-xl md:text-4xl xl:text-6xl text-center mx-auto my-auto">{ title }</h2>
                    </div>
                </div>
            </SmContainer>
        </div>
    );
}

export const DepartmentHeader = ({title, image}: Props) => {
    return (
        <div className="h-[10rem] md:h-[12rem] 2xl:h-[15rem] overflow-hidden relative">
            <Image alt="image" src={ image } quality="60" layout="fill" loading="eager" objectFit="cover" objectPosition="top"/>
            <div className="absolute flex w-full h-full bg-blue-700/[.79]"></div>
            <div className="absolute flex w-full h-full">
                <h2 className="font-proximabold uppercase text-white/[.99] opacity-100 text-xl md:text-4xl xl:text-6xl text-center mx-auto my-auto">{ title }</h2>
            </div>
        </div>
    );
}