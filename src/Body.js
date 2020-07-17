import React, { useState, useEffect } from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Body(props) {

    const[items,setItems] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
        .then(response => response.json())
        .then(data => setItems(data.meals))

    },[])

    const itemsList = items.map(item=> {
        return<div className='col-md-4'>
            <p>Name:{item.strMeal}</p>
            <img src={item.strMealThumb}></img>
            <p>Id:{item.idMeal}</p>
        </div>
    })

    return (
        <div>
            <div className='row mt-5'>
                {itemsList}
            </div>

        </div>
    )
}

export default Body
