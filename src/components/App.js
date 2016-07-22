import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductText from './product-text';
import ProductImage from './product-image';
import ProductForm from './product-form';
import ListShopImage from './list-shop-image';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      position: 'fixed',
      top: '192px'
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
      document.addEventListener('scroll', this.handleScroll);    
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
        })
      }
  }
  render() {
    return (
    	<div className="app-container">
    	<div className="product-container">
      	<ProductText top={this.state.top} position={this.state.position} /> 
        <ProductImage />
      	<ProductForm top={this.state.top} position={this.state.position} />
      </div>
      	<ListShopImage />	
      </div>
    );
  };

}
