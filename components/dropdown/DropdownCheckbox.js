import React, { useState } from 'react'
import Dropdown from './Dropdown'
import CheckboxList from '../form/CheckboxList'

const DropdownCheckbox = ({ list, ...props }) => {
	const [, forceReload] = useState(false)

	const handleListChange = () => {
		forceReload(s => !s)
	}

	return (
		<Dropdown
			label={`${props.label} (${list.filter(o => o.active == true).length})`}
		>
			<CheckboxList block list={list} handleChange={handleListChange} />
		</Dropdown>
	)
}

export default DropdownCheckbox
