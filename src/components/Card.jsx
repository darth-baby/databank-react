function Card({ imageSrc, characterName }) {
  return (
    <a className="card" href="#">
      <img src={imageSrc} alt={characterName} />
      <div className="card-description">
        <div className="indicator"></div>
        <h3>{characterName}</h3>
      </div>
    </a>
  );
}

export default Card;