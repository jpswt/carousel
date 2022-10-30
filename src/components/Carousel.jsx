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
				<div
					className="left-col"
					onClick={() => {
						currentImg > 0 && setCurrentImg(currentImg - 1);
					}}
				>
					<FaChevronCircleLeft style={{ fontSize: '40px' }} />
				</div>
				<div className="center-col">
					<h1>{images[currentImg].title}</h1>
				</div>
				<div
					className="right-col"
					onClick={() => {
						currentImg < images.length - 1 && setCurrentImg(currentImg + 1);
					}}
				>
					<FaChevronCircleRight style={{ fontSize: '40px' }} />
				</div>
			</div>
		</div>
	);
}

export default Carousel;
