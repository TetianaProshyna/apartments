import PropTypes from "prop-types";
import Button from "../../UI/Button";
import styles from "./ApartmentCard.module.css";
const Rating = ({ value }) => {
  let stars = [];

  for (let i = 0; i < +value; i++) {
    stars.push(<span key={i}>⭐</span>);
  }

  return <div className={styles.rating}>Rating: {stars}</div>;
};
const ApartmentCard = ({ id, title, descr, imgUrl, rating, onClick }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={imgUrl} alt="apartments view" />
      {rating ? <Rating value={rating} /> : <p>Rating: n/a</p>}
      <h2>{title}</h2>
      <p>{descr}</p>
      <Button onClick={() => onClick(id)}>Delete apartment</Button>
    </div>
  );
};
ApartmentCard.defaultProps = {
  imgUrl:
    "https://res.cloudinary.com/kyoo/image/upload/v1609344654/booking/apartment-20_zwqzt4.jpg",
};
ApartmentCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  onClick: PropTypes.func,
};

export default ApartmentCard;
