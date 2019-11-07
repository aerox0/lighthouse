import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { BlockTitle } from '../typography/Title'
import ContactForm from '../../modules/form/ContactForm'

const Container = styled('div')`
	overflow: auto;
	padding: 24px;
	position: absolute;
	background-color: #fff;
	width: 100%;
	left: 0;
	top: 0;
	min-height: 100vh;
	height: 100%;
	z-index: 10000;
	pointer-events: none;
	opacity: 0;

	&.active {
		pointer-events: initial;
		opacity: 1;
	}

	.close-btn {
		position: absolute;
		right: 24px;
		top: 24px;
	}

	.body {
	}

	.header {
		.small-title {
			span {
				font-size: 0.9em;
				line-height: 2.2em;
				font-weight: bold;
			}
		}
	}

	p {
		font-size: 1.4em;
		line-height: 1.5;
	}
`

const Form = styled('div')`
	margin-top: 24px;
`

export const useVisitPopup = () => {
	const [isShowing, setIsShowing] = useState(true)

	const toggle = state => {
		setIsShowing(state)
	}

	return {
		isShowing,
		toggle
	}
}

const VisitPopup = ({ isShowing, toggle }) => {
	const handleClose = useCallback(() => toggle(false), [toggle, isShowing])

	return isShowing ? (
		<Container className={isShowing ? 'active' : ''}>
			<div className="close-btn" onClick={handleClose}>
				<img src="/images/close-black.svg" alt="Close" />
			</div>
			<div className="body">
				<div className="header">
					<div className="small-title">
						<span>LIGHTHOUSE CONCIERGE</span>
					</div>
					<BlockTitle style={{ marginBottom: 10 }} fz="2em">
						Interested in this apartment?
					</BlockTitle>
					<p>
						Let us help you set up a visit to this property, or multiple
						properties. Apartment hunting can often feel like a game of
						telephone or email tag. That’s why we have a dedicated team here to
						help.
					</p>
				</div>

				<Form>
					<ContactForm />
				</Form>
			</div>
		</Container>
	) : null
}

export default React.memo(VisitPopup)
