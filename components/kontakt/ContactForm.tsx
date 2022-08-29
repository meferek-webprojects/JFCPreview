import { Input, Select, Textarea } from "../Global/Inputs";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ContactForm = () => {

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey="6LdMvZchAAAAADwbtPc4dApKZZdM-P7830Lh30gx"
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
        >
            <form method="POST" action="#" className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full auto-rows-fr">
                    <div className="col-span-3">
                        <Input className="w-full h-full" attributes={{
                            placeholder: "Imię i nazwisko",
                            type: "text",
                            required: true,
                            name: "name",
                        }}/>
                    </div>
                    <div className="col-span-3">
                        <Input className="w-full h-full" attributes={{
                            placeholder: "Temat",
                            type: "text",
                            required: true,
                            name: "topic",
                        }}/>
                    </div>
                    <div className="col-span-3">
                        <Input className="w-full h-full" attributes={{
                            placeholder: "E-mail",
                            type: "email",
                            required: true,
                            name: "email",
                        }}/>
                    </div>
                    <div className="col-span-3">
                        <Input className="w-full h-full" attributes={{
                            placeholder: "Numer telefonu",
                            type: "text",
                            name: "phone",
                        }}/>
                    </div>
                    <div className="col-span-3">
                        <Select className="w-full h-full" attributes={{
                            placeholder: "Rodzaj wiadomości",
                            required: true,
                            name: "kind",
                        }}>
                                <option disabled selected value="">--- Wybierz temat wiadomości ---</option>
                                <option value="Zapytanie o produkt">Zapytanie o produkt</option>
                                <option value="Zapytanie dotyczące rachunków">Zapytanie dotyczące rachunków</option>
                                <option value="Zapytanie techniczne">Zapytanie techniczne</option>
                        </Select>
                    </div>
                </div>
                <div className="mt-4">
                    <Textarea className="w-full h-full" attributes={{
                        placeholder: "Wiadomość",
                        required: true,
                        rows: "10",
                        name: "message",
                    }}/>
                </div>
                <button type="submit" className={`mt-5 w-full bg-blue-500 text-white hover:bg-blue-700 px-10 py-2 font-proximabold transition duration-300 ease-in-out`}>Wyślij</button>
            </form>     
        </GoogleReCaptchaProvider>
    );
}

export default ContactForm;