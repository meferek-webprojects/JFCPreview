type Props = {
    offset: any
}

const ShopIcon = ({offset}: Props) => {
    return (
        <a href="https://jfcpolskasklep.pl" target="_blank" rel="noreferrer">
            <div className="fixed bottom-0 left-0 z-20 duration-300 transition-all east-in-out -translate-x-[186px] group hover:-translate-x-0">
                <div className={(offset > 200 ? "bg-blue-500/[0.2]" : "bg-blue-500") + ` mb-5 xl:mb-10 text-white pt-3 pb-3 px-4 flex cursor-pointer group-hover:bg-blue-500`}>
                    <p className="mt-[6.4px] text-xl font-prometo">Zobacz nasz sklep</p><i className="bi bi-cart4 text-3xl ml-4 duration-300 transition-all east-in-out"></i>
                </div>
            </div>
        </a>
    );
}

export default ShopIcon;