import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
	label {
		font-size: 0.8em;
		line-height: 1;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.black};
		margin-bottom: 15px;
		display: block;
	}
	.priceField {
		position: relative;
	}
	.currency {
		left: 18px;
		top: 13px;
		font-size: 1em;
		position: absolute;
	}
	input {
		width: 155px;
		padding: 13px 16px 16px 28px;
		border-radius: 4px;
		box-shadow: none;
		border: 0;
	}
`

const PriceField = ({ label, name, currency = '$', ...props }) => {
	const uid = new Date().getTime().toString()

	return (
		<Container>
			<label htmlFor={uid}>{label}</label>
			<div className="priceField">
				<span className="currency">{currency}</span>
				<input
					id={uid}
					name={!!name ? name : String(label).toLocaleLowerCase()}
					type="text"
					{...props}
				/>
			</div>
		</Container>
	)
}

export default PriceField
