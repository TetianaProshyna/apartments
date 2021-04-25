import Button from "../../UI/Button";
import styles from "./ApartmentCard.module.css";
const Rating = ({ value }) => {
  let stars = [];

  for (let i = 0; i < +value; i++) {
    stars.push(<span key={i}>⭐</span>);
  }

  return <div className={styles.rating}>Rating: {stars}</div>;
};
const ApartmentCard = ({ title, descr, imgUrl, rating }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={imgUrl} alt="apartments view" />
      {rating ? <Rating value={rating} /> : <p>Rating: n/a</p>}
      <h2>{title}</h2>
      <p>{descr}</p>
      <Button>Click me</Button>
    </div>
  );
};
export default ApartmentCard;
