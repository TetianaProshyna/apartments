import { Component } from "react";
import Header from "./components/Header";
import Container from "./components/UI/Container";
import SearchBar from "./components/HomePage/SearchBar";
import ApartmentList from "./components/HomePage/ApartmentList";
import apartments from "./apartments.json";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <SearchBar />
          <ApartmentList items={apartments} />
        </Container>
      </div>
    );
  }
}

export default App;
