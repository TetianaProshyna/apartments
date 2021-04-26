import Button from "../../UI/Button";
import Input from "../../UI/Input";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onChange, onClick }) => {
  return (
    <div className={styles.searchBar}>
      <Input onChange={onChange} className={styles.input} />
      <Button onClick={onClick} className={styles.button}>
        Search
      </Button>
    </div>
  );
};
export default SearchBar;
