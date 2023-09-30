import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ImageGalleryInfo from './ImageGalleryInfo/ImageGalleryInfo';
class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    // items: [],
  };

  handleSearchingValue = value => {
    // toast('Wow so easy !');
    this.setState({ searchValue: value });
  };

  handleLoadMoreButton = () => {};

  render() {
    return (
      <div>
        <Searchbar onSubmitHandler={this.handleSearchingValue} />
        {/* {this.state.items.length !== 0 ? (
          <ImageGallery hits={this.state.items} />
        ) : (
          <p>No results</p>
        )} */}
        <ImageGalleryInfo
          value={this.state.searchValue}
          hits={this.state.items}
        />
        {/* {this.state.items.length !== 0 && (
          <button type="button" onClick={this.handleLoadMoreButton}>
            Load more
          </button>
        )} */}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
