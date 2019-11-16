import React from 'react'
import Dropdown from '../components/dropdown/Dropdown'
import RangePrice from '../components/price/RangePrice'
import CheckboxList from '../components/form/CheckboxList'
import SelectField from '../components/form/fields/SelectField'

const dropdown = () => {
	return (
		<div style={{ paddingTop: 20, paddingLeft: 20, paddingBottom: 900 }}>
			<div style={{ marginBottom: 160 }}>
				<Dropdown>
					<div className="title" style={{ marginBottom: 15 }}>
						Search (listing contains)
					</div>
					<CheckboxList
						block
						list={[
							{
								label: 'String',
								name: 'string',
								active: false
							},
							{
								label: 'String1',
								name: 'string1',
								active: false
							}
						]}
					/>
				</Dropdown>
			</div>
			<div style={{ marginBottom: 160 }}>
				<Dropdown>
					<SelectField
						icon={() => <img src="/images/bedroom.svg" />}
						options={[
							{ label: '1' },
							{ label: '2' },
							{ label: '3' },
							{ label: '4+' }
						]}
						name="random"
						label="Studio"
					/>
				</Dropdown>
			</div>
			<div>
				<Dropdown>
					{({ open, setOpen }) => (
						<RangePrice handleApply={() => setOpen(false)} />
					)}
				</Dropdown>
			</div>
		</div>
	)
}

export default dropdown
