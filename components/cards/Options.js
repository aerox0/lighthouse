import React from 'react'
import styled from 'styled-components'
import { Block } from '../blocks/Container'

const Container = styled('div')``

const Item = styled('div')`
	&:not(:last-child) {
		margin-bottom: 14px;
	}

	.price {
		font-size: 2em;
		font-weight: bold;
	}

	span {
		line-height: 16px;
		font-size: 1.2em;
	}
`

const Options = ({ list }) => {
	return (
		<Container>
			{list.map(({ price, beds, sq }, i) => {
				return (
					<Item key={i}>
						<Block row jc="space-between" ai="center">
							<Block>
								<div className="price">{price}</div>
							</Block>

							<Block row ai="center" width="145px">
								<Block row ai="center" style={{ marginRight: 8 }}>
									<img
										src="/images/bedroom.svg"
										alt="Badrooms"
										style={{ marginRight: 8, width: 14, height: 10 }}
									/>
									<span>{beds} Beds</span>
								</Block>
								<Block row ai="center">
									<img
										src="/images/sq.svg"
										alt="sq.ft"
										style={{ marginRight: 8, width: 12, height: 15 }}
									/>
									<span>{sq} sq.ft</span>
								</Block>
							</Block>
						</Block>
					</Item>
				)
			})}
		</Container>
	)
}

export default React.memo(Options)
