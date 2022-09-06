import type { NextPage } from "next";
import Head from 'next/head'
import Footer from "../components/Global/Footer/Footer";
import { XlContainer } from "../components/Global/Containers";
import Nav from "../components/Global/Navbar/Nav";

const PolitykaPrywatnosci: NextPage = () => {
    return (
        <>
            <Head>
                <title>JFC POLSKA - polityka prywatności</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Nav />

            <XlContainer className="mt-[5rem]">
                <>
                    <div className="grid grid-cols-1 gap-5 mt-10 mb-48 text-xl">
                        <div className="border-4 border-blue-300 p-12">
                            <h1 className="font-prometobold text-blue-700 text-4xl mb-4">Polityka prywatności</h1>
                            
                            <p className="my-5">Administratorem danych osobowych gromadzonych za pomocą serwisu www.jfcpolska.pl jest JFC Polska sp. z o.o. z siedzibą w Dąbrówce. Z administratorem można kontaktować się wysyłając mail pod adres: info@jfcpolska.com lub korespondencyjnie wysyłając list na adres: JFC Polska sp. z o.o. Karpin ul. Białostocka 1, 05-252 Dąbrówka.</p>

                            <p className="my-5">JFC Polska sp. z o.o. szanuje prywatność wszystkich użytkowników Serwisu i zobowiązuje się do przestrzegania standardów ochrony danych osobowych zgodnie z zobowiązaniami przepisami.</p>

                            <h2 className="font-prometobold text-blue-500 my-5">Gromadzenie danych</h2>

                            <p className="my-5">Serwis realizuje funkcje pozyskiwania informacji o Użytkownikach i ich zachowaniu poprzez dobrowolne wprowadzenie przez Użytkowania danych, tj. imię i nazwisko, adres email w formularzu zamieszczonym w zakładce KONTAKT oraz za pośrednictwem plików cookie. Serwis może zapisać ponadto tzw. logi z serwera, tzn. informacje o parametrach połączenia (oznaczenie czasu, adres IP). Dane w formularzu zamieszczonym w zakładce KONTAKT nie są pozyskiwane inaczej, niż za zgodą użytkownika.</p>

                            <h2 className="font-prometobold text-blue-500 my-5">Obsługa newslettera</h2>

                            <p className="my-5">Zapisując się do newslettera, przekazujesz swoje imię oraz adres e-mail. Podanie danych jest dobrowolne, ale niezbędne, by zapisać się do newslettera.
                            Ponadto system wykorzystywany do obsługi newslettera, zapisuje Twój numer IP, z którego korzystałeś, zapisując się do newslettera, określa Twoją przybliżoną lokalizację, klienta poczty, z którego korzystasz do obsługi poczty e-mail oraz śledzi Twoje działania podejmowane w związku z wysyłanymi do Ciebie wiadomościami. W związku z tym posiadamy również informacje, które wiadomości otworzyłeś, w ramach których wiadomości kliknąłeś w linki itp.
                            Dane przekazane przez Ciebie w związku z zapisem do newslettera wykorzystywane są w celu przesyłania Ci newslettera, a podstawą prawną ich przetwarzania jest nasz prawnie usprawiedliwiony interes, jakim w tym przypadku jest realizacja celów marketingowych.
                            Jeżeli chodzi o przetwarzanie informacji, które nie pochodzą od Ciebie, a zostały zebrane automatycznie przez system mailingowy, opieramy się w tym zakresie na naszym prawnie uzasadnionym interesie polegającym na analizie zachowań subskrybentów newslettera w celu optymalizacji działań mailingowych.
                            W każdej chwili możesz zrezygnować z otrzymywania newslettera, klikając w dedykowany link znajdujący się w każdej wiadomości wysyłanej w ramach newslettera, lub po prostu kontaktując się z nami. (podst. prawna art. 6 ust. 1 lit. f RODO).</p>

                            <h2 className="font-prometobold text-blue-500 my-5">Wykorzystywanie danych</h2>

                            <p className="my-5">Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji formularza, tzn. w celu nawiązania kontaktu , udzielenia odpowiedzi na zadane pytanie lub udzielenia informacji handlowych, itp.</p>

                            <p className="my-5">Dane o parametrach połączenia i korzystaniu z witryny ( np. oznaczenie czasu, adres IP) są zbierane w celu zapewniania jak najwyższej jakości serwisu. Informacje o korzystaniu z Serwisu są zbierane za pomocą plików cookie. Dane te nie są kojarzone z konkretnymi osobami przeglądającymi witrynę ale mogą być okazjonalnie analizowanie w celu określenia, które elementy witryny odwiedzane są najczęściej, jakie przeglądarki stron WWW są stosowane, czy struktura witryny nie zawiera błędów, itp.</p>

                            <p className="my-5">Dane zebrane w formularzu internetowym zamieszczonym w Serwisie są wykorzystywane i przechowywane do czasu zakończenia obsługi Użytkownika i przedawnienia roszczeń wynikających z zawartych transakcji bądź przez okres wynikający z przepisów ustawy o rachunkowości .</p>

                            <p className="my-5">Dane o parametrach połączenia i korzystaniu z witryny są przechowywane przez czas nieokreślony jako materiał pomocniczy służący do administrowania witryną.</p>

                            <p className="my-5">Dane podlegają udostępnieniu podmiotom zewnętrznym tylko w granicach prawnie dozwolonych. Dane umożliwiające identyfikację osoby fizycznej są udostępniane wyłącznie za zgodą tej osoby.</p>

                            <h2 className="font-prometobold text-blue-500 my-5">Pliki Cookies</h2>

                            <p className="my-5">Pliki cookies (tzw. ciasteczka) to niewielkie pliki tekstowe wysyłane przez odwiedzany serwis internetowy do urządzenia internauty (komputer, smartfon itp.). Są stosowane wyłącznie w celu lepszego dostosowania serwisu do indywidualnych potrzeb Użytkownika.</p>

                            <p className="my-5">Pliki cookies stosowane w Serwisie www.jfcpolska.pl nie są wykorzystywane do pozyskiwania jakichkolwiek informacji o użytkownikach Serwisu ani śledzenia ich nawigacji. Pliki Cookies nie przechowują żadnych danych osobowych ani innych informacji zebranych od użytkowników. Serwis używa standardowych plików cookie stron trzecich w celu zapewnienia łatwej nawigacji , zachowania preferencji użytkowników a także w celach statystycznych. Serwis korzysta z Google Analytics. Działania te zapewniają operatorowi Serwisu dane liczbowe i statystyczne. Zalecamy przeczytanie polityki ochrony prywatności Google Analytics, aby poznać zasady korzystania z plików cookie wykorzystywane w statystykach: https://policies.google.com/privacy?hl=pl</p>

                            <p className="my-5">Istnieje możliwość samodzielnego zarządzania plikami cookies. Umożliwiają to np. przeglądarki internetowe. W najpopularniejszych przeglądarkach istnieje możliwość:</p>

                            <p className="my-5">zaakceptowania obsługi „cookies”, co pozwolii na pełne korzystanie z opcji oferowanych przez Serwis;</p>

                            <p className="my-5">określenia ustawień dla różnych typów „cookie”, na przykład akceptowania plików trwałych jako sesyjnych itp.;</p>

                            <p className="my-5">blokowania lub usuwania cookies.</p>

                            <p className="my-5">Efektem zmiany ustawień w przeglądarce, w zależności od wybranej opcji, może być utrata możliwości korzystania z Serwisu lub z niektórych funkcji w nich dostępnych.</p>

                            <h2 className="font-prometobold text-blue-500 my-5">Odnośniki do innych stron</h2>

                            <p className="my-5">Serwis zawiera odnośniki do innych stron WWW. Serwisy obce mogą także używać plików cookies, które umożliwiają logowanie się, oraz służą dostarczaniu reklam odpowiadających upodobaniom i zachowaniom użytkownika. W szczególności takie cookies to:</p>

                            <p className="my-5">w serwisie youtube.com – zawierające preferencje użytkownika, oraz liczydło kliknięć (opisane są w polityce prywatności http://www.google.pl/intl/pl/policies/privacy/)</p>

                            <p className="my-5">Operator serwisu jfcpolska.pl nie ponosi odpowiedzialności za zasady zachowania prywatności obowiązujące na innych stronach. Namawiamy, by po przejściu na inne strony internetowe, zapoznać się z polityka prywatności tam ustaloną. Niniejsza polityka prywatności dotyczy tylko witryny: www.jfcpolska.pl.</p>

                            <h2 className="font-prometobold text-blue-500 my-5">Przysługujące prawa</h2>

                            <p className="my-5"> W sytuacji, w której dane osobowe przetwarzane są na podstawie zgody, osobie której dane dotyczą przysługuje prawo wycofania zgody. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem.</p>


                            <p className="my-5">Osoba, której dane dotyczą ma w każdej chwili prawo do uzyskania informacji o treści przetwarzanych danych oraz prawo ich poprawiania i usunięcia (bycia zapomnianym) o ile jest to zgodne z obowiązującymi przepisami prawa lub też ograniczenia ich przetwarzania np. w celach marketingowych, a także prawo do przenoszenia danych osobowych.</p>

                            <p className="my-5">Osoba, której dane dotyczą ma prawo wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych.</p>

                            <h2 className="font-prometobold text-blue-500 my-5">Zmiany w polityce prywatności</h2>

                            <p className="my-5">Politykę prywatności JFC Polska sp. z o.o. jest regularnie monitorowana. Wszelkie zmiany Polityki prywatności JFC Polska sp. z o.o. będą zamieszczane w tym serwisie.</p>
                        </div>
                    </div>
                </>
            </XlContainer>

           <Footer /> 
        </>
    );
}

export default PolitykaPrywatnosci;