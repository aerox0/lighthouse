import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Block } from '../blocks/Container'
import { TagButton } from '../Button'
import { SettingContext } from '../../utils/SettingContext'
import List from './List'
import Filter from './Filter'

const Container = styled('div')`
	margin-top: 25px;
`

const list = [
	{
		label: 'Bedroom',
		count: 0,
		settings: [
			{
				name: '1',
				label: 'Studio',
				active: false
			},
			{
				name: '2',
				label: '1 Bedrooms',
				active: false
			},
			{
				name: '3',
				label: '2 Bedrooms',
				active: false
			},
			{
				name: '4',
				label: '3 Bedrooms',
				active: false
			},
			{
				name: '5',
				label: '4 Bedrooms',
				active: false
			},
			{
				name: '6',
				label: '5 Bedrooms',
				active: false
			}
		]
	},
	{
		label: 'Pet-friendly',
		count: 0,
		settings: [
			{
				name: '1',
				label: 'Studio',
				active: false
			},
			{
				name: '2',
				label: '1 Bedrooms',
				active: false
			},
			{
				name: '3',
				label: '2 Bedrooms',
				active: false
			},
			{
				name: '4',
				label: '3 Bedrooms',
				active: false
			},
			{
				name: '5',
				label: '4 Bedrooms',
				active: false
			},
			{
				name: '6',
				label: '5 Bedrooms',
				active: false
			}
		]
	},
	{
		label: 'Rewards',
		count: 0,
		settings: [
			{
				name: '1',
				label: 'Studio',
				active: false
			},
			{
				name: '2',
				label: '1 Bedrooms',
				active: false
			},
			{
				name: '3',
				label: '2 Bedrooms',
				active: false
			},
			{
				name: '4',
				label: '3 Bedrooms',
				active: false
			},
			{
				name: '5',
				label: '4 Bedrooms',
				active: false
			},
			{
				name: '6',
				label: '5 Bedrooms',
				active: false
			}
		]
	},
	{
		label: 'Something else',
		count: 0,
		settings: [
			{
				name: '1', // it's like id not required
				label: 'Studio',
				active: false
			},
			{
				name: '2',
				label: '1 Bedrooms',
				active: false
			},
			{
				name: '3',
				label: '2 Bedrooms',
				active: false
			},
			{
				name: '4',
				label: '3 Bedrooms',
				active: false
			},
			{
				name: '5',
				label: '4 Bedrooms',
				active: false
			},
			{
				name: '6',
				label: '5 Bedrooms',
				active: false
			}
		]
	}
]

const Settings = () => {
	// settingList are the checkbox
	const [setting, setSetting] = useState({ activeId: null, settingList: list })

	const value = useMemo(() => ({ setting, setSetting }), [setting])

	return (
		<SettingContext.Provider value={value}>
			<Container>
				<Block row ai="center">
					<Block style={{ marginRight: 8 }}>
						<TagButton circle>
							<img src="/images/settings.svg" alt="Settings" />
						</TagButton>
					</Block>

					<Block
						row
						style={{ width: '100%', overflow: 'hidden', marginRight: -20 }}
					>
						<List list={setting.settingList} />
					</Block>
				</Block>
			</Container>

			<Filter />
		</SettingContext.Provider>
	)
}

export default Settings
