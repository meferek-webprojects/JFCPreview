import NavLink from "./NavLink";
import NavDropdown from "./NavDropdown";
import Image from "next/image";
import logoImage from '../../../public/images/logo/logo-full-white.png';
import logoMiniImage from '../../../public/images/logo/logo-mini-white.png';
import { useState, useEffect, useRef } from 'react';
import ScrollToTop from "../ScrollToTop";

type Props = {
    main?: boolean;
};

const Nav = ({ main }: Props) => {
    
    const [navOpen, setNavOpen] = useState(false);
    const [offset, setOffset] = useState(0);
    const [windowSize, setWindowSize] = useState(0);
    const [navHiddenPx, setNavHiddenPx] = useState(0);

    const prevOffset = useRef(0)

    const dropdownItems = [
        "Zbiorniki i dystrybutory",
        "Systemy dezynfekcji",
        "Rolnictwo",
        "Wyposażenie stajni",
        "Świetliki i kurtyny",
        "Gromadzenie wody",
        "Recykling",
        "Gospodarka wodno-ściekowa",
        "Donice dekoracyjne",
        "Infrastruktura morska",
        "Higiena i bezpieczeństwo"
    ];

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset)

            if(!navOpen){
                if(navHiddenPx + (prevOffset.current - offset) <= -88)
                    setNavHiddenPx(-88)
                else if(navHiddenPx + (prevOffset.current - offset) >= 0)
                    setNavHiddenPx(0)
                else
                    setNavHiddenPx(navHiddenPx + (prevOffset.current - offset))
            }
    
            prevOffset.current = offset
        }

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [offset, navHiddenPx, navOpen]);

    // useEffect(() => {
    //     if(!navOpen){
    //         if(navHiddenPx + (prevOffset.current - offset) <= -88)
    //             setNavHiddenPx(-88)
    //         else if(navHiddenPx + (prevOffset.current - offset) >= 0)
    //             setNavHiddenPx(0)
    //         else
    //             setNavHiddenPx(navHiddenPx + (prevOffset.current - offset))
    //     }

    //     prevOffset.current = offset
    // }, [offset])

    return (
        <>
            <ScrollToTop offset={offset} setOffset={setOffset}/>
            <div style={windowSize < 1280 ? {transform: `translateY(${navHiddenPx}px)`} : undefined} className={"xl:py-3 flex flex-wrap z-30 w-full transition-colors top-0 ease-in-out duration-300" + ((!main || offset >= 10) ? " bg-blue-700" : "") + (main ? " fixed" : " sticky")}>
                <div className={"flex w-full z-30 xl:hidden transition duration-200" + ((navOpen || !main) ? " bg-blue-700" : "") + (navOpen ? "" : " delay-[250ms]")}>
                    <NavLink link="/" noHover="true" className="mr-auto ml-3"><Image priority={true} alt="image" src={ logoMiniImage } width="75px" height="50px"/></NavLink>
                    <div className="flex px-3 mr-2 text-white hover:scale-[1.2] transition ease-in-out duration-300" onClick={() => { setNavOpen(!navOpen) }}>
                        { navOpen ?
                            <i className="bi bi-x text-3xl my-auto"></i>
                        :
                            <i className="bi bi-list text-3xl my-auto"></i>
                        }
                    </div>
                </div>
                
                <div className={"flex flex-col xl:flex-row overflow-x-hidden overflow-y-scroll w-full scrollbar-hide xl:overflow-visible fixed xl:static transition-[height] duration-[250ms] delay-[0ms] xl:transition-none xl:h-auto xl:bg-transparent xl:translate-y-0 bg-blue-700"
                + (navOpen ? " h-screen" : " h-0")
                + (navOpen ? ((!main || offset >= 10) ? " delay-[0ms]" : " delay-[200ms]") : "")
                }>
                    <div className={"flex flex-col xl:flex-row basis-0 grow justify-end"}>
                        <NavLink link="/">Strona główna</NavLink>
                        <NavDropdown dropdownItems={dropdownItems} offSet={offset} main={main} navOpen={navOpen} setNavOpen={setNavOpen} windowSize={windowSize}>Produkty i usługi <i className="bi bi-caret-right-fill xl:hidden ml-2"></i><i className="bi bi-caret-down-fill hidden xl:inline-block ml-2"></i></NavDropdown>
                        <NavLink link="/katalogi">Katalogi</NavLink>
                    </div>
                    
                    <NavLink noHover="true" link="/" className="hidden xl:block mx-5"><Image alt="image" priority={true} src={logoImage} width="200px" height="70px"/></NavLink>
                    
                    <div className={"flex flex-col xl:flex-row basis-0 grow"}>
                        <NavLink link="/dofinansowania-z-ue">Dofinansowania z UE</NavLink>
                        <NavLink link="/serwis">Serwis</NavLink>
                        <NavLink link="/kontakt">Kontakt</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;