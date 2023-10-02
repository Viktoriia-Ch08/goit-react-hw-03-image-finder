import { Component } from 'react';
import { LargeImg, ModalWindow, Overlay } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEscape);
  }
  componentWillUnmount() {
    window.addEventListener('keydown', this.closeByEscape);
  }

  closeByEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
      document.body.style.overflow = 'scroll';
    }
  };
  onClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
      document.body.style.overflow = 'scroll';
    }
  };

  render() {
    const { bigImg, name } = this.props;
    document.body.style.overflow = 'hidden';
    return (
      <Overlay onClick={this.onClose} overflow="hidden">
        <ModalWindow>
          <LargeImg src={bigImg} alt={name} />
        </ModalWindow>
      </Overlay>
    );
  }
}

export default Modal;
