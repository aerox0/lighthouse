import React from 'react'
import styled from 'styled-components'
import { Block } from '../blocks/Container'
import { BlockTitle, Title } from '../typography/Title'
import Options from './Options'
import Highlights from './Highlights'

const Container = styled('div')`
	position: 'relative';
	box-shadow: 0px 0px 6px rgba(40, 40, 40, 0.1);
	border-radius: 4px;

	&:not(:last-child) {
		margin-bottom: 20px;
	}
`

const Content = styled('div')`
	padding-top: 20px;
	padding-left: 16px;
	padding-right: 16px;
`

const Footer = styled('div')`
	margin-top: 15px;
	padding-bottom: 20px;
	padding-left: 16px;
	padding-right: 16px;
`

const Price = styled('div')`
	position: absolute;
	left: 0;
	top: 0;
	background-image: url('/images/flag.svg');
	background-repeat: no-repeat;
	width: 125px;
	height: 61px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;

	p,
	span {
		padding-left: 15px;
		font-weight: bold;
	}

	p {
		color: #fff;
		line-height: 0.9;
		font-size: 3em;
	}

	span {
		font-size: 1em;
	}
`

const options = [
	{
		price: '$3,190',
		beds: 1,
		sq: 532
	},
	{
		price: '$4,837',
		beds: 2,
		sq: 827
	},
	{
		price: '$7,112',
		beds: 3,
		sq: 1099
	}
]

const highlights = [
	{
		label: 'Pet-freindly'
	},
	{
		label: 'Washer in unit'
	},
	{
		label: 'Pool and Hot tub'
	}
]

const Card = ({ price, background }) => {
	return (
		<Container>
			<Block
				style={{
					height: 150,
					width: '100%',
					position: 'relative',
					backgroundImage: `url(${background})`,
					objectFit: 'cover'
				}}
			>
				<Price>
					<p>+${price}</p>
					<span>back monthly</span>
				</Price>
			</Block>

			<Content>
				<Block className="borderBottom" style={{ paddingBottom: 16 }}>
					<BlockTitle>The Landing</BlockTitle>
					<p style={{ fontSize: '1.2em' }}>1395 22nd St San Francisco</p>
				</Block>

				<Block
					className="borderBottom"
					style={{ paddingBottom: 16, marginTop: 16 }}
				>
					<Options list={options} />
				</Block>
			</Content>

			<Footer>
				<Title>ADDITIONAL HIGHLIGHTS</Title>
				<Block>
					<Highlights list={highlights} />
				</Block>
			</Footer>
		</Container>
	)
}

export default React.memo(Card)
