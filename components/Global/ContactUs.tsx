import Image from "next/image";
import Button from "./Button";
import { MdContainer } from "./Containers";
import catalogsImage from "../../public/images/drone.jpg";

const ContactUs = () => {
    return (
        <div className="bg-blue-500 flex flex-wrap w-full">
            <div className="w-full xl:w-3/5 2xl:w-1/2 py-14 md:py-28 flex flex-wrap md:flex-nowrap overflow-hidden">
                <h5 className="font-proximabold text-white text-3xl uppercase text-center md:text-left md:ml-32 w-full md:w-3/5">Masz jakieś pytania? <br/> Skontaktuj się z nami</h5>
                <Button link="./kontakt" color="orange" size="2xl" className="mx-10 md:mx-0 text-center md:text-left mt-10 md:pl-10 uppercase w-full md:w-2/5 h-12 md:my-auto">KONTAKT</Button>
            </div>
            <div className="xl:h-auto w-full xl:w-2/5 2xl:w-1/2 relative">
                <Image alt="image" src={catalogsImage} layout="fill" objectFit="cover"></Image>
            </div>
        </div>
    );
}

export default ContactUs;