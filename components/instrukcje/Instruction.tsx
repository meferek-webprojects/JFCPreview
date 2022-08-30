import Image from "next/image";

type Props = {
    movie: string,
    thumb: string,
    setPopup: any
}

const Instruction = ({movie, thumb, setPopup}:Props) => {
    return (
        <div className="p-1 bg-blue-500 group">
            <div className="w-full aspect-video relative" onClick={() => setPopup(movie)}>
                <Image alt="" src={ thumb } layout="fill" objectFit="contain" className="group-hover:scale-[1.05] group-hover:brightness-[1.05] transition-all duration-300 easy-in-out" />
            </div>
        </div>
        
    );
}

export default Instruction;