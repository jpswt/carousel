import React, { useState } from 'react';
import { images } from '../components/Data';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';
import './Carousel.css';

function Carousel() {
	const [currentImg, setCurrentImg] = useState(0);

	return (
		<div className="container">
			<div
				className="carousel"
				style={{ backgroundImage: `url(${images[currentImg].src})` }}
			>
				<div className="left-col">
					<FaChevronCircleLeft style={{ fontSize: '40px' }} />
				</div>
				<div className="center-col"></div>
				<div className="right-col">
					<FaChevronCircleRight style={{ fontSize: '40px' }} />
				</div>
			</div>
		</div>
	);
}

export default Carousel;
