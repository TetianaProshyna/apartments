import ApartmentCard from "../ApartmentCard";
import styles from "./ApartmentList.module.css";
const ApartmentList = ({ items, onClick }) => {
  return (
    <ul className={styles.list}>
      {items.map(({ id, title, descr, imgUrl, rating }) => (
        <ApartmentCard
          id={id}
          key={id}
          rating={rating}
          title={title}
          descr={descr}
          imgUrl={imgUrl}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
export default ApartmentList;
