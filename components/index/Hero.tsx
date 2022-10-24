import Image from 'next/image';
import heroImage from '../../public/images/drone-edit.jpg';
import Button from '../Global/Button';

const Hero = () => {

    return (
        <div className="h-screen overflow-hidden w-full relative">
            <div className="bg-overlay w-full h-screen overflow-hidden">
                <Image alt="image" 
                    src={heroImage}
                    className="opacity-20"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality="100"
                />
                {/* <video autoPlay loop height="100vh" className="opacity-20 w-full"><source src="/movies/SHORT.mp4"/></video> */}
                <div className="absolute top-1/2 -translate-y-1/2 text-center w-full">
                    <h1 className="md:hidden text-white font-bold text-3xl sm:text-4xl uppercase font-proximabold mx-auto mb-8 text-center">INNOWACJA,<br/>BEZPIECZEŃSTWO,<br/>JAKOŚĆ</h1>
                    <h1 className="hidden md:block text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase font-proximabold mx-auto mb-8 xl:mb-12 2xl:mb-16 text-center">Poznaj międzynarodwą firmę JFC POLSKA<br/>Innowacja bezpieczeństwo jakość</h1>
                    <Button link="./#produkty-i-uslugi" color="lightblue" size="base sm:text-lg lg:text-xl xl:text-2xl" className="mx-10 px-8 xs:px-16 xl:px-24 2xl:px-32 text-center">ZOBACZ NASZE PRODUKTY</Button>
                </div>
            </div>
        </div>
    );
}

export default Hero;