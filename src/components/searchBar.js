import React from "react";

class SearchBar extends React.Component {
  // first way to solve "this " error
  // constructor() {
  //   super();
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <div className="field">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <label>Search Pictures</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
