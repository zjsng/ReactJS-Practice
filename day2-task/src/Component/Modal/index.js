import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {

  toggleModal = () => {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener("click", this.toggleModal);
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener("click", this.toggleModal);
  }

  render() {
    return (
      <div class="modal">
        <div class="modal-content">
          <span class="close-button">&times;</span>
          <h1>Hello, I am a modal!</h1>
        </div>
      </div>
    );
  }
}

export default Modal;