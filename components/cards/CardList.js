import React from 'react'
import Card from './Card'

const CardList = ({ list }) => {
	return (
		<>
			{list.map(({ price, background }, i) => {
				return <Card key={i} price={price} background={background} />
			})}
		</>
	)
}

export default CardList
