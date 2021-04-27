import { Component } from "react";
import shortId from "shortid";
import Header from "./components/Header";
import Container from "./components/UI/Container";
import SearchBar from "./components/HomePage/SearchBar";
import ApartmentList from "./components/HomePage/ApartmentList";
import apartments from "./apartments.json";
import Button from "./components/UI/Button";
import Modal from "./components/UI/Modal";
import FormModal from "./components/HomePage/FormModal";

class App extends Component {
  state = {
    query: "",
    filter: "",
    apartments: apartments,
    showModal: false,
  };
  componentDidMount() {
    const ap = localStorage.getItem("ap");
    const parsedAp = JSON.parse(ap);

    if (parsedAp) {
      this.setState({ apartments: parsedAp });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const nextAp = this.state.apartments;
    const prevAp = prevState.apartments;
    if (nextAp !== prevAp) {
      localStorage.setItem("ap", JSON.stringify(nextAp));
    }
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  addApartment = ({ title, descr, rating, price }) => {
    const newApartment = {
      id: shortId.generate(),
      title,
      descr,
      rating,
      price,
    };
    this.setState(({ apartments }) => ({
      apartments: [newApartment, ...apartments],
    }));
    this.toggleModal();
  };
  deleteById = (id) => {
    const newApartments = this.state.apartments.filter((el) => el.id !== id);
    this.setState({
      apartments: newApartments,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      query: event.currentTarget.value,
    });
  };
  handleSearchBtnClick = () => {
    this.setState({
      filter: this.state.query,
    });
  };
  getCurrentApartments = () => {
    const { filter, apartments } = this.state;
    const normalizedFilter = filter.toLowerCase();
    if (filter) {
      return apartments.filter((el) =>
        el.title.toLowerCase().includes(normalizedFilter)
      );
    }
    return apartments;
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Button onClick={this.toggleModal} className={"addBtn"}>
            Add appartment
          </Button>
          {this.state.showModal && (
            <Modal onClose={this.toggleModal}>
              <Button className={"crossBtn"} onClick={this.toggleModal}>
                X
              </Button>
              <FormModal onSubmit={this.addApartment} />
            </Modal>
          )}
          <SearchBar
            onClick={this.handleSearchBtnClick}
            onChange={this.handleInputChange}
          />
          <ApartmentList
            onClick={this.deleteById}
            items={this.getCurrentApartments()}
          />
        </Container>
      </div>
    );
  }
}

export default App;
