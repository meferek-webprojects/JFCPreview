import Image from "next/image";

type Props = {
    image: string,
}

const Cert = ({ image }: Props) => {
    return (
        <div className="h-64 w-full relative">
            <Image alt="image" src={ image } layout="fill" objectFit="contain" className="hover:scale-[1.2] hover:-translate-y-4 transition easy-in-out duration-300"/>
        </div>
    );
}

export default Cert;