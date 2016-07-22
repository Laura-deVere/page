import React, { Component } from 'react';
import DropDownMenu from './product-form-dropdown';
import FormColorSelector from './product-form-colorselector';

export default class ProductForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quantity: 1,
			price: 35,
			selectedColor: "black",
			selectedSize: "size"
		};
		this.handleSelectSize = this.handleSelectSize.bind(this);
		this.handleSelectColor = this.handleSelectColor.bind(this);
	}
	
	addTotalQuantity() {
		this.setState({
			quantity: this.state.quantity + 1,
			price: this.state.price + 35
		});
	}

	minusTotalQuantity() {
		if(this.state.quantity != 1) {
			this.setState({
				quantity: this.state.quantity -1,
				price: this.state.price -35
			});
		} else {
			return this.state.quantity
		}
	}

	handleSelectColor(color) {
		if(color === "black"){
			this.setState({
				selectedColor: "black"
			});
		} else 
			{this.setState({
				selectedColor: "beige"
			});
		}
	}

	handleSelectSize(size) {
		this.setState({
			selectedSize: size
		});
	}

	render() {
		const position = {
			position: this.props.position,
			top: this.props.top
		}
		return (
			<div style={position} className="product-form">
				<div className="price">
					<span>${this.state.price}.00</span>
				</div>	
					<FormColorSelector handleSelectColor={this.handleSelectColor} selectedColor={this.state.selectedColor} />
					<div className="item-quantity form-box">
						<p onClick={this.minusTotalQuantity.bind(this)}><i className="ion-minus"></i></p>
						<p className="quantity">quantity ({this.state.quantity})</p>
						<p onClick={this.addTotalQuantity.bind(this)}><i className="ion-plus"></i></p>
					</div>
					<DropDownMenu size={this.state.selectedSize} handleSelectSize={this.handleSelectSize} />
					<a className="size-lnk" href="#">what&apos;s my size?</a>
					<div className="form-box black add-to-cart">
						<p>add to cart</p>
					</div>
				<a href="#" className="cycle-link">build a cycle set and save up to 20%</a>
			</div>
		);
	}
}