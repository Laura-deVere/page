import React, { Component } from 'react';

export default class ProductImage extends Component {
	onImageZoom(visibilty) {
    this.props.handleOverLayVisibility(visibilty);
    console.log('hello');
  }

	render() {
		return (  
			<div className="product-image-scroll">
        <div className="img-container" onClick={()=> this.onImageZoom('visible')} >
          <div className="img-1"></div>
          <div className="img-2"></div>
          <div className="img-3"></div>
          <div className="img-4"></div>
          <div className="img-5"></div>
          <div className="img-6"></div>
        </div>
      </div>	
		);
	}
}
