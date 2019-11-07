import React from 'react'
import styled, { css } from 'styled-components'
import { Block } from '../blocks/Container'

const Container = styled('div')``

const Item = styled('div')`
	${p =>
		p.bordered &&
		css`
			padding-bottom: 13px;
			border-bottom: 1px solid ${p => p.theme.colors.gray};
		`}

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

	.price-title {
		margin-bottom: 8px;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 1em;
		line-height: 1;
	}

	${p =>
		p.withTitle &&
		css`
			.price {
				font-size: 2.6em;
			}
		`}
`

const Options = ({ list, bordered }) => {
	return (
		<Container>
			{list.map(({ price, beds, sq, title }, i) => {
				return (
					<Item key={i} bordered={bordered} withTitle={!!title}>
						{!!title && <div className="price-title">{title}</div>}
						<Block row jc="space-between" ai="center">
							<Block>
								<div className="price">{price}</div>
							</Block>

							<Block row ai="center" width="auto" style={{ minWidth: 145 }}>
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
