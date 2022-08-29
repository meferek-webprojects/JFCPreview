import Image from "next/image";
import Button from "../Global/Button";

type Props = {
    title: string,
    link?: string,
    image: string,
}

const ProductThumb = ({ title, image, link }: Props) => {
    return (
        <div className="mx-5 my-4 flex flex-col">
            <div className="relative w-full border-[5px] border-blue-100 h-80 mt-2">
                <Image alt="image" src={ image } layout="fill" objectFit="contain" className=""/>
            </div>
            <h5 className="bg-blue-100 text-2xl font-proxima text-blue-900 text-center py-5 px-1 uppercase grow flex items-center justify-center">{ title }</h5>
            <Button link={ link } color="blue" className="w-full">ZOBACZ WIĘCEJ</Button>
        </div>
    );
}

export default ProductThumb;