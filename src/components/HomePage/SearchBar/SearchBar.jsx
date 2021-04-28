import { Component } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import styles from "./SearchBar.module.css";

class SearchBar extends Component {
  state = {
    query: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  handleInputChange = (event) => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.searchBar}>
        <Input
          value={this.state.query}
          onChange={this.handleInputChange}
          className={styles.input}
        />
        <Button type={"submit"} className={styles.button}>
          Search
        </Button>
      </form>
    );
  }
}
export default SearchBar;
