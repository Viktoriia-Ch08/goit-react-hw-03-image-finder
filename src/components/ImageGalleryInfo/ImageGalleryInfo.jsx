import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Component } from 'react';
import { Circles } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { getImages } from 'services/image-gallery-api';
import { Lightbox } from 'react-modal-image';
import { ButtonContainer, LoadButton } from './ImageGalleryInfo.styled';

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
      this.fetchImages(nextValue).then(data => {
        if (data.total === 0) {
          this.showWarning(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      });
    }
  }

  showWarning = title => {
    toast.warn(title, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

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
          <ButtonContainer>
            <LoadButton
              disabled={this.state.items.length >= this.totalImages}
              type="button"
              onClick={this.handleMoreImage}
            >
              Load more
            </LoadButton>
          </ButtonContainer>
        )}
        {isLoading && (
          <Circles
            className="loader"
            height="80"
            width="80"
            color="rgba(190, 86, 250, 1)"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
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
