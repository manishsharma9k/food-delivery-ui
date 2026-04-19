
import "../CSS/FoodCard.css";

const FoodCard = ({food}) => {
  return (
    <div className="food-card">

      <img src={food.image} alt={food.name} />

      <h4>{food.name}</h4>

      <p>{food.price}</p>

      <div className="rating">
        ⭐⭐⭐⭐⭐
      </div>

    </div>
  )
}

export default FoodCard