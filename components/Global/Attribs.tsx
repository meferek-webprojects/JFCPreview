import Image from "next/image";
import Attrib from "./Attrib";
import dumbbellIcon from '../../public/icons/dumbbell-solid.svg';
import medalIcon from '../../public/icons/medal-solid.svg';
import certificateIcon from '../../public/icons/certificate-solid.svg';
import shieldlIcon from '../../public/icons/shield-solid.svg';
import screwdriverIcon from '../../public/icons/screwdriver-wrench-solid.svg';
import gemIcon from '../../public/icons/gem-solid.svg';


const Attribs = () => {
    return (
        <div className="inline-flex flex-wrap 2xl:flex-nowrap justify-center gap-5 bg-blue-100 py-12 px-10 w-full mt-28">
            <Attrib icon={ gemIcon.src } >Najwyższa <br/> jakość produktów</Attrib>
            <Attrib icon={ screwdriverIcon.src } >Własny serwis <br/> pogwarancyjny</Attrib>
            <Attrib icon={ shieldlIcon.src } >Bezpieczeństwo <br/> użytkowników</Attrib>
            <Attrib icon={ medalIcon.src } >Liczne <br/> certyfikaty</Attrib>
            <Attrib icon={ dumbbellIcon.src } >Produkty wykonane z <br/> wytrzymałego polietylenu</Attrib>
        </div>
    );
}

export default Attribs;