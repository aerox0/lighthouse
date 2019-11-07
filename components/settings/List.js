import React, { useEffect } from 'react'
import styled from 'styled-components'
import Item from './Item'

const Container = styled('div')`
	display: flex;
	flex-direction: row;
	align-items: center;
	overflow: auto;
`

const List = ({ list }) => {
	return (
		<Container>
			{list.map((el, i) => {
				return <Item key={i} id={i} label={el.label} />
			})}
		</Container>
	)
}

export default React.memo(List)
