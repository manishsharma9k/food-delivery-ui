import "../CSS/Restaurant.css"

const Restaurant = () => {

const restaurants = [
{
id:1,
name:"Mindels Burger and Fries",
image:"/images/Mindels Burger.jpg"
},
{
id:2,
name:"Croson Sub and Sandwiches",
image:"/images/croson sandwich.jpg"
},
{
id:3,
name:"Rolls and drools",
image:"/images/Rolls and drools.jpg"
},
{
id:4,
name:"Made in heaven",
image:"/images/pesty.jpg"
}
]

return (

<div className="restaurant">

<h2>Restaurants Near You</h2>

<div className="restaurant-container">

{restaurants.map((item)=>(
<div className="restaurant-card" key={item.id}>

<img src={item.image} />

<h4>{item.name}</h4>

<div className="rating">
⭐⭐⭐⭐⭐
</div>

</div>
))}

</div>

</div>

)

}

export default Restaurant