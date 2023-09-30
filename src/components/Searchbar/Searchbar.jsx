import { Component } from 'react';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleSearchbarValue = event => {
    this.setState({ value: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitHandler(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button" disabled={!this.state.value}>
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleSearchbarValue}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
