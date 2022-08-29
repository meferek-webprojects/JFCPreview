import Link from 'next/link';

type Props = {
    children: string | JSX.Element | React.ReactNode,
    link: string,
    className?: string,
    noHover?: string,
};

const NavLink = ({ children, link, className, noHover }: Props) => {

    return (
        <Link href={ link }>
            <a className={`xl:flex align-middle text-white font-semibold uppercase my-3 xl:my-auto mx-auto py-1 tracking-wide relative`
            + (className ? ` ${className}` : ``)
            + (noHover ? `` : ` before:hidden xl:before:block before:absolute before:bottom-0 before:inset-x-0 before:h-[2px] before:transition-colors before:duration-300 before:bg-white-900/[.0] hover:before:bg-white`)
            }>
                {children}
            </a>
        </Link>
    );
}

export default NavLink;