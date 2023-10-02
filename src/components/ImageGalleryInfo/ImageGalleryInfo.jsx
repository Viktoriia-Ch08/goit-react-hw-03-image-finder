import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Component } from 'react';
import { Circles } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { getImages } from 'services/image-gallery-api';
import { Lightbox } from 'react-modal-image';
import { ButtonContainer } from './ImageGalleryInfo.styled';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

class ImageGalleryInfo extends Component {
  state = {
    items: [],
    chosenImage: null,
    isLoading: false,
    page: 1,
  };

  totalImages = 0;

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.value;
    const nextValue = this.props.value;
    console.log(this.state.page, prevState.page);

    if (prevValue !== nextValue) {
      this.setState({ items: [], page: 1 });
      this.fetchImages(nextValue, 1).then(data => {
        if (data.total === 0) {
          this.showWarning(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      });
      return;
    }

    if (prevState.page !== this.state.page) {
      this.fetchImages(this.props.value, this.state.page);
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

  fetchImages = async (value, page) => {
    this.setState({ isLoading: true });
    const data = await getImages(value, page);
    this.totalImages = data.total;

    this.setState({
      items: [...this.state.items, ...data.hits],
      isLoading: false,
    });

    return data;
  };

  incrementPage = () => {
    this.setState({ page: this.state.page + 1 });
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
        <ImageGallery images={items} onImageClick={this.updateChosenImage} />
        {items.length !== 0 && (
          <ButtonContainer>
            <Button
              type="button"
              disabled={this.state.items.length >= this.totalImages}
              onClick={this.incrementPage}
            >
              Load More
            </Button>
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
            large={chosenImage.bigImg}
            onClose={this.resetChosenImage}
          />
        )}
        <Modal />
      </>
    );
  }
}

export default ImageGalleryInfo;
