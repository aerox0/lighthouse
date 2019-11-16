import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import ReactSlider from 'react-slider'
import PriceField from '../form/fields/PriceField'
import Button from '../Button'

const Container = styled('div')`
	.divider {
		transform: translateY(45%);
		padding: 5px 16px;
		font-size: 0.8em;
	}

	.rangePrice {
		&__body {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__range {
			margin-top: 30px;
			padding: 7px;
		}
		&__apply {
			margin-top: 20px;
			text-align: center;
		}
	}
`

const RangePrice = ({
	min = 0,
	max = 100,
	defaultValue = [0, 100],
	handleApply
}) => {
	const [values, setValues] = useState(defaultValue)

	const handleSlider = useCallback(e => {
		const [val1, val2] = e
		setValues([val1, val2])
	}, [])

	return (
		<Container className="rangePrice">
			<div className="rangePrice__body">
				<PriceField
					label="Min Price"
					name="min-price"
					value={values[0]}
					onChange={e => setValues([values[0], e.target.value])}
				/>
				<div className="divider">-</div>
				<PriceField
					label="Max Price"
					name="max-price"
					value={values[1]}
					onChange={e => setValues([values[0], e.target.value])}
				/>
			</div>

			<div className="rangePrice__range">
				<ReactSlider
					className="slider"
					thumbClassName="handle"
					trackClassName="bar"
					defaultValue={defaultValue}
					min={min}
					max={max}
					onChange={handleSlider}
					ariaLabel={['Lower thumb', 'Upper thumb']}
					ariaValuetext={state => `Thumb value ${state.valueNow}`}
					renderThumb={(props, state) => (
						<div className="handle handle-0" {...props}>
							<div className="slider-handle">
								<img src="/images/bars.svg" />
							</div>
						</div>
					)}
					pearling
					minDistance={10}
				/>
			</div>

			<div className="rangePrice__apply">
				<Button primary onClick={handleApply}>
					Apply
				</Button>
			</div>
		</Container>
	)
}

export default RangePrice
