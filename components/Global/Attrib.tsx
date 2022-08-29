import Image from "next/image";

type Props = {
    icon: string, 
    children: JSX.Element | string | JSX.Element[] | string[] | React.ReactChild | React.ReactChild[],
}

const Attrib = ({ icon, children }: Props) => {
    return (
        <div className="bg-white text-center py-10 w-full md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
            <div className="relative w-full h-28">
                <Image alt="image" src={ icon } layout="fill" objectFit="contain"></Image>
            </div>
            <h5 className="font-proximabold text-2xl text-blue-700 w-full mt-10 px-5">{ children }</h5>
        </div> 
    );
}

export default Attrib;