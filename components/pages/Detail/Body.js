import React from 'react'
import styled from 'styled-components'
import UtilCard from '../../cards/UtilCard'
import { SmallTitle } from '../../typography/Title'

const BodyContainer = styled('div')`
	padding: 20px;
`

const Content = styled('div')``

const Description = styled('div')`
	margin-top: 32px;
	p {
		font-size: 1.2em;
	}
`

const Location = styled('div')`
	margin-top: 32px;
`

const About = styled('div')`
	margin-top: 32px;

	.section {
		&:not(:first-child) {
			margin-top: 32px;
		}
	}

	p {
		padding-right: 2px;
		font-size: 1.2em;
		line-height: 1.5em;
	}

	.primary {
		margin-top: 8px;
		span {
			font-weight: bold;
			font-size: 1.4em;
			line-height: 2.2em;
		}
	}

	ul {
		list-style: none;
		margin-bottom: 0;
		padding-left: 0;

		li {
			font-size: 1em;
			margin-bottom: 7px;
			span {
				line-height: 1.5em;
				font-size: 1.2em;
			}
		}
	}
`

const Body = () => {
	return (
		<BodyContainer>
			<Content>
				<UtilCard />
			</Content>

			<Description>
				<SmallTitle>Description</SmallTitle>
				<p>
					The Landing is an apartment building. It is participating with
					Lighthouse, visit <a href="">https://thelandingsf.com</a> Don’t forget
					to apply through Lighthouse to earn rewards.
				</p>
			</Description>

			<Location>
				<SmallTitle>Location</SmallTitle>
				<p>Here should be a map</p>
			</Location>

			<About>
				<div className="section">
					<SmallTitle>Home Amenities</SmallTitle>
					<ul>
						<li>
							<span>Home Feature 1</span>
						</li>
						<li>
							<span>Home Feature 1</span>
						</li>
						<li>
							<span>Home Feature 1</span>
						</li>
						<li>
							<span>Home Feature 1</span>
						</li>
						<li>
							<span>Home Feature 1</span>
						</li>
						<li>
							<span>Home Feature 1</span>
						</li>
					</ul>
				</div>

				<div className="section">
					<SmallTitle>Building Amenities</SmallTitle>
					<ul>
						<li>
							<span>Building Feature 2</span>
						</li>
						<li>
							<span>Building Feature 2</span>
						</li>
						<li>
							<span>Building Feature 2</span>
						</li>
						<li>
							<span>Building Feature 2</span>
						</li>
						<li>
							<span>Building Feature 2</span>
						</li>
						<li>
							<span>Building Feature 2</span>
						</li>
					</ul>
				</div>

				<div className="section">
					<SmallTitle>Intersted in this apartment</SmallTitle>
					<p>
						Lighthouse is here for you. We’ll help schedule a visit to any
						apartment on our site that you like. We want apartment seeking to be
						less stress and more rewards. With our dedicated team here to help,
						say goodbye to email tag and hello to your new place.
					</p>
					<div className="primary">
						<span>Want scheduling help?</span>
					</div>
				</div>
			</About>
		</BodyContainer>
	)
}

export default React.memo(Body)
