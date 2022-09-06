import Image from "next/image";
import Link from "next/link";

type Props = {
    icon: string,
    title: string,
    desc: string,
    href: string,
}

const DepartmentsIcon = ({ icon, title, desc, href }: Props) => {
    return (
        <Link href={ href }>
            <div className="flex flex-col sm:flex-row group hover:cursor-pointer h-60 sm:h-36 lg:h-48 2xl:h-60 w-full xl:w-1/2 sm:mb-8 mx-0 xs:mx-4 md:mx-16 lg:mx-32 xl:mx-0">
                <div className="bg-blue-500 h-1/2 sm:h-full aspect-square self-center flex transition-transform easy-in-out duration-300 xl:ml-4" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}>
                    <div className="w-2/5 h-2/5 m-auto relative flex items-center">
                        <Image alt="image" className="invert group-hover:scale-[0.7] transition easy-in-out duration-300" src={ icon } layout="fill" objectFit="contain"/> 
                    </div>
                </div>
                <div className="flex flex-col grow text-center self-center xl:mr-4 mt-4 sm:mt-0">
                    <h3 className="px-2 py-2 text-3xl font-proximabold uppercase text-blue-700 group-hover:scale-[0.9] easy-in-out duration-300">{ title }</h3>
                    <p className="hidden md:block px-4 text-blue-700 font-proxima text-xl group-hover:scale-[0.9] easy-in-out duration-300">{ desc }</p>
                </div>
            </div>
        </Link>
    );
}

export default DepartmentsIcon;