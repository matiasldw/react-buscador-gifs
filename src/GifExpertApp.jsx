import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) =>{

        if( categories.includes(newCategory) ){
            return;
        }

        // categories.push(newCategory);
        setCategories( [ newCategory, ...categories ] );
        // setCategories( cat => [ ...cat, catNew ] );
    }

    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory = { event => onAddCategory(event) }
        />
        {
            categories.map( category => (
                <GifGrid
                    key={ category }
                    category={ category } />
            )) 
        }
    </>
    );
}
