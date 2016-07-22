import React, { Component } from 'react';

export default class ListShopImage extends Component {
	render() {
		return (
			<div className="shop-image-container">
				<div className="hip-hug">
					<img src='/assets/css/images/thinx_productpage_-04.jpg'/>
					<a href="#">Shop Hiphugger</a>
					<p>heavy days</p>
				</div>
				<div className="cheeky">
					<img src='/assets/css/images/thinx_productpage_-03.jpg'/>
					<a href="#">Shop Cheeky</a>
					<p>light days</p>
				</div>
				<div className="thong">
					<img src='/assets/css/images/thinx_productpage_-05.jpg'/>
					<a href="#">Shop Thong</a>
					<p>lightest days</p>
				</div>
				<div className="sport">
					<img src='/assets/css/images/thinx_productpage_-07.jpg'/>
					<a href="#">Shop Sport</a>
					<p>medium days</p>
				</div>
				<div className="boyshort">
					<img src='/assets/css/images/thinx_productpage_-08.jpg'/>
					<a href="#">Shop Boyshort</a>
					<p>light days</p>
				</div>
			</div>
		);
	}
}