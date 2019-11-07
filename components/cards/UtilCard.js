import React from 'react'
import styled from 'styled-components'
import { PageTitle } from '../typography/Title'
import { Block } from '../blocks/Container'
import Options from './Options'
import Button, { BrownButton } from '../Button'

const Container = styled('div')`
	background: #ffffff;
	box-shadow: 0px 0px 6px rgba(40, 40, 40, 0.1);
	border-radius: 4px;
	padding: 24px 16px;
`

const Header = styled('div')`
	${PageTitle} {
		margin-bottom: 16px;
	}
	${Block} {
		img {
			margin-right: 10px;
		}
		span {
			font-size: 1.2em;
		}
	}
`

const Content = styled('div')`
	margin-top: 24px;
`

const Details = styled('div')`
	margin-top: 15px;

	${Block} {
		span {
			font-size: 1.2em;
		}
	}

	.header {
		margin-bottom: 8px;

		span {
			text-transform: uppercase;
			font-weight: bold;
			font-size: 1em;
		}
	}
`

const Footer = styled('div')`
	margin-top: 21px;
`

const optionsList = [
	{
		title: 'Monthly Rent',
		price: '$3,190',
		beds: 1,
		sq: 532
	},
	{
		title: 'Monthly Rent',
		price: '$4,837',
		beds: 2,
		sq: 827
	},
	{
		title: 'Monthly Rent',
		price: '$7,122',
		beds: 3,
		sq: '1,099'
	}
]

const UtilCard = () => {
	return (
		<Container>
			<Header>
				<PageTitle fz="3em">The Landing</PageTitle>
				<div className="details">
					<Block style={{ marginBottom: 8 }} row ai="center">
						<img
							src="/images/geo.svg"
							alt="Geolocation"
							style={{ height: 12, width: 'auto' }}
						/>
						<span>1395 22nd St San Francisco</span>
					</Block>
					<Block row ai="center">
						<img
							src="/images/pet.svg"
							alt="Pet"
							style={{ height: 12, width: 'auto' }}
						/>
						<span>Pet Friendly</span>
					</Block>
				</div>
			</Header>

			<Content>
				<Options bordered list={optionsList} />

				<Details>
					<div className="header">
						<span>Monthly cashback rewards</span>
					</div>

					<Block row ai="center" jc="space-between">
						<span style={{ maxWidth: 175, marginRight: 15 }}>
							Earn $900 per year renting this apartment with Lighthouse renal
							rewards. <a href="">Learn more</a>
						</span>
						<BrownButton>
							<span
								style={{ fontFamily: 'Playfair Display', fontSize: '1.6em' }}
							>
								$75/month
							</span>
						</BrownButton>
					</Block>
				</Details>
			</Content>

			<Footer>
				<Button primary style={{ width: '100%' }}>
					Check Availability
				</Button>
			</Footer>
		</Container>
	)
}

export default React.memo(UtilCard)
