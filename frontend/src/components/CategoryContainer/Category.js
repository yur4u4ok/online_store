import css from './Category.module.css'

const Category = ({category, setChosenCategory}) => {
    const {id, name} = category;
    return (
        <div onClick={() => setChosenCategory(id)} className={css.category}>
            <div>{name.toUpperCase()}</div>
        </div>
    );
};

export {Category};