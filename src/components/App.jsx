import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ImageGalleryInfo from './ImageGalleryInfo/ImageGalleryInfo';
class App extends Component {
  state = {
    searchValue: '',
  };

  handleSearchingValue = value => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmitHandler={this.handleSearchingValue} />
        <ImageGalleryInfo value={this.state.searchValue} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
