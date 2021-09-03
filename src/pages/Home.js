import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionSaveRecipe } from '../redux/actions/favorites';
import { actionSetSearch } from '../redux/actions/search'
import '../components/Home.css'
import { GoSearch } from 'react-icons/go';

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
        <div className="home">
            <div>
                <h1 className="homeTitle">Bon Appétit</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className="searchBar" size="40" placeholder="Search Ingredients" value={search} onChange={(e) => dispatch(actionSetSearch(e.target.value))}
                    />
                    <button type="submit"><GoSearch /></button>
                </form>
                <br />
                <Container >
                    <div className='row justify-content-center' style={{ display: "flex" }} >
                        {recipes.map((recipe, index) => {
                            return (

                                <Card className="col-sm-3" key={index} style={{ margin: '10px 10px', width: '18rem' }}>
                                    <Card.Img variant="top" style={{ padding: '10px' }}src={recipe.image} />
                                    <Card.Body>
                                        <Card.Title>{recipe.title}</Card.Title>
                                        <Card.Text style={{margin: '20px'}}> Cook Time : {recipe.readyInMinutes} minutes
                                        </Card.Text>
                                        <div className='row justify-content-around' style={{ display: "flex" }}>
                                            <Link style={{color: 'purple', fontWeight: 'bold' , textDecoration: 'none' ,padding:'10px'}} to={`/details/${recipe.id}`}>Details</Link>
                                            <br />
                                            <Button onClick={() => { handleSave(recipe) }} variant="primary" style={{borderColor:'black',backgroundColor: 'grey'}}>Save</Button>
                                        </div>
                                    </Card.Body>
                                </Card>

                            )
                        })}
                    </div>
                </Container>



            </div>
        </div>
    )
}

export default Home

