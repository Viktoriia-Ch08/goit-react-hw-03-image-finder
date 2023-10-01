import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ImageGalleryInfo from './ImageGalleryInfo/ImageGalleryInfo';
class App extends Component {
  state = {
    searchValue: '',
    page: 1,
  };

  handleSearchingValue = value => {
    this.setState({ searchValue: value });
  };

  handleLoadMoreButton = () => {};

  render() {
    return (
      <div>
        <Searchbar onSubmitHandler={this.handleSearchingValue} />
        <ImageGalleryInfo
          value={this.state.searchValue}
          hits={this.state.items}
        />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
