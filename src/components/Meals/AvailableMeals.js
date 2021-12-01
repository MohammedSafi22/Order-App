import Card from '../UI/Card';
import './AvailableMeals.css';
import MealItem from './MealItem/MewalItem';
const DUMMY_MEALS=[
   {
       id: 'm1',
       name: 'Suchi',
       description: 'fish food for all',
       price:22.99
   },
   {
    id: 'm2',
    name: 'Suchizel',
    description: 'fish german food',
    price:17.99 
   },
   {
    id: 'm3',
    name: 'Burger',
    description: 'American fast food for all',
    price:12.99
   },
   {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy and green',
    price:19.99
   }
];
const AvailableMeals =()=>{
    const mealList=DUMMY_MEALS.map((meal)=>(
    <MealItem
     key={meal.id}
     id={meal.id}
     name={meal.name}
     description={meal.description}
     price={meal.price}
       />
       ));
    return(
        <section className="meals">
            <Card>
            <ul>{mealList}</ul>
            </Card>
        </section>
    )
}
export default AvailableMeals;