import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from '../Meals/MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-food-order-d6ec1-default-rtdb.firebaseio.com/meals.json')
      
      if (!response.ok) {
        throw new Error('something went wrong, Failed To fetch')
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }
      setMeals(loadedMeals);
      setIsLoading(false);

    }
    fetchMeals().catch(error => {
      setIsLoading(false);
      setHttpError(error.message)
    })
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={classes.mealsLoading}>Loading....</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section>
        <p className={classes.mealsError}>{httpError}</p>
      </section>
    )
  }


  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))
  return (
    <section className={classes.meals}>
      <ul>
        <Card>
          {mealsList}
        </Card>
      </ul>
    </section>
  )
}

export default AvailableMeals
