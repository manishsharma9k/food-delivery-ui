
import "../CSS/Hero.css";

const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-text">
        <h1>GET DELICIOUS FOOD <br/> AT YOUR DOORSTEPS</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>

        <button>Order Now</button>
      </div>

      <div className="hero-img">
        <img src="/images/burger1.png" />
      </div>

    </div>
  )
}

export default Hero