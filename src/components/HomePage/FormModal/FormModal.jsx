import { Component } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import styles from "./FormModal.module.css";

class FormModal extends Component {
  state = {
    title: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, name) => {
      data[name] = value;
    });
    this.props.onSubmit(data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <span>Title</span>
          <Input
            name={"title"}
            className={styles.input}
            placeholder={"Title"}
          />
        </label>
        <label className={styles.label}>
          <span>Rating</span>
          <Input
            name={"rating"}
            className={styles.input}
            placeholder={"Rating"}
            type={"number"}
            min={1}
            max={5}
            required={"required"}
          />
        </label>
        <label className={styles.label}>
          <span>Description</span>
          <textarea
            name={"descr"}
            className={styles.textarea}
            placeholder={"Description"}
          />
        </label>
        <Button type={"submit"} className={"addBtn"}>
          Add Apartment
        </Button>
      </form>
    );
  }
}
export default FormModal;
