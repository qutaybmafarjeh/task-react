import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Recipe = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get(
          `https://forkify-api.jonas.io/api/v2/recipes?search=${searchQuery}`
        )
        setRecipes(response.data.data.recipes ?? [])
        setError('')
      } catch {
        setError('Error loading recipes')
      }
    }

    if (searchQuery) {
      getRecipes()
    }
  }, [searchQuery])

  return (
    <section>
      <h2>Recipes for {searchQuery}</h2>
      {error && <p className="error">{error}</p>}
      <div className="Recipes">
        {recipes.length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image_url} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.publisher}</p>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default Recipe