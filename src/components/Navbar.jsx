
import { ShoppingBag } from "lucide-react";
import "../CSS/Navbar.css";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar">

      <input type="text" placeholder="Search here..." />

      <ul>
        <li className="active">Home</li>
        <li>Restaurants</li>
        <li>About Us</li>
      </ul>

      <div className="cart-icon">
        <ShoppingCart/>
        
      </div>

    </div>
  )
}

export default Navbar