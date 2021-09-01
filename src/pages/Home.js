import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionSaveRecipe } from '../redux/actions/favorites';
import { actionSetSearch } from '../redux/actions/search'


function Home() {
    const dispatch = useDispatch()

    const [recipes, setRecipes] = useState([])

    const search = useSelector((state) => state.search)

    function handleSave(recipe) {
        dispatch(actionSaveRecipe(recipe))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeInformation=true&apiKey=dcd1b4599a3b406fa61e24437190a2f2`)
            .then((res) => res.json())
            .then((data) => {
                // checking what kind of data we should store
                setRecipes(data.results)
                console.log(recipes)
            })
    }
    return (
        <div>
            <h1>Homepage</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Search Ingredients" value={search} onChange={(e) => dispatch(actionSetSearch(e.target.value))}
                />
                <button type="submit">Submit</button>
            </form>
            <div className="row" >
                {recipes.map((recipe, index) => {
                    return (


                        <Card className="col-sm-3" key={index} style={{ margin: '10px 0', width: '18rem' }}>
                            <Card.Img variant="top" src={recipe.image} />
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Card.Text> Cook Time : {recipe.readyInMinutes} minutes
                                </Card.Text>
                                <Button onClick={() => { handleSave(recipe) }} variant="primary">Save</Button>
                                <Link to={`/details/${recipe.id}`}>Details</Link>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>



        </div>
    )
}

export default Home
