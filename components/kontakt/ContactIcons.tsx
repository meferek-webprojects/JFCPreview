import { LgContainer, MdContainer } from "../Global/Containers";

const ContactIcons = () => {
    return (
        <LgContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center my-32">
                <div className="my-5">
                    <i className="bi bi-telephone-fill text-4xl text-blue-900"></i>
                    <a href="tel:+48 29 757 83 77" className="mt-5 md:mt-10 font-proxima text-lg block">+48 29 757 83 77</a>
                </div>
                <div className="my-5">
                    <i className="bi bi-pin-map-fill text-4xl text-blue-900"></i>
                    <p className="mt-5 md:mt-10 font-proxima text-lg">
                        JFC Polska Sp. z o.o.<br/>
                        ul. Białostocka 1, KARPIN<br/>
                        05-252 DĄBRÓWKA, Polska.<br/>
                    </p>
                </div>
                <div className="my-5">
                    <i className="bi bi-envelope-fill text-4xl text-blue-900"></i>
                    <a href="mailto:info@jfcpolska.pl" className="mt-5 md:mt-10 font-proxima text-lg block">info@jfcpolska.pl</a>
                </div>
            </div>
        </LgContainer>
    );
}

export default ContactIcons;