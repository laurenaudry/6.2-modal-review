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
      currentAlbumName: Object.keys(this.props.albums)[0]
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
    this.setState({
      currentAlbumName: clickedAlbumName
    })
  },
  onExitClick() {
  this.setState({
    modalOpenClass: ""
  })
},
  onBackClick(){

  },
  onNextClick(){

  },
  render() {
    let albumNamesArray = Object.keys(this.props.albums);
    return (
      <section>
        <h1 className="heading">My Albums</h1>
        <aside className="sidebar">
          <ul className="sidebar-list">
            {
              albumNamesArray.map((albumName, i)=>{
                return <li key={i} onClick={this.onAlbumNameClickHandler}>{albumName}</li>
              })
            }
          </ul>
        </aside>
        <h2 className="album_name">{this.state.currentAlbumName}</h2>
        {
          this.props.albums[this.state.currentAlbumName].map((imageData, i)=>{
            return <img key={i}
                        src={`./assets/${imageData.src}`}
                        alt={`${imageData.alt}`}
                        className="image"
                        onClick={this.onImageClickHandler}/>
          })
        }
        <Modal modalOpenClass={this.state.modalOpenClass}
               currentAlbumName={this.state.currentAlbumName}
               src={this.state.modalImageSrc}
               alt={this.state.modalImageAlt}
               onExitClick={this.state.onExitClick}
               onBackClick={this.onBackClick}
               onNextClick={this.onNextClick}/>
      </section>
    )
  }
})
