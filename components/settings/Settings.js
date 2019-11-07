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
		count: 0
	},
	{
		label: 'Pet-friendly'
	},
	{
		label: 'Rewards'
	},
	{
		label: 'Something else'
	}
]

const settingList = [
	{
		name: '1', // Name is not required
		label: 'Studio'
	},
	{
		name: '2',
		label: '1 Bedrooms'
	},
	{
		name: '3',
		label: '2 Bedrooms'
	},
	{
		name: '4',
		label: '3 Bedrooms'
	},
	{
		name: '5',
		label: '4 Bedrooms'
	},
	{
		name: '6',
		label: '5 Bedrooms'
	}
]

const Settings = () => {
	// settingList are the checkbox
	const [setting, setSetting] = useState({ activeId: null, settingList })

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
						<List list={list} />
					</Block>
				</Block>
			</Container>

			<Filter />
		</SettingContext.Provider>
	)
}

export default Settings
