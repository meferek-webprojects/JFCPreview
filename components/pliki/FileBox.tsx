import Link from "next/link";

type Props = {
    name?: string,
    file: string,
    className?: string,
}

const FileBox = ({name, file, className}: Props) => {
    return (
        <div className={className}>
            <Link href={ file } >
                <a target="_blank" rel="noreferrer" className="flex flex-col text-center group hover:scale-[1.15] transition-all duration-300 easy-in-out">
                { file.includes('.pdf') ? 
                    <i className="bi bi-file-earmark-pdf-fill text-7xl mb-4 group-hover:text-blue-500 transition-all duration-300 easy-in-out"></i>
                : null}
                    <p className="font-prometo text-blue-900 group-hover:text-blue-500 transition-all duration-300 easy-in-out uppercase">{ name }</p>
                </a>
            </Link>
        </div>
    );
}

export default FileBox;