import Image from "next/image";
import Link from "next/link";

type Props = {
    image: string,
    pdf: string,
}

const Catalog = ({ image, pdf }: Props) => {
    return (
        <Link href={ pdf }>
            <a target="_blank" rel="noreferrer" className="border-2 border-blue-500 h-[12rem] sm:h-[14rem] md:h-[17rem] lg:h-[18rem] xl:h-[19rem] hover:scale-[1.1] transition easy-in-out duration-300">
                <img alt="katalog" src={ image } className="h-full"/>
            </a>
        </Link>
    );
}

export default Catalog;