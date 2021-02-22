import React, { useEffect, useState, useMemo } from "react"
import Select from 'react-select'

const options = (categories, categoryFilter) => {
    const optionsTab = [];
    for (let i = 0; i < categories.length; i++) {
        if(!categoryFilter.includes(categories[i])) {
            optionsTab.push({
                label: categories[i],
                value: categories[i]
            })
        }
    }
    return optionsTab;
}

const Category = ({ movies, categories, handleChange }) => {

    const categoryFilter  = useMemo(() => {
        const cat = [];
        categories.forEach(category => {
            if(!movies.find(movie => movie.category === category)) {
                cat.push(category);
            }
        })
        return cat;
    }, [categories, movies]);

    const handler = (filters) => {
        console.log('filters ', filters);
        const filteredMovies = [];
        filters.forEach(filter => movies.forEach(movie => {
            if(movie.category === filter.value) {
                filteredMovies.push(movie);
            }
        }));
        if(filteredMovies.length === 0 && filters.length === 0) {
            handleChange(movies)
        } else {
            handleChange(filteredMovies);
        }
    }

    return (
        <div>
            <Select options={options(categories, categoryFilter)} isMulti onChange={(filters) => handler(filters)}/>
        </div>
    )
}

export default Category;