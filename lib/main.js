import React from 'react'
import Modal from './modal'

export default React.createClass({
  getDefaultProps(){
    return {
      albums: {
        "Blue": [
          {
            src: "blue1.jpeg",
            alt: "Bee on blue background"
          },
          {
            src: "blue2.jpeg",
            alt: "blue smoke"
          },
          {
            src: "blue3.jpeg",
            alt: ""
          }
        ],
        "Pink": [
          {
            src: "pink1.jpeg",
            alt: ""
          },
          {
            src: "pink2.jpeg",
            alt: ""
          },
          {
            src: "pink3.jpeg",
            alt: ""
          }
        ],
        "Green": [
          {
            src: "green1.jpeg",
            alt: ""
          },
          {
            src: "green2.jpeg",
            alt: ""
          },
          {
            src: "green3.jpeg",
            alt: ""
          }
        ],
        "Purple": [
          {
            src: "purple1.jpeg",
            alt: ""
          },
          {
            src: "purple2.jpeg",
            alt: ""
          },
          {
            src: "purple3.jpeg",
            alt: ""
          },
        ],
          "Red": [
            {
              src: "red1.jpeg",
              alt: ""
            },
            {
              src: "red2.jpeg",
              alt: ""
            },
            {
              src: "red3.jpeg",
              alt: ""
            }
          ],
          "Yellow": [
            {
              src: "yellow1.jpeg",
              alt: ""
            },
            {
              src: "yellow2.jpeg",
              alt: ""
            },
            {
              src: "yellow3.jpeg",
              alt: ""
            }
          ]
        }
      }
    },
  getInitialState(){
    return {
      modalOpenClass: "",
      modalImageSrc: "",
      modalImageAlt: "",
      currentAlbumName: "Choose an album"
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
  onAlbumNameClickHandler(e){
    var clickedAlbumName = e.target.innerHTML;
    this.setState()
  },
  render() {
    let albumNamesArray = Object.keys(this.props.albums);
    return (
      <section>
        <ul>
          {
            albumNamesArray.map((albumName, i)=>{
              return <li key={i} onClick={this.onAlbumNameClickHandler}>{albumName}</li>
            })
          }
        </ul>
        <h2>{this.state.currentAlbumName}</h2>
        {
          this.props.albums[this.state.currentAlbumName].map((imageData, i)=>{
            return <img src={`./assets/${this.props.albums.src}`}
                        alt={`${this.props.albums.alt}`}
                        className="image"
                        onClick={this.onImageClickHandler}/>
          })
        }
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
