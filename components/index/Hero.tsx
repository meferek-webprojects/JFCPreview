import Image from 'next/image';
import heroImage from '../../public/images/drone-edit.jpg';
import logoImage from '../../public/images/logo/logo-full-white.png';
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
                <div className="absolute mt-10 top-1/2 -translate-y-1/2 text-center w-full">
                    <div className="md:hidden mx-auto mb-5">
                        <Image alt="image" src={ logoImage } width="200px" height="70px"/>
                    </div>
                    <h1 className="md:hidden text-white font-bold text-4xl uppercase font-proximabold mx-auto mb-10 text-center">INNOWACJA, <br className="md:hidden"/>BEZPIECZEŃSTWO, <br className="md:hidden"/>JAKOŚĆ</h1>
                    <h1 className="hidden md:block text-white font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl uppercase font-proximabold mx-auto mb-10 text-center">Poznaj międzynarodwą firmę JFC POLSKA<br/>Innowacja bezpieczeństwo jakość</h1>
                    <Button link="./#produkty-i-uslugi" color="lightblue" size="2xl" className="mx-10 mt-24 md:mt-5 mb-32 px-16 md:px-32">ZOBACZ NASZE PRODUKTY</Button>
                </div>
            </div>
        </div>
    );
}

export default Hero;