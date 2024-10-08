import {useEffect, useState} from "react";
import {categoryService} from "../../services/categoryService";
import {Category} from "./Category";

import css from './Categories.module.css'


const Categories = ({setChosenCategory, setResetAll}) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        categoryService.getAll().then(({data}) => setCategories(data))
    }, []);
    
    return (
        <div className={css.categoriesMainDiv}>
            <span>Categories: </span>

            <div onClick={() => setResetAll(1)} className={css.buttonAll}>ALL</div>

            <div className={css.categoriesDiv}>
                {categories.map(category => <Category key={category.id} category={category} setChosenCategory={setChosenCategory}/>)}
            </div>
        </div>
    );
};

export {Categories};