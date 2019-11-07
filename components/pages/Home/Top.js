import React, { useMemo, useEffect } from 'react'
import styled from 'styled-components'
import { PageTitle } from '../../typography/Title'
import { TagButton } from '../../Button'
import { Block } from '../../blocks/Container'
import Settings from '../../settings/Settings'

const Container = styled('div')`
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 16px;
	padding-bottom: 20px;
	border-top: 1px solid ${p => p.theme.colors.gray};
	border-bottom: 1px solid ${p => p.theme.colors.gray};
	position: relative;
`

const Top = ({ handleListChange, listView }) => {
	const handleClick = useMemo(() => handleListChange, [handleListChange])

	return (
		<Container>
			<Block row ai="center" jc="space-between">
				<Block style={{ marginRight: 15 }}>
					<PageTitle>San Francisco</PageTitle>
				</Block>

				<Block>
					<TagButton onClick={handleClick}>
						<span
							className="bold"
							style={{ marginRight: 8, fontSize: '1.4em' }}
						>
							{listView ? 'MAP VIEW' : 'LIST VIEW'}
						</span>
						<img
							src={listView ? `/images/map.svg` : '/images/2-bars.svg'}
							alt={listView ? `MAP VIEW` : 'LIST VIEW'}
							style={{ width: 15.5 }}
						/>
					</TagButton>
				</Block>
			</Block>

			<Block>
				<Settings />
			</Block>
		</Container>
	)
}

export default React.memo(Top)
