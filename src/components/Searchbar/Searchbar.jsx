import { Component } from 'react';
import { FormElement, Header, Input, Button } from './Searchbar.styled';

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
      <Header className="searchbar">
        <FormElement className="form" onSubmit={this.handleSubmit}>
          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleSearchbarValue}
          />

          <Button type="submit" className="button" disabled={!this.state.value}>
            <span className="button-label">Search</span>
          </Button>
        </FormElement>
      </Header>
    );
  }
}

export default Searchbar;
