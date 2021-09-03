import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { actionRemoveRecipe } from '../redux/actions/favorites'

import { Link } from 'react-router-dom'
import '../components/Favorites.css'

function Favorites() {
    const recipes = useSelector(state => state.recipes)
    const dispatch = useDispatch()

    function handleRemove(recipe) {
        dispatch(actionRemoveRecipe(recipe))
    }
    return (
        <div className="favorites">
            <h1>My Favorites</h1>
            <Container>
                <div className='row justify-content-center' style={{ display: "flex" }}>
                    {recipes.map((recipe, index) => {
                        return (
                            <Card className="favcard col-sm-3" key={index} style={{ margin: '10px 10px' , width: '18rem' }}>
                                <Card.Img variant="top" style={{ padding: '10px' }} src={recipe.image} />
                                <Card.Body>
                                    <Card.Title>{recipe.title}</Card.Title>
                                    <Card.Text> Cook Time : {recipe.readyInMinutes} minutes
                                    </Card.Text>
                                    <div className='row justify-content-around' style={{ display: "flex" }}>
                                    <Link style={{color: 'purple', fontWeight: 'bold' , textDecoration: 'none' ,padding:'10px'}} to={`/details/${recipe.id}`}>Details</Link>
                                    <br />
                                    <Button onClick={() => { handleRemove(recipe) }} variant="primary" style={{borderColor:'black',backgroundColor: 'grey'}}>Remove</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default Favorites
