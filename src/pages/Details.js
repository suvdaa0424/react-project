import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../components/Details.css'

function Details() {
    const { id } = useParams()
    const [details, setDetails] = useState(null);
    // const [listItem, setListItem ] = useState('')
    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=dcd1b4599a3b406fa61e24437190a2f2`)
            .then((res) => res.json())
            .then((data) => {
                // checking what kind of data we should store
                setDetails(data)
            })
    }, [id]);

    if (!details) {
        return "";
    }

    // JSON.parse(details.instructions, (key, value) => {
    //     console.log(key);
    //     setListItem(value);     
    //   });

    return (
        <div className="image">
            <img className="image__img" src={details.image} alt="food" />
            <div className="image__overlay image__overlay--blur">
                <div className="row">
                    <div className="image__title">{details.title}</div>
                    <h3>Ingredients</h3>
                    <p className="image__description">{details.extendedIngredients.map((ingredient, index) => {
                        return (
                            <span key={index}>
                                {ingredient.original} <br />
                            </span>
                        )
                    })} </p>
                    <h3>Instructions</h3>
                    <div className="image__instructions" dangerouslySetInnerHTML={{ __html: details.instructions }}></div>
                </div>
            </div>
        </div>

    )
}

export default Details
