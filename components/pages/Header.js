import React from 'react'
import styled from 'styled-components'
import { Block } from '../blocks/Container'
import Search from '../search/Search'

const Container = styled('div')`
	padding-left: 15px;
	margin-top: 20px;
	padding-right: 20px;
	padding-bottom: 20px;
`

const Header = () => {
	return (
		<Container>
			<Block row jc="space-between" ai="center">
				<Block row ai="center">
					<Block style={{ marginRight: 16 }}>
						<img src="/images/menu.svg" alt="Menu" />
					</Block>
					<Block>
						<img src="/images/logo.svg" alt="Lighthouse Logo" />
					</Block>
				</Block>

				<Search />
			</Block>
		</Container>
	)
}

export default React.memo(Header)
