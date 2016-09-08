import React from 'react'

export default React.createClass({
  render() {
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

          <img src={this.props.src}
               alt={this.props.alt}
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
