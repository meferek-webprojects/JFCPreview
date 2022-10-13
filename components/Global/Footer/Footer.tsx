import Image from "next/image";
import logoImage from '../../../public/images/logo/logo-full-white.svg';
import FooterNav from "./FooterNav";
import PLImage from "../../../public/images/rzeczpospolita-polska.png";
import EUImage from "../../../public/images/fundusze-europejskie.png";
import EUsubsidyImage from "../../../public/images/europejski-fundusz-rozwoju-regionalnego.png";

const Footer = () => {
    return (
        <>
            <div className="mt-24 md:mb-10 h-32 w-full flex px-5">
                <div className="relative w-1/3 h-20 md:h-32 mr-auto">
                    <Image alt="image" src={ EUImage } layout="fill" objectFit="contain"/>
                </div>
                <div className="relative w-1/3 h-20 md:h-32 mx-auto">
                    <Image alt="image" src={ PLImage } layout="fill" objectFit="contain"/>
                </div>
                <div className="relative w-1/3 h-20 md:h-32 ml-auto">
                    <Image alt="image" src={ EUsubsidyImage } layout="fill" objectFit="contain"/>
                </div>
            </div>
            <div className="bg-blue-900 text-white font-proxima text-center pb-2">
                <Image alt="image" src={ logoImage } width="200px" height="200px"/>
                <FooterNav />
                <p className="font-proxima text-white/[.7] text-lg md:text-xl mt-5 md:mt-10 mb-12">
                    JFC POLSKA Sp z o.o. <br/>
                    ul. Białostocka 1, 05-252 Karpin <br/>
                    Tel.: +48 29 757 83 77 <br/>
                    Fax: +48 29 757 82 01 <br/>
                </p>
                <hr className="w-3/4 mx-auto border-2 border-white/[.8]"/>
                <div className="w-3/4 md:w-1/4 mx-auto my-10 grid grid-cols-4 text-2xl md:text-3xl group">
                    <a className="hover:scale-[1.3] transition duration-300 ease-in-out hover:text-blue-300 hover:-translate-y-2" href="https://www.facebook.com/JFCPolska/" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                    <a className="hover:scale-[1.3] transition duration-300 ease-in-out hover:text-red hover:-translate-y-2" href="https://www.youtube.com/channel/UCFqI9qPKIsvR-P95Vj9YDoQ" target="_blank" rel="noreferrer"><i className="bi bi-youtube"></i></a>
                    <a className="hover:scale-[1.3] transition duration-300 ease-in-out hover:text-blue-500 hover:-translate-y-2" href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F9473316%2F" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a className="hover:scale-[1.3] transition duration-300 ease-in-out hover:text-blue-300 hover:-translate-y-2" href="https://twitter.com/JfcPolska" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
                </div>
                <p className="mx-auto text-white my-10">Copyright &copy; 2022  JFC POLSKA</p>
            </div>
        </>
        
    );
}

export default Footer;