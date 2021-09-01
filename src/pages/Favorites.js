import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { actionRemoveRecipe } from '../redux/actions/favorites'

function Favorites() {
    const recipes = useSelector(state => state.recipes)
    const dispatch = useDispatch()
    
    function handleRemove(recipe) {
        dispatch(actionRemoveRecipe(recipe))
    }
    return (
        <div>
            <Container>
            <div className='row justify-content-space-between' style={{ display: "flex" }}>
                {recipes.map((recipe, index) => {
                    return (


                        <Card className="col-sm-3" key={index} style={{ margin: '10px 0', width: '18rem' }}>
                            <Card.Img variant="top" src={recipe.image} />
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Card.Text> Cook Time : {recipe.readyInMinutes} minutes
                                </Card.Text>
                                <Button onClick={() => { handleRemove(recipe) }} variant="primary">Remove</Button>
                                
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
