import "../CSS/Category.css"

const Category = () => {

const categories = [
"All","Pizza","Burger","Noodles","Chicken","Fish","Sandwich","Soup","Cake"
]

return(

<div className="category">

<h2>Choose from your favourite category</h2>

<div className="category-list">

{categories.map((item,index)=>(
<div className="cat-item" key={index}>
{item}
</div>
))}

</div>

</div>

)

}

export default Category