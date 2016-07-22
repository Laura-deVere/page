import React, { Component } from 'react';

export default class ProductText extends Component {
	render() {
		const textStyle = {
			width: '328px'
		};
		const position = {
			position: this.props.position,
			top: this.props.top
		}
		return (
			<div className="product-text">
				<div style={position} className="text">
				<h3>HI-WAIST</h3>
				<p>Heavy days.  Holds up to 2 tampon&apos;s worth.</p>
				<p style={textStyle}>The phrase &quot;treat yo&apos;self&quot; reaches new belly-button brushing heights with Hi-Waist, and it&apos;s here
					just in time for cuffing season.</p>
				</div>	
			</div>
		);
	}
}