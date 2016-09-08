import React from 'react'

export default React.createClass({
  render() {
    return (
        <div className={`modal ${this.props.modalOpenClass}`}>
          <span onClick={this.props.onExitClick}
              className="modal_hide">Back to Album
            </span>
          <span className="modal_back"
                onClick={this.props.onBackClick}>
              {"<"}
            </span>

          <img src={this.props.src}
               alt={this.props.alt}
               className="modal_image"/>
          <span className="modal_next"
                onClick={this.props.onNextClick}>
            {">"}
          </span>
        </div>
    )
  }
})
