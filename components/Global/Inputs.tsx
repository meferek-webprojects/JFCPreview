type Props = {
    attributes: object,
    className?: string,
    children?: JSX.Element[] | JSX.Element | React.ReactNode
}


export const Input = ({ attributes, className, children }: Props) => {

    return (
        <input className={`font-proxima px-4 py-2 bg-blue-300/[0.07] w-full border-2 border-blue-900/[.09] active:border-blue-300 focus-visible:border-blue-300 focus:border-blue-300/[1] focus:outline-none file:font-proxima file:border-1 file:border-blue-500/[0.1] file:bg-white file:mr-5 file:px-4 file:py-1 file:text-blue-900 file:m-0 file:hover:bg-blue-700/[0.1] file:cursor-pointer file:transition file:duration-300 file:easy-in-out ` + (className ? " " + className : "")} {...attributes}/>
    );

}

export const Textarea = ({ attributes, className }: Props) => {

    return (
        <textarea className={`font-proxima px-4 py-2 bg-blue-300/[0.07] w-full border-2 border-blue-900/[.09] active:border-blue-300 focus-visible:border-blue-300 focus:border-blue-300/[1] focus:outline-none file:font-proxima file:border-1 file:border-blue-500/[0.1] file:bg-white file:mr-5 file:px-4 file:py-1 file:text-blue-900 file:m-0 file:hover:bg-blue-700/[0.1] file:cursor-pointer file:transition file:duration-300 file:easy-in-out ` + (className ? " " + className : "")} {...attributes}></textarea>
    );
    
}

export const Select = ({ attributes, className, children }: Props) => {

    return (
        <select className={`custom-select font-proxima px-4 py-2 bg-blue-300/[0.07] w-full border-2 border-blue-900/[.09] active:border-blue-300 focus-visible:border-blue-300 focus:border-blue-300/[1] focus:outline-none ` + (className ? " " + className : "")} {...attributes}>
            { children }
        </select>
    );
    
}