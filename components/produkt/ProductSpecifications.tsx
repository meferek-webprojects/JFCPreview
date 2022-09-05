import Image from "next/image";
import { LgContainer, MdContainer, SmContainer } from "../Global/Containers";
import Title from "../Global/Title";

type Props = {
    specifications: string[]
}

const ProductSpecifications = ({specifications}: Props) => {
    return (
        <>
            <Title main="Specyfikacja" id="specifications"/>

            <LgContainer className="">
                <table className="w-full">
                    <tbody>
                        { specifications.map((s) =>
                            <tr key={s[0]}>
                                <td className="border-[4px] border-blue-100 font-prometobold px-5 py-2 w-1/3 text-blue-900">{s[0]}</td>
                                <td className="border-[4px] border-blue-100 font-proxima px-5 py-2 w-2/3">{s[1]}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </LgContainer>
        </>
    );
}

export default ProductSpecifications;