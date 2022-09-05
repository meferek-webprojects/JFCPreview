import Image from "next/image";

type Props = {
    image: string,
    popup: string,
    setPopup: any,
    video?: string,
}

const PopUpPhoto = ({image, popup, setPopup, video}:Props) => {
    
    return (
        <div className={`fixed flex inset-x-0 transition-[transform] duration-[300ms] ${popup ? "-translate-x-0" : "-translate-x-full"} bottom-0 top-0 z-[999] bg-blue-900/[.95]`} onClick={() => setPopup('')}>
            <div className="absolute right-8 xl:right-16 w-fit top-24 xl:top-32 z-10">
                <i className="bi bi-x-lg text-3xl text-white cursor-pointer"></i>
            </div>
            { video ?
                <div className="relative m-auto w-3/4 h-3/4">
                    <div className="w-full aspect-video mx-auto border-[10px] border-blue-700 bg-blue-700 mt-5 md:mt-10 xl:mt-20">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div> 
            :
                <div className="relative m-auto w-3/4 h-3/4">
                    { image ? 
                        <Image alt="" src={ image } layout="fill" objectFit="contain"/>
                    : null }
                </div>
            }
        </div>
    );
}

export default PopUpPhoto;