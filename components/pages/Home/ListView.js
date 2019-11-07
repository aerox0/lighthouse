import React from 'react'
import styled from 'styled-components'
import CardList from '../../cards/CardList'

const Container = styled('div')`
	margin-left: 20px;
	margin-top: 20px;
	margin-right: 20px;
	margin-bottom: 25px;
`

const list = [
	{ price: 75, background: '/images/hotel.png' },
	{ price: 75, background: '/images/hotel.png' }
]

const ListView = () => {
	return (
		<Container>
			<CardList list={list} />
		</Container>
	)
}

export default ListView
