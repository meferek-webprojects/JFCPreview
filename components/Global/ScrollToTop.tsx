type Props = {
    offset: any,
    setOffset: any,
}

const ScrollToTop = ({offset, setOffset}: Props) => {
    return (
        <div onClick={() => window.scrollTo(0, 0) } className={`fixed bottom-0 right-0 z-20 duration-300 transition-all east-in-out ` + (offset > 200 ? "opacity-100 translate-x-0 " : "translate-x-[20rem]") }>
            <div className="bg-blue-700 m-5 xl:m-10 text-white pt-2 pb-2 px-3 aspect-square cursor-pointer group-hover:scale-[1.1]">
                <i className="bi bi-chevron-up text-3xl duration-300 transition-all east-in-out"></i>
            </div>
        </div>
    );
}

export default ScrollToTop;