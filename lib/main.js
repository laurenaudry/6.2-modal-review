import React from 'react'
import Modal from './modal'

export default React.createClass({
  getDefaultProps(){
    return {
      albums: {
        "Blue": [
          {
            src: "blue2.jpeg",
            alt: "blue smoke"
          }
        ],
        "Pink": [
          {
            src: "blue2.jpeg",
            alt: "twice for example"
          }
        ]
      }
    }
  },
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
    let albumNamesArray = Object.keys(this.props.albums);
    return (
      <section>
        <ul>
          {
            albumNamesArray.map((albumName, i)=>{
              return <li key={i}>{albumName}</li>
            })
          }
        </ul>
        <img src={`./assets/${this.props.albums["Blue"][0].src}`}
             alt={`${this.props.albums["Blue"][0].alt}`}
             className="image"
             onClick={this.onImageClickHandler}/>
           <Modal modalOpenClass={this.state.modalOpenClass}
                  src={this.state.modalImageSrc}
                  alt={this.state.modalImageAlt}/>
      </section>
    )
  }
})
