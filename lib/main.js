import React from 'react'
import Modal from './modal'

export default React.createClass({
  getInitialState(){
    return {
      modalOpenClass: "",
      modalImageSrc: "",
      modalImageAlt: ""
    }
  },
  onImageClickHandler(e){
    var clickedImageEl = e.target;
    this.setState({
      modalOpenClass: "modal-show",
      modalImageSrc: clickedImageEl.src,
      modalImageAlt: clickedImageEl.alt
    });
  },
  render() {
    return (
      <main>
        <img src="./assets/blue2.jpeg"
             alt="blue smoke"
             className="image"
             onClick={this.onImageClickHandler}/>
           <Modal modalOpenClass={this.state.modalOpenClass}
                  src={this.state.modalImageSrc}
                  alt={this.state.modalImageAlt}/>
      </main>
    )
  }
})
