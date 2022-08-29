type Props = {
    subcategory: string,
}

const SubcategoryBox = ({ subcategory }:Props) => {
    return (
        <a href={`#${subcategory}`} className="group">
            <div className="w-[170px] border-[8px] border-blue-500 bg-blue-500 group-hover:bg-blue-300 group-hover:border-blue-300 aspect-square flex transition-all duration-300 easy-in-out">
                <h5 className="my-auto mx-auto font-prometobold uppercase text-white group-hover:scale-[0.9] transition-all duration-300 easy-in-out">{ subcategory }</h5>
            </div>
        </a>
    );
}

export default SubcategoryBox;