import ApartmentCard from "../ApartmentCard";
import styles from "./ApartmentList.module.css";
const ApartmentList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map(({ id, title, descr, imgUrl, rating }) => (
        <ApartmentCard
          key={id}
          rating={rating}
          title={title}
          descr={descr}
          imgUrl={imgUrl}
        />
      ))}
    </ul>
  );
};
export default ApartmentList;
