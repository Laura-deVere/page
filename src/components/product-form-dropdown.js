import React, { Component } from 'react';

export default class DropDownMenu extends Component {
	onSizeSelect(size) {
		this.props.handleSelectSize(size);
	}

	render() {
		return (
			<div className="form-box drop-down-menu">
				<div className="drop-dwn-btn">
					<p>{this.props.size}</p>
					<i className="ion-ios-arrow-down"></i>
				</div>
				<div className="dropdown-sizes">
			    <p onClick={() => this.onSizeSelect("XS")}>XS</p>
			    <p onClick={() => this.onSizeSelect("S")}>S</p>
			    <p onClick={() => this.onSizeSelect("M")}>M</p>
			    <p onClick={() => this.onSizeSelect("L")}>L</p>
			    <p onClick={() => this.onSizeSelect("XL")}>XL</p>
			    <p onClick={() => this.onSizeSelect("XXL")}>XXL</p>
			    <p onClick={() => this.onSizeSelect("3XL")}>3XL</p>
			  </div>
			</div>
		);
	}
}