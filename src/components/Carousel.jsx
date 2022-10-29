import React, { useState } from 'react';
import { images } from '../components/Data';

function Carousel() {
	const [currentImg, setCurrentImg] = useState(0);

	return (
		<div className="container">
			<div style={{ backgroundImage: `url(${images[currentImg].img})` }}></div>
		</div>
	);
}

export default Carousel;
