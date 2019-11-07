import React from 'react'
import styled from 'styled-components'
import { TagButton } from '../Button'

const Container = styled('div')`
	overflow: auto;
	display: flex;
	align-items: center;
`

const Item = styled('div')`
	&:not(:last-child) {
		margin-right: 8px;
	}

	&:last-child {
		padding-right: 8px;
	}

	${TagButton} {
		font-size: 1em;
		font-weight: bold;
		line-height: 1.6em;
		padding: 8px 8px;
	}
`

const Highlights = ({ list }) => {
	return (
		<Container>
			{list.map(({ label }, i) => {
				return (
					<Item key={i}>
						<TagButton style={{ whiteSpace: 'nowrap' }}>{label}</TagButton>
					</Item>
				)
			})}
		</Container>
	)
}

export default React.memo(Highlights)
