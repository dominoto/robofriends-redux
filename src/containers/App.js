import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import { setSearchField } from "../actions";

// Make state available as props
const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

// Make dispatch available as props
const mapDispatchToProps = (dispatch) => {
  return {
    // Function that dispatches action
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      //   searchfield: "", // Moved to state store
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  //// Not needed anymore because it is defined in dispatch
  //   onSearchChange = (event) => {
  //     this.setState({ searchfield: event.target.value });
  //   };

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props; // Destructure props
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // Higher-order function that connects App component with redux store 
