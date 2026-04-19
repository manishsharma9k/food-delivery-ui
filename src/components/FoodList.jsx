import "../CSS/FoodList.css";
import FoodCard from "./FoodCard"
import foodData from "../data/foodData"

const FoodList = () => {

return(

<div className="food-container">

{foodData.map((food)=>(
<FoodCard key={food.id} food={food}/>
))}

</div>

)

}

export default FoodList