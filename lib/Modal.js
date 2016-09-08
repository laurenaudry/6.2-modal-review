import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      currentImageIndex: 0
    }
  },
  onBackClick(e){
    e.preventDefault();
    var currentIndex = this.state.currentImageIndex
    var newIndex = currentIndex === 0 ? 0 : currentIndex - 1
    this.setState({
      currentImageIndex: newIndex
    })
  },
  onNextClick(e){
    e.preventDefault();
    var currentIndex = this.state.currentImageIndex
    var newIndex = currentIndex === (this.props.currentAlbumData.length - 1) ? currentIndex : currentIndex + 1;
    this.setState({
      currentImageIndex: newIndex
    })
  },
  render() {
    let currentPhoto = this.props.currentAlbumData[this.state.currentImageIndex]
    return (
        <div className={`modal ${this.props.modalOpenClass}`}>
          <a href="#exit"
              onClick={this.props.onExitClick}
              className="modal_hide">
              Back to Album
            </a>
          <a href="#back"
             className="modal_back"
             onClick={this.props.onBackClick}>
              {"<"}
            </a>

          <img src={currentPhoto.src}
               alt={currentPhoto.alt}
               className="modal_image"/>
          <a href="#next"
             className="modal_next"
             onClick={this.props.onNextClick}>
            {">"}
          </a>
        </div>
    )
  }
})
