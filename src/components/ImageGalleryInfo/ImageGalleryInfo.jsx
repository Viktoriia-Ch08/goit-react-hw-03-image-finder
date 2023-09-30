import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Component } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { getImages } from 'services/image-gallery-api';
import { Lightbox } from 'react-modal-image';

class ImageGalleryInfo extends Component {
  state = {
    items: [],
    chosenImage: null,
    isLoading: false,
  };

  page = 1;
  totalImages = 0;

  componentDidUpdate(prevProps, _) {
    const prevValue = prevProps.value;
    const nextValue = this.props.value;

    if (prevValue !== nextValue) {
      this.page = 1;
      this.setState({ items: [] });
      this.fetchImages(nextValue);
    }
  }

  fetchImages = async value => {
    this.setState({ isLoading: true });
    const data = await getImages(value, this.page);
    this.totalImages = data.total;

    this.setState({
      items: [...this.state.items, ...data.hits],
      isLoading: false,
    });

    return data;
  };

  handleMoreImage = () => {
    this.page += 1;

    if (this.state.items.length >= this.totalImages) {
      toast.warn("We're sorry, but you've reached the end of search results.", {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      return;
    }

    this.fetchImages(this.props.value);
  };

  updateChosenImage = image => {
    this.setState({
      chosenImage: image,
    });
  };

  resetChosenImage = () => {
    this.setState({
      chosenImage: null,
    });
  };

  render() {
    const { chosenImage, isLoading, items } = this.state;
    return (
      <>
        <ImageGallery hits={items} onImageClick={this.updateChosenImage} />
        {items.length !== 0 && (
          <button type="button" onClick={this.handleMoreImage}>
            Load more
          </button>
        )}
        {isLoading && <InfinitySpin width="200" color="#4fa94d" />}
        {chosenImage && (
          <Lightbox
            large={chosenImage.largeImageURL}
            onClose={this.resetChosenImage}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryInfo;
