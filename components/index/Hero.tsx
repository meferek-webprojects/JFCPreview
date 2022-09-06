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
                {/* <video autoPlay loop height="100vh"><source src="/movies/videoplayback.mp4"/></video> */}
                <div className="absolute top-1/2 -translate-y-1/2 text-center w-full">
                    <h1 className="md:hidden text-white font-bold text-3xl sm:text-4xl uppercase font-proximabold mx-auto mb-8 text-center">INNOWACJA,<br/>BEZPIECZEŃSTWO,<br/>JAKOŚĆ</h1>
                    <h1 className="hidden md:block text-white font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl uppercase font-proximabold mx-auto mb-8 lg:mb-12 xl:mb-16 text-center">Poznaj międzynarodwą firmę JFC POLSKA<br/>Innowacja bezpieczeństwo jakość</h1>
                    <Button link="./#produkty-i-uslugi" color="lightblue" size="base sm:text-lg lg:text-xl xl:text-2xl" className="mx-10 px-8 xs:px-16 md:px-32 text-center">ZOBACZ NASZE PRODUKTY</Button>
                </div>
            </div>
        </div>
    );
}

export default Hero;