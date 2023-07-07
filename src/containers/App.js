import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import { requestRobots, setSearchField } from "../actions";

// Make state available as props
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

// Make dispatch available as props
const mapDispatchToProps = (dispatch) => {
  return {
    // Function that dispatches action
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  // // Not needed anymore, it comes from onRequestRobots()
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     //   searchfield: "", // Moved to state store
  //   };
  // }

  componentDidMount() {
    // // Not needed anymore
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => this.setState({ robots: users }));
    this.props.onRequestRobots();
  }

  // // Not needed anymore because it is defined in dispatch
  //   onSearchChange = (event) => {
  //     this.setState({ searchfield: event.target.value });
  //   };

  render() {
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props; // Destructure props
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
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
