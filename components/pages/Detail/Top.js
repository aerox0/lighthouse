import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

const PrevButton = () => (
	<button
		type="button"
		data-role="none"
		className="slick-arrow prev"
		style="display: block;"
	>
		<img src="/images/arrow-left.svg" alt="Previous" />
	</button>
)
const NextButton = () => (
	<button
		type="button"
		data-role="none"
		className="slick-arrow next"
		style="display: block;"
	>
		<img src="/images/arrow-right.svg" alt="Next" />
	</button>
)

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: PrevButton(),
	nextArrow: NextButton()
}

const Container = styled('div')`
	.item {
		overflow: hidden;
		position: relative;
	}

	img {
		height: 215px;
		width: 100%;
		object-fit: cover;
	}

	.slick-arrow {
		z-index: 10;

		&.slick {
			&-prev {
				left: 20px;
			}
			&-next {
				right: 20px;
			}
		}
	}
`

const Top = () => {
	return (
		<Container>
			<Slider {...settings}>
				<div className="item">
					<img src="/images/hotel.png" alt="Hotel" />
				</div>
				<div className="item">
					<img src="/images/hotel.png" alt="Hotel" />
				</div>
				<div className="item">
					<img src="/images/hotel.png" alt="Hotel" />
				</div>
				<div className="item">
					<img src="/images/hotel.png" alt="Hotel" />
				</div>
				<div className="item">
					<img src="/images/hotel.png" alt="Hotel" />
				</div>
			</Slider>
		</Container>
	)
}

export default React.memo(Top)
