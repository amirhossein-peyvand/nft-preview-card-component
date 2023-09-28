import equilibrium from "./assets/image-equilibrium.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={equilibrium} alt="equilibrium" />
      </div>
      <div className="contentContainer">
        <a href="#">Equilibrium #3429</a>
        <p> Our Equilibrium collection promotes balance and calm.</p>
      </div>
    </div>
  );
};

export default Card;
