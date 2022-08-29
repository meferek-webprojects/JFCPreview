import { LgContainer } from "../Global/Containers";
import Title from "../Global/Title";

type Props = {
    movie: string,
}

const ProductMovie = ({movie}: Props) => {
    return (
        <LgContainer>
            <Title main="Zobacz film produktu" secondary="JFC POLSKA" id="movie"/>
            <div className="w-4/5 aspect-video mx-auto border-[10px] border-blue-700 bg-blue-700">
                <iframe width="100%" height="100%" src={`https://www.youtube-nocookie.com/embed/${movie}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </LgContainer>
    );
}

export default ProductMovie;