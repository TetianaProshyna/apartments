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
import MouseDecorator from "./components/MouseDecorator/MouseDecorator";
import plus from "./img/plus.svg";
class App extends Component {
  state = {
    searchQuery: "",
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
  onSearchSubmit = (query) => {
    this.setState({ searchQuery: query });
  };
  getCurrentApartments = () => {
    const { searchQuery, apartments } = this.state;
    const normalizedFilter = searchQuery.toLowerCase();
    if (searchQuery) {
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
          <MouseDecorator />
          <Button
            data-decorate="true"
            data-icon={plus}
            onClick={this.toggleModal}
            className={"addBtn"}
          >
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
          <SearchBar onSubmit={this.onSearchSubmit} />
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
