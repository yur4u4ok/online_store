import {Product} from "./Product";


const Products = ({products}) => {
    
    return (
        <div>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    );
};

export {Products};