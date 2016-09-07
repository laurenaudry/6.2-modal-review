import React from 'react'

export default React.createClass({
  getInitialState() {
   return {
     currentImage: this.props.currentAlbumName[0],
     modalOpen: false
   }
 },
 exitClickHandler(e){

 },
  render() {
    return (
        <div className={`modal ${this.props.modalOpenClass}`}>
          <img src={this.props.src}
               alt={this.props.alt}
               className="modal_image"/>
        </div>
    )
  }
})
