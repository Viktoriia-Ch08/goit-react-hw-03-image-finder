import { Component } from 'react';
import { FormElement, Header, Input } from './Searchbar.styled';
import { Button } from 'components/Button/Button';

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

          <Button type="submit" disabled={!this.state.value}>
            Search
          </Button>
        </FormElement>
      </Header>
    );
  }
}

export default Searchbar;
