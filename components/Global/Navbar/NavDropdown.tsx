import { useState } from 'react';
import Link from 'next/link';
import departments from "../../../pages/database/departments.json";

type Props = {
    children: string | JSX.Element | React.ReactNode,
    className?: string,
    dropdownItems: string[],
    offSet: number,
    main?: boolean,
    navOpen: boolean,
    setNavOpen: any,
    windowSize: number
};

const NavDropdown = ({ children, className, dropdownItems, offSet, main, navOpen, setNavOpen, windowSize }: Props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="group w-full text-center xl:w-auto my-3 mx-auto xl:my-auto">
            <div onClick={() => { setDropdownOpen(!dropdownOpen) }} className={`text-white font-semibold uppercase py-1 tracking-wide relative before:hidden xl:before:block before:absolute before:bottom-0 before:inset-x-0 before:h-[2px] before:transition-colors before:duration-300 before:bg-white-900/[.0] hover:before:bg-white flex-col group-hover:after:absolute group-hover:after:top-full group-hover:after:inset-x-0 group-hover:after:h-10`
            + (className ? ` ${className}` : ``)
            }>
                {children}
            </div>
            <div className={`absolute top-[88px] right-0 xl:right-auto xl:top-full xl:mt-3 flex flex-col justify-center whitespace-nowrap z-10 h-[calc(100vh-88px)] xl:h-auto overflow-hidden transition-[max-height,transform] ease-linear duration-[300ms,200ms] bg-blue-500 w-full xl:w-auto`
            + ((offSet || !main) ? ` xl:mt-3 xl:bg-blue-700` : ` xl:mt-0 xl:bg-white`)
            + ((windowSize >= 1280 ? ` max-h-0 group-hover:max-h-screen` : (dropdownOpen ? ` translate-x-0` : ` translate-x-full`)))
            }>
                {windowSize < 1280 ?
                    <div onClick={() => { setDropdownOpen(!dropdownOpen) }} className="absolute top-[calc((100%-480px)/4)] xs:top-[calc((100%-576px)/4)] left-[5%] text-left text-white text-xl font-prometo cursor-pointer">
                        <i className="bi bi-caret-left-fill mr-2"></i>
                    </div>
                : null}
                {dropdownItems.map((dropdownItem) => 
                    <Link href={ "/dzial/" + departments.find(d => d.name == dropdownItem)!.urlName } key={ dropdownItem }>
                        <a onClick={() => { setNavOpen(!navOpen); setDropdownOpen(!dropdownOpen) }}>
                            <div className={`py-2 xs:py-3 xs:px-5 text-center font-semibold cursor-pointer uppercase xl:text-left xl:text-base transition-colors duration-300 ease-in-out text-white${(offSet || !main) ? " xl:hover:bg-blue-900/[0.99]" : " xl:text-blue-900 xl:hover:bg-grey-200/[0.99]"}`}>{ dropdownItem }</div>
                        </a>
                    </Link>
                )}
                <Link href="/produkcja-kontraktowa">
                    <a onClick={() => { setNavOpen(!navOpen); setDropdownOpen(!dropdownOpen) }}>
                        <div className={`py-3 px-5 text-center font-semibold cursor-pointer uppercase xl:text-left xl:text-base transition-colors duration-300 ease-in-out text-white${(offSet || !main) ? " xl:hover:bg-blue-900/[0.99]" : " xl:text-blue-900 xl:hover:bg-grey-200/[0.99]"}`}>Produkcja Kontraktowa</div>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default NavDropdown;