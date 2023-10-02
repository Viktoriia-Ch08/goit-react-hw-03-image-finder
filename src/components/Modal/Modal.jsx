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
    }
  };
  onClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { bigImg, name } = this.props;
    return (
      <Overlay onClick={this.onClose}>
        <ModalWindow>
          <LargeImg src={bigImg} alt={name} />
        </ModalWindow>
      </Overlay>
    );
  }
}

export default Modal;
