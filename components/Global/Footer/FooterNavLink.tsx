import Link from "next/link";

type Props = {
    url: string,
    name: string,
    target?: string
}

const FooterNavLink = ({ url, name, target }: Props) => {
    return (
        <div className="my-5">
            <Link href={ url }><a target={target ? target : ""} className="text-xl hover:border-white border-white/[.00] border-b-2 transition-all duration-300 easy-in-out">{ name }</a></Link>
        </div>
    );
}

export default FooterNavLink;