import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductText from './product-text';
import ProductImage from './product-image';
import ProductForm from './product-form';
import ListShopImage from './list-shop-image';
import ImageOverlay from './image-overlay';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      overlay: 'hidden',
      position: 'fixed',
      top: '192px'
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.handleOverLayVisibility = this.handleOverLayVisibility.bind(this)
  }

  componentDidMount() {
      document.addEventListener('scroll', this.handleScroll);    
  }

  handleOverLayVisibility(visibilty) {
    this.setState({
      overlay: visibilty
    });
  }

  handleScroll() {
    console.log(scrollY);
       if(window.scrollY >= '2700') {
        this.setState({
          position: 'absolute',
          top: '3087px'
        });
       }      
       else{
        this.setState({
          position: 'fixed',
          top: '192px'
        });
      }
  }
  render() {
    return (
    	<div className="app-container">
      <ImageOverlay overlay={this.state.overlay} handleOverLayVisibility={this.handleOverLayVisibility} />
    	<div className="product-container">
      	<ProductText top={this.state.top} position={this.state.position} /> 
        <ProductImage  handleOverLayVisibility={this.handleOverLayVisibility} />
      	<ProductForm top={this.state.top} position={this.state.position} />
      </div>
      	<ListShopImage />	
      </div>
    );
  };

}
