import React, { Component } from 'react';

export default class FormColorSelector extends Component {

	onColorSelect(color) {
		this.props.handleSelectColor(color);
	}

	render() {
		const pstyle = {
			visibility: 'hidden'
		};
		return (
			<div className="form-box">
				<div className="col-container">color</div>
				<div onClick={()=> this.onColorSelect('black')} className="col-container black">
					<p>black</p>						
					{this.props.selectedColor === "black" ? <i className="ion-ios-checkmark-empty"></i> : <p style={pstyle}>?</p> }
				</div>
				<div onClick={()=>this.onColorSelect('beige')} className="col-container beige">
					<p>beige</p>
					{this.props.selectedColor === "beige" ? <i className="ion-ios-checkmark-empty"></i> : <p style={pstyle}>?</p> }
				</div>	
			</div>
		)
	}
}