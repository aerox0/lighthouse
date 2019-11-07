import React, { useState } from 'react'
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
	margin-bottom: 8.25px;

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

const CheckboxList = ({ list, id }) => {
	const selectedItem = list[id]
	const [checked, setChecked] = useState(
		selectedItem && selectedItem.settings ? selectedItem.settings : []
	)

	const handleCheck = (e, i, name) => {
		checked[i].active = e.checked
		setChecked({ ...checked })
	}

	return (
		<Container>
			{selectedItem &&
				selectedItem.settings &&
				selectedItem.settings.map(({ name, label, active }, i) => {
					return (
						<Item key={i}>
							<Checkbox
								name={name || i}
								label={label}
								checked={active}
								handleCheckChange={e => handleCheck(e, i, name)}
							/>
						</Item>
					)
				})}
		</Container>
	)
}

export default CheckboxList
