import Image from "next/image";

type Props = {
    image: string,
    popup: string,
    setPopup: any
}

const PopUpPhoto = ({image, popup, setPopup}:Props) => {
    
    return (
        <div className={`fixed flex inset-x-0 transition-[transform] duration-[300ms] ${popup ? "-translate-x-0" : "-translate-x-full"} bottom-0 top-0 z-[999] bg-blue-900/[.95]`} onClick={() => setPopup('')}>
            <div className="absolute right-8 xl:right-16 w-fit top-24 xl:top-32 z-10">
                <i className="bi bi-x-lg text-3xl text-white cursor-pointer"></i>
            </div>
            <div className="relative m-auto w-3/4 h-3/4">
                <Image alt="" src={ image } layout="fill" objectFit="contain"/>
            </div>
        </div>
    );
}

export default PopUpPhoto;