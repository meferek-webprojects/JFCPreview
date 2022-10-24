import Image from 'next/image';
import handsIcon from '../../public/icons/handshake-angle-solid.svg';
import { LgContainer } from '../Global/Containers';
import sellers from "../../pages/database/sellers.json";

type Props = {
    sellersId: string[] | string,
}

const ContactSeller = ({ sellersId }:Props ) => {

    const thisSellers = sellers.filter(seller => sellersId.includes(seller.id));
    
    return (
        <LgContainer> 
            <div className="border-[10px] sm:border-[15px] border-blue-100 flex flex-wrap xl:flex-nowrap my-14 md:my-28 px-1 sm:px-4 py-16 sm:py-16 sm:pl-16 sm:pr-8">
                <div className="w-full xl:w-1/5 relative h-[5rem] xl:h-[9rem] mb-10 xl:my-auto">
                    <Image alt="" src={ handsIcon } layout="fill"></Image>
                </div>

                <div className="w-full xl:w-4/5 ml-0 xl:ml-20 text-center xl:text-left">
                    <h4 className="font-proximabold text-blue-700 text-lg md:text-2xl xl:text-4xl mb-8"><span className="hidden sm:inline-block">JESTEŚ ZAINTERESOWANY PRODUKTEM?</span><br/>SKONTAKTUJ SIĘ Z NASZYMI HANDLOWCAMI</h4>
                    { thisSellers.map((tS) => 
                        <h5 key={ tS.id } className="font-proxima text-blue-700 sm:text-lg uppercase text-center xl:text-left py-4 xl:py-1 w-fit mx-auto xl:mx-0 my-3">
                            { tS.name+" "+tS.surname } 
                            <br className="hidden xl:block 2xl:hidden"/>
                            <br className="xl:hidden"/>
                            <a href={`tel:${tS.phone}`} className="xl:ml-5 cursor-pointer">{ tS.phone }</a>
                            <br className="xl:hidden"/>
                            <a href={`mailto:${tS.email}`} className="xl:ml-5 cursor-pointer">{ tS.email }</a>
                        </h5>
                    )}

                    <h5 className="mt-8 font-proxima text-blue-700 text-lg">E-MAIL: <a href="mailto:info@jfcpolska.pl" className="uppercase ml-2 font-proximabold cursor-pointer">INFO@JFCPOLSKA.PL</a></h5>
                </div>
            </div>
        </LgContainer>
    );
}

export default ContactSeller;