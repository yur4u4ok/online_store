import {Products} from "../components/ProductContainer/Products";
import {Categories} from "../components/CategoryContainer/Categories"
import {useState, useEffect } from "react";
import {useNavigate, NavLink} from "react-router-dom";

import css from './MainPage.module.css'
import { productService } from "../services/productService";
import { categoryService } from "../services/categoryService";


const MainPage = () => {
    const [chosenCategory, setChosenCategory] = useState(null)
    const [resetAll, setResetAll] = useState(null)
    const [products, setProducts] = useState([])

    const navigate = useNavigate();


    useEffect(() => {
        if (chosenCategory){
            setResetAll(null)
            categoryService.getProductsByCategory(chosenCategory).then(({data}) => setProducts(data))
        }
        if(resetAll || !chosenCategory) {
            productService.getAll().then(({data}) => setProducts(data))
        }
    }, [chosenCategory, resetAll]);


    const handleSearch = (e) => {
        const searchText = e.target.value
        const query = `name=${searchText}`

        productService.getByParams(query).then(({data}) => setProducts(data))
    }

    return (
        <div>
            <div className={css.header}>
                <div className={css.ordersButton} onClick={() => navigate('/orders')}>
                    MY ORDERS
                </div>
                <div className={css.cartButton} onClick={() => navigate('/cart')}>
                    CART
                </div>
                <Categories setChosenCategory={setChosenCategory} setResetAll={setResetAll}/>
                <div>
                    <input placeholder="Search..." onChange={handleSearch}></input>
                </div>
                <div>
                    <NavLink to={'/login'}>Have an account already? To Login...</NavLink>
                </div>
            </div>
            <hr/>
            <Products products={products}/>
            {products && products.length < 1 && 
                <div>There are no any products yet</div>
            }
            <hr/>
        </div>
    );
};

export {MainPage};