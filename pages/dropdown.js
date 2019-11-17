import React from 'react'
import Dropdown from '../components/dropdown/Dropdown'
import RangePrice from '../components/price/RangePrice'
import DropdownCheckbox from '../components/dropdown/DropdownCheckbox'
import SelectField from '../components/form/fields/SelectField'

const dropdown = () => {
	return (
		<div
			style={{
				paddingTop: 20,
				paddingLeft: 20,
				display: 'flex',
				overflowY: 'auto'
			}}
		>
			<DropdownCheckbox
				label="Amenities"
				list={[
					{
						label: 'Washer In-Unit',
						name: 'string',
						active: false
					},
					{
						label: 'Pool',
						name: 'string1',
						active: false
					},
					{
						label: 'Doorman',
						name: 'string2',
						active: false
					}
				]}
			/>
			<Dropdown label={`All`}>
				<SelectField
					icon={() => <img src="/images/bedroom.svg" />}
					options={[
						{ label: 'Studio' },
						{ label: '1' },
						{ label: '2' },
						{ label: '3' },
						{ label: '4+' }
					]}
					name="random"
				/>
			</Dropdown>
			<Dropdown label="Price">
				{({ open, setOpen }) => (
					<RangePrice handleApply={() => setOpen(false)} />
				)}
			</Dropdown>
		</div>
	)
}

export default dropdown
