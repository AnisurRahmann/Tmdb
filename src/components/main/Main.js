import "./Main.css";
import React from "react";
import axios from "axios";

//import Components
import Header from "../header/Header";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";

class Main extends React.Component {
  state = {
    movieId: 157336,
    data: {},
    query: "",
    searchResults: [],
    showSuggestion: true
  };
  handleInputChange = input => {
    this.setState(
      {
        query: input,
        showSuggestion: !this.state.showSuggestion
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };
  handleSelectedId = id => {
    this.setState({
      movieId: id,
      showSuggestion: !this.state.showSuggestion
    });
  };

  getInfo = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=67222d369a4e0960d7a865add024a2e2&language=en-US&query=${
          this.state.query
        }&page=1&include_adult=false`
      )
      .then(res => {
        const result = res.data.results;
        this.setState({
          searchResults: result
        });
      });
  };

  nestedDataToString = nestedData => {
    let nestedArray = [],
      resultString;
    if (nestedData !== undefined) {
      nestedData.forEach(function(item) {
        nestedArray.push(item.name);
      });
    }
    resultString = nestedArray.join(", "); // array to string
    return resultString;
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.state.movieId
        }?api_key=67222d369a4e0960d7a865add024a2e2`
      )
      .then(res => {
        this.setState({ data: res.data });
        document.getElementById(
          "main"
        ).style.backgroundImage = `url("https://image.tmdb.org/t/p/original${
          this.state.data.backdrop_path
        }")`;
      });
  }
  componentDidUpdate() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.state.movieId
        }?api_key=67222d369a4e0960d7a865add024a2e2`
      )
      .then(res => {
        this.setState({
          data: res.data
        });
        document.getElementById(
          "main"
        ).style.backgroundImage = `url("https://image.tmdb.org/t/p/original${
          this.state.data.backdrop_path
        }")`;
      });
  }

  render() {
    return (
      <div className="main'">
        <header>
          <Header
            handleInputChange={this.handleInputChange}
            query={this.state.query}
            results={this.state.searchResults}
            getId={this.handleSelectedId}
            showSuggestion={this.state.showSuggestion}
          />
        </header>
        <main id="main">
          <Banner
            data={this.state.data}
            arrToString={this.nestedDataToString}
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default Main;
