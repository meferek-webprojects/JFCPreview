import ProductThumb from "./ProductThumb";
import products from '../../pages/database/products.json';



const Popular = () => {

    const thisProductsId = ["4", "9", "10", "17"];

    const thisProducts = products.filter(p => thisProductsId.includes(p.id));
    
    return (
        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4">
            { thisProducts.map( p => 
                <ProductThumb key={ p.id } link={ "/produkt/"+p.id } image={ p.images[0] } title={ p.name }/>
            )}
        </div>
    );
}

export default Popular;