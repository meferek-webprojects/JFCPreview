import FooterNavLink from "./FooterNavLink";

const FooterNav = () => {
    return (
        <>
            <h5 className="hidden md:block font-proximabold text-2xl mb-10">MENU</h5>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 w-3/5 mx-auto">
                    <div>
                        <FooterNavLink url="/serwis" name="Serwis" />
                        <FooterNavLink url="/#o-firmie" name="O firmie" />
                        <FooterNavLink url="/ogolne-warunki-sprzedazy" name="Ogólne warunki sprzedaży" />
                        <FooterNavLink url="/polityka-prywatnosci" name="Polityka prywatności" />
                        <FooterNavLink url="/komunikat-ws-rodo" name="Komunikat ws. RODO" />
                        <FooterNavLink url="/katalogi" name="Katalogi i foldery" />
                        <FooterNavLink url="https://jfcpolskasklep.pl" target="_blank" name="Sklep JFC POLSKA" />
                    </div>
                    <div>
                        <FooterNavLink url="/" name="Strona główna" />
                        <FooterNavLink url="/dzial/rolnictwo" name="Rolnictwo" />
                        <FooterNavLink url="/dzial/zbiorniki-i-dystrybutory" name="Zbiorniki i dystrybutory" />
                        <FooterNavLink url="/dzial/gromadzenie-wody" name="Gromadzenie wody" />
                        <FooterNavLink url="/dzial/recykling" name="Pojemniki do segregacji" />
                        <FooterNavLink url="/dzial/donice-dekoracyjne" name="Donice dekoracyjne" />
                        <FooterNavLink url="/instrukcje" name="Instrukcje obsługi" />
                    </div>
            </div>
        </>
    );
}

export default FooterNav;