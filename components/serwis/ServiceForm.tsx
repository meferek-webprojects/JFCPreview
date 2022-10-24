import { Input, Textarea } from "../Global/Inputs";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useForm, ValidationError } from '@formspree/react';

const ServiceForm = () => {

    const [state, handleSubmit] = useForm("mdojdqjl");
    if (state.succeeded) {
        return <p>Dziękujemy za zgłoszenie!</p>;
    }
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey="6LdMvZchAAAAADwbtPc4dApKZZdM-P7830Lh30gx"
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
        }}>
            <form className="w-full" encType="multipart/form-data" onSubmit={handleSubmit}> 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full auto-rows-fr">
                    <div className="col-span-3 md:col-span-1">
                        <Input className="w-full h-full" attributes={{
                             placeholder: "Imię osoby zgłaszającej",
                             type: "text",
                             required: true,
                             name: "name",
                             id: "name",
                         }}/>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <Input className="w-full h-full" attributes={{
                            placeholder: "E-mail",
                            type: "email",
                            required: true,
                            name: "email",
                        }}/>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <Input className="w-full h-full" attributes={{
                            placeholder: "Numer telefonu",
                            type: "text",
                            required: true,
                            name: "phone",
                        }}/>
                    </div>
                    <div className="col-span-3">
                        <Input className="w-full h-full" attributes={{
                            placeholder: "Nazwa produktu",
                            required: true,
                            name: "product_name",
                        }}/>
                    </div>
                    <div className="col-span-2">
                        <Input className="w-full h-full" attributes={{
                            placeholder: "Numer seryjny produktu",
                            type: "text",
                            required: true,
                            name: "serial_no",
                        }}/>
                    </div>
                    <div>
                        <Input className="w-full h-full" attributes={{
                            type: "date",
                            required: true,
                            name: "date",
                        }}/>
                    </div>
                    <div className="col-span-3">
                        <Input className="w-full h-full" attributes={{
                            placeholder: "Lokalizacja przedmiotu [ulica, miejscowość, kod pocztowy]",
                            type: "text",
                            required: true,
                            name: "location",
                        }}/>
                    </div>
                    {/* <div className="col-span-3">
                        <Input className="w-full h-full" attributes={{
                            type: "file",
                            name: "upload",
                            multiple: true,
                        }}/>
                    </div> */}
                </div>
                <div className="mt-4">
                        <Textarea className="w-full h-full" attributes={{
                            placeholder: "Opisz swoją usterkę",
                            required: true,
                            name: "desc",
                        }}/>
                </div>
                <button type="submit" disabled={state.submitting} className={`mt-5 w-full bg-blue-500 text-white hover:bg-blue-700 px-10 py-2 font-proximabold transition duration-300 ease-in-out`}>Wyślij</button>
            </form>
        </GoogleReCaptchaProvider>
    );
}

export default ServiceForm;