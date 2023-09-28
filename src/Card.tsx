import "./sass/Card.scss";
import equilibrium from "./assets/image-equilibrium.jpg";
import ethereum from "./assets/icon-ethereum.svg";
import clock from "./assets/icon-clock.svg";
import avatar from "./assets/image-avatar.png";

const Card = () => {
  return (
    <section className="card">
      <div className="imageContainer">
        <img src={equilibrium} alt="equilibrium" />
        <div className="overlay"></div>
      </div>
      <div className="contentContainer">
        <a href="#" className="title">
          Equilibrium #3429
        </a>
        <p className="desc">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="info">
          <span>
            <img src={ethereum} alt="ethereum" />
            <p>0.041 ETH</p>
          </span>
          <span>
            <img src={clock} alt="clock" />
            <p>3 days left</p>
          </span>
        </div>
        <hr />
        <div className="prof">
          <img src={avatar} alt="avatar" />
          <p>
            Creation of <a href="#">Jules Wyvern</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;
