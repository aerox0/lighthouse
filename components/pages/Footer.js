import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
	margin-top: 20px;
`

const Top = styled('div')`
	background-color: ${p => p.theme.colors.gray};
	padding-top: 40px;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 32px;

	.section {
		&:not(:first-child) {
			margin-top: 32px;
		}

		p {
			font-size: 1.6em;
			&:not(:last-child) {
				margin-bottom: 16px;
			}
		}
	}

	.title {
		font-family: 'Playfair Display';
		font-size: 1.8em;
		font-weight: bold;
		margin-bottom: 16px;
		color: ${p => p.theme.colors.secondary};
	}

	ul {
		list-style: none;
		margin-bottom: 0;
		padding-left: 0;
		margin-top: 0;
		li {
			font-size: 1em;
			&:not(:last-child) {
				margin-bottom: 16px;
			}
			span {
				font-size: 1.6em;
			}
		}
	}
`

const Bottom = styled('div')`
	background-color: #f0ebe5;
	text-align: center;
	padding: 14px 20px;

	.copywrite {
		width: 100%;
		text-align: center;
		font-size: 1.4em;
		color: ${p => p.theme.colors.secondary};
		line-height: 2.2em;
		font-weight: bold;
	}
`

const Footer = () => {
	return (
		<Container>
			<Top>
				<div className="section">
					<div className="title">Lighthouse</div>
					<ul>
						<li>
							<span>About</span>
						</li>
						<li>
							<span>Careers</span>
						</li>
						<li>
							<span>Terms</span>
						</li>
						<li>
							<span>Privacy</span>
						</li>
					</ul>
				</div>
				<div className="section">
					<div className="title">Products</div>
					<ul>
						<li>
							<span>Placement</span>
						</li>
						<li>
							<span>Retention [beta]</span>
						</li>
					</ul>
				</div>
				<div className="section">
					<div className="title">Resources</div>
					<ul>
						<li>
							<span>FAQ</span>
						</li>
						<li>
							<span>Blog</span>
						</li>
					</ul>
				</div>
				<div className="section">
					<div className="title">Contact</div>
					<p>info@lighthouse.rent</p>
					<p>
						19 Rausch Unit C<br />
						San Francisvo, CA 94103
					</p>
				</div>
			</Top>

			<Bottom>
				<span className="copywrite">
					Lighthouse Financial Technologies © 2019
				</span>
			</Bottom>
		</Container>
	)
}

export default React.memo(Footer)
