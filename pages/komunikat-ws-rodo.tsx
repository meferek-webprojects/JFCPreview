import type { NextPage } from "next";
import Head from 'next/head'
import Footer from "../components/Global/Footer/Footer";
import { LgContainer, XlContainer } from "../components/Global/Containers";
import Nav from "../components/Global/Navbar/Nav";

const KomunikatWsRodo: NextPage = () => {
    return (
        <>
            <Head>
                <title>JFC POLSKA - komunikat ws. RODO</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Nav type="static"/>

            <LgContainer className="mt-[5rem]">
                <>
                    <div className="grid grid-cols-1 gap-5 mt-10 mb-48 text-xl">
                        <div className="border-4 border-blue-300 p-12 text-justify">
                            <h1 className="font-prometobold text-blue-700 text-4xl mb-4">Komunikat w sprawie RODO</h1>
                            <ol className="list-decimal">
                                <h2 className="font-prometobold text-blue-500 my-5">Informacja o przetwarzaniu danych osobowych przez JFC Polska sp. z o.o.</h2>

                                <p className="my-5">W związku z realizacją wymogów Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dz.U. UE. L. z 2016 r. Nr 119, str. 1) (dalej: „RODO”) JFC Polska sp. z o.o. zwana dalej Spółką informuje o zasadach przetwarzania Pani/Pana danych osobowych oraz o prawach, które przysługują Pani/Panu w związku z powyższym.</p>

                                <p className="my-5">Niżej podane zasady mają zastosowanie od dnia 25 maja 2018 roku.</p>

                                <li className="font-prometobold text-blue-500 my-5 ml-5">WSKAZANIE ADMINISTRATORA</li>

                                Administratorem Pani/Pana danych osobowych jest JFC Polska sp. z o.o. z siedzibą w Dąbrówce, Karpi, ul. Białostocka 1, REGON: 016370470 NIP: 1251098362 wpisana do Rejestru Przedsiębiorców Krajowego Rejestru Sądowego przez Sąd Rejonowy dla m. st. Warszawy w Warszawie, XIV Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS 0000201770. Z administratorem można kontaktować się wysyłając mail pod adres: info@jfcpolska.com lub korespondencyjnie wysyłając list na adres: JFC Polska sp. z o.o. Karpin ul. Białostocka 1, 05-252 Dąbrówka.

                                <li className="font-prometobold text-blue-500 my-5 ml-5">CELE ORAZ PODSTAWA PRAWNA PRZETWARZANIA PANI/PANA DANYCH OSOBOWYCH</li>

                                Spółka przetwarza Pani/Pana dane osobowe w następujących celach:

                                <ul className="list-disc ml-10 my-5">

                                    <li>zawarcia i realizacji umowy sprzedaży produktów, towarów i usług oferowanych przez JFC Polska sp. z o.o.</li>

                                    <li>wywiązania się z obowiązków wynikających z przepisów prawa , w tym gdy znajdzie to zastosowanie w celu prowadzenia postępowań przed organami władzy publicznej, a także prowadzenia postępowań spornych, dochodzenia roszczeń oraz obrony przed roszczeniami;</li>

                                    <li>marketingowych, na podstawie wyrażonej przez Panią/Pana zgody w tym zakresie.</li>

                                </ul>

                                <li className="font-prometobold text-blue-500 my-5 ml-5">OBOWIĄZEK PODANIA DANYCH OSOBOWYCH SPÓŁCE</li>

                                <p className="my-5">Podanie przez Panią/Pana danych osobowych jest dobrowolne ale konieczne do zawarcia i wykonywania umowy ze Spółką . Konieczność podania danych osobowych wynika z realizacji obowiązków określonych we wspomnianych powyżej przepisach prawa i jest niezbędne do realizacji celów wynikających ze wskazanych powyżej prawnie uzasadnionych interesów Spółki.</p>

                                <p className="my-5">Brak podania przez Panią/Pana wszystkich wymaganych danych osobowych będzie stanowić przeszkodę do zawarcia umowy lub jej realizacji.</p>

                                <li className="font-prometobold text-blue-500 my-5 ml-5">INFORMACJE O ODBIORCACH PANI/PANA DANYCH OSOBOWYCH</li>

                                <p className="my-5">W związku z przetwarzaniem Pani/Pana danych osobowych w celu realizacji zawartej umowy sprzedaży, Pani/Pana dane osobowe mogą być udostępniane Podmiotom wspierającym Spółkę w prowadzeniu bieżącej działalności gospodarczej oraz podmiotom uczestniczącym w procesach koniecznych do wykonania zawartej z Panią/Panem umowy, w tym zwłaszcza następującym odbiorcom bądź kategoriom odbiorców:</p>

                                <ul className="list-disc ml-10 my-5">

                                    <li>pracownikom i współpracownikom, a także podmiotom świadczącym nam usługi doradcze i konsultacyjne;</li>

                                    <li>świadczącym usługi zarządzania systemem teleinformatycznym;</li>

                                    <li>firmom transportowym, kurierskim;</li>

                                    <li>firmom montażowym, pomiarowym,</li>

                                    <li>operatorom systemów płatności, firmom windykacyjnym;</li>

                                    <li>spółce Poczta Polska S.A. z siedzibą w Warszawie.</li>

                                </ul>

                                <p className="my-5">W takich przypadkach ilość przekazywanych danych ograniczona jest do wymaganego minimum.</p>

                                <p className="my-5">Ponadto podane przez Państwa informacje mogą zostać udostępnione właściwym organom władzy publicznej, jeżeli wymagają tego obowiązujące przepisy prawa.</p>

                                <li className="font-prometobold text-blue-500 my-5 ml-5">OKRESY PRZETWARZANIA DANYCH OSOBOWYCH</li>

                                <p className="my-5">Pani/Pana dane osobowe będą przetwarzane przez okres niezbędny do realizacji wskazanych w pkt. 2 celów, tj. w zakresie realizacji zawartej przez Panią/Pana umowy, do czasu zakończenia jej realizacji, a po tym czasie przez okres wymagany przez przepisy prawa lub dla realizacji przez Spółkę uzasadnionego interesu administratora danych w zakresie określonym w pkt. 2, a w przypadku wyrażenia przez Panią/Pana zgody na przetwarzanie danych po rozwiązaniu bądź wygaśnięciu umowy, do czasu wycofania tej zgody.</p>

                                <li className="font-prometobold text-blue-500 my-5 ml-5">PRAWA OSOBY, KTÓREJ DANE DOTYCZĄ</li>

                                <p className="my-5">Spółka zapewnia, że wszystkim osobom, których dane są przez nią przetwarzane, przysługują odpowiednie prawa wynikające z RODO. W związku z tym przysługują Pani/Panu następujące prawa:</p>

                                <ul className="list-disc ml-10 my-5">

                                    <li>prawo dostępu do danych – prawo do zażądania kopii posiadanych przez nas informacji;</li>

                                    <li>prawo do sprostowania – prawo do poprawiania nieprawidłowych lub niekompletnych danych, które są w naszym posiadaniu;</li>

                                    <li>prawo do bycia zapomnianym – w pewnych okolicznościach można złożyć wniosek o usunięcie przechowywanych przez nas danych;</li>

                                    <li>prawo do ograniczenia przetwarzania – w przypadku spełnienia określonych warunków prawo do ograniczenia przetwarzania danych;</li>

                                    <li>prawo do przenoszenia – prawo do przekazania danych, będących w naszym posiadaniu do innej organizacji;</li>

                                    <li>prawo do sprzeciwu – prawo sprzeciwiania się niektórym rodzajom przetwarzania, takim jak na przykład marketing bezpośredni;</li>

                                    <li>prawo do wniesienia skargi do organu nadzorczego, tj. Prezesa Urzędu ds. ochrony danych osobowych.</li>

                                </ul>

                                <p className="my-5">W zakresie, w jakim udzieliła Pani/Pan zgody na przetwarzanie danych osobowych, przysługuje Pani/Panu prawo do jej cofnięcia. Cofnięcie zgody nie ma wpływu na zgodność z prawem przetwarzania danych, którego dokonano na podstawie zgody przed jej wycofaniem.</p>

                                <li className="font-prometobold text-blue-500 my-5 ml-5">PROFILOWANIE ORAZ ZAUTOMATYZOWANE PODEJMOWANIE DECYZJI</li>

                                <p className="my-5">Spółka nie podejmuje zautomatyzowanego podejmowania decyzji w odniesieniu do danych osobowych, w tym profilowania, o którym mowa w przepisie art. 22 ust. 1 i 4 RODO.</p>

                                <li className="font-prometobold text-blue-500 my-5 ml-5">PRZEKAZYWANIE DANYCH OSOBOWYCH DO PAŃSTW TRZECICH LUB ORGANIZACJI MIĘDZYNARODOWYCH</li>

                                <p className="my-5">Spółka eksportuje towary i usługi również poza granice UE. W celu realizacji umów eksportowych, dane osobowe mogą być udostępniane podmiotom współpracującym ze Spółką mającym siedzibę poza Unią Europejską.</p>

                                <p className="my-5">W takich przypadkach ilość przekazywanych danych ograniczona jest do wymaganego minimum a dostęp do danych odbywa się na podstawie zawartych standardowych klauzul umownych. Spółka nie przekazuje dobrowolnie danych osobowych do organizacji międzynarodowych.</p>

                                <p className="my-5">Jeśli ma Pani/Pan pytania dotyczące sposobu i zakresu przetwarzania Pani/Pana danych osobowych przez Spółkę, a także przysługujących Pani/Panu uprawnień, prosimy o kontakt ze Spółką pod adresem ul. Białostocka 1, Karpin, 05-252 Dąbrówka bądź poprzez wiadomość e-mail skierowaną na adres: info@jfcpolska.com</p>
                            </ol>
                        </div>
                    </div>
                </>
            </LgContainer>

           <Footer /> 
        </>
    );
}

export default KomunikatWsRodo;