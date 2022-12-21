
import { Component } from 'react';
import axios from "axios";
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';


class App extends Component {
state = {images: []}

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com//search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID hiKmtT28gvuRry3zqFX0oY75jIv--mMITwpAm_2n4oI",
      },
    });
    this.setState({images:response.data.results});

  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={ this.state.images} />
      </div>
    );
  }
}
export default App;
