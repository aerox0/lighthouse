import React from 'react'
import Slider from 'react-slick'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
}

const Top = () => {
	return (
		<Slider {...settings}>
			<div>
				<img src="/images/hotel.png" alt="Hotel" />
			</div>
			<div>
				<img src="/images/hotel.png" alt="Hotel" />
			</div>
			<div>
				<img src="/images/hotel.png" alt="Hotel" />
			</div>
			<div>
				<img src="/images/hotel.png" alt="Hotel" />
			</div>
			<div>
				<img src="/images/hotel.png" alt="Hotel" />
			</div>
		</Slider>
	)
}

export default React.memo(Top)
