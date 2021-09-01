import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'

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
        <div>
            <Card className="col-sm-3" style={{ margin: '10px 0', width: '18rem' }}>
                <Card.Img variant="top" src={details.image} />
                <Card.Body>
                    <Card.Title>{details.title}</Card.Title>
                    <Card.Text> Ingredients : {details.extendedIngredients.map((ingredient, index) => {
                        return (
                            <span key={index}>
                                {ingredient.original} <br /> 
                            </span>
                        )
                    })} 
                                </Card.Text>
                                <Card.Text>
                                    Instructions 
                                </Card.Text>
                    {/* <Button onClick={() => { handleSave(recipe) }} variant="primary">Save</Button> */}
                    {/* <Link to={`/details/${.id}`}>Details</Link> */}
                </Card.Body>
            </Card>
            <div dangerouslySetInnerHTML={{__html:details.instructions}}>
            </div>

        </div>
    )
}

export default Details
