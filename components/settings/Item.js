import React, { useContext, useCallback } from 'react'
import styled from 'styled-components'
import { TagButton } from '../Button'
import { SettingContext } from '../../utils/SettingContext'

const Container = styled('div')`
	&:not(:last-child) {
		margin-right: 8px;
	}
	&:last-child {
		padding-right: 8px;
	}

	.active {
		background-color: ${p => p.theme.colors.primary};
		color: #fff;
	}
`

const Item = ({ label, count, id }) => {
	const { setting, setSetting } = useContext(SettingContext)

	const handleToggle = useCallback(() => {
		if (setting.activeId == id) setSetting({ ...setting, activeId: null })
		else setSetting({ ...setting, activeId: id })
	}, [setting])

	return (
		<Container>
			<TagButton
				className={setting.activeId == id ? 'active' : ''}
				onClick={handleToggle}
				style={{ whiteSpace: 'nowrap' }}
				bordered
				bdrs="4px"
			>
				{label} {!!count ? `(${count})` : ''}
			</TagButton>
		</Container>
	)
}

export default React.memo(Item)
