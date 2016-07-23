import React, { Component } from 'react';

export default class ImageOverlay extends Component {
	handleZoomOut(visibility) {
		this.props.handleOverLayVisibility(visibility);
	}
	render() {
	  const visibleStyle = {
	    visibility: this.props.overlay
	  };
		return (  
      <div className="overlay" style={visibleStyle} onClick={()=> this.handleZoomOut('hidden')} >
        <div className="zoomed-img-container">
          <div className="img-1 zoomed-img"></div>
          <div className="img-2 zoomed-img"></div>
          <div className="img-3 zoomed-img"></div>
          <div className="img-4 zoomed-img"></div>
          <div className="img-5 zoomed-img"></div>
          <div className="img-6 zoomed-img"></div>
        </div>
      </div>	
		);
	}
}