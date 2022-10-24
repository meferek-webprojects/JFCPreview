import { LgContainer } from "../Global/Containers";
import Title from "../Global/Title";

type Props = {
    dimensions_table: string[][],
}

const ProductDimensions = ({dimensions_table}:Props) => {

    return (
        <LgContainer className="mt-28">
            <Title main="Tabela wymiarów" className="xl:py-24"/>
            <div className="w-full overflow-x-auto">
                <table className="mx-auto border-collapse text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap sm:whitespace-normal xs:w-full">
                    <tbody>
                        {dimensions_table.map((row, row_index) => 
                            <tr key={row[0]} className="border-y-[1px] border-gray-400">
                                {row.map((cell, cell_index) => 
                                    <td className={"px-2 lg:px-3 py-1 lg:py-2" + (cell_index == 0 ? " text-blue-700 font-bold" : (row_index == 0 ? " font-medium text-gray-600" : " text-gray-500"))} key={cell}>
                                        {cell}
                                    </td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </LgContainer>
    );
}

export default ProductDimensions;