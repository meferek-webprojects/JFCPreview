import Link from "next/link";

type Props = {
    children: string | JSX.Element | React.ReactNode,
    color?: string,
    size?: string,
    className?: string,
    link?: string,
    type?: string,
}

const Button = ({ color, className, children, link, size }: Props) => {

    let btnText = "";
    let btnColor = "";
    let btnHoverColor = "";


    switch (color) {
        case "blue":
            btnText = "text-white";
            btnColor = "bg-blue-700";
            btnHoverColor = "hover:bg-blue-500"
            break;
        case "lightblue":
            btnText = "text-white";
            btnColor = "bg-blue-500";
            btnHoverColor = "hover:bg-blue-700"
            break;
        case "orange":
            btnText = "text-white";
            btnColor = "bg-orange";
            btnHoverColor = "hover:bg-orange/80"
            break;
        default:
            btnText = "text-white";
            btnColor = "bg-blue-700";
            btnHoverColor = "hover:bg-blue-500"
            break;
    }

    return (
        <>
            { link ? 
                <Link href={ link }>
                    <button className={`px-4 py-2 font-proximabold transition duration-300 easy-in-out text-${size ? size : "lg"} ${btnText} ${btnColor} ${btnHoverColor} ${className}`}>
                        { children } 
                    </button>
                </Link>
            :

                <button className={`px-4 py-2 font-proximabold transition duration-300 easy-in-out text-${size ? size : "lg"} ${btnText} ${btnColor} ${btnHoverColor} ${className}`}>
                    { children } 
                </button>
        
            }
        </>
    );
}

export default Button;