import Cert from "./Cert";
import c1Image from '../../public/images/certs/1.jpg';
import c2Image from '../../public/images/certs/2.jpg';
import c3Image from '../../public/images/certs/3.jpg';
import c4Image from '../../public/images/certs/4.jpg';
import c5Image from '../../public/images/certs/5.jpg';
import c6Image from '../../public/images/certs/6.jpg';


const Certs = () => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
                <Cert image={ c1Image.src }/>
                <Cert image={ c2Image.src }/>
                <Cert image={ c3Image.src }/>
                <Cert image={ c4Image.src }/>
                <Cert image={ c5Image.src }/>
                <Cert image={ c6Image.src }/>
            </div>
        </>
    );
}

export default Certs;