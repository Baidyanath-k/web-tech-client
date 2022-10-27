import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Category from '../category/Category';


const DetailsCategory = () => {
    const detailCategory = useLoaderData()
    
    return (
        <div>
            {
                detailCategory.map(category=> <Category
                    key={category._id}
                    category={category}
                ></Category>)
            }
        </div>
    );
};

export default DetailsCategory;