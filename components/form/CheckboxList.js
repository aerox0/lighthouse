import React from 'react'
import styled from 'styled-components'
import Checkbox from './checkbox'

const Container = styled('div')`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`

const Item = styled('div')`
	flex-basis: 33.333%;
	flex-grow: 1;

	&:not(:last-child) {
		margin-bottom: 8.25px;
	}

	&:nth-child(3n + 3) {
		text-align: right;
	}

	&:nth-child(2) {
		text-align: center;
	}

	&:nth-child(3n + 5) {
		text-align: center;
	}
`

const CheckboxList = ({ list }) => {
	return (
		<Container>
			{list.map(({ label, name }, i) => {
				return (
					<Item key={i}>
						<Checkbox name={name || i} label={label} />
					</Item>
				)
			})}
		</Container>
	)
}

export default CheckboxList
