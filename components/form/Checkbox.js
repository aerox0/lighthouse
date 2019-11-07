import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled('div')`
	position: relative;

	input:checked + label:before {
		border: 1px solid ${p => p.theme.colors.primary};
	}
	input:checked + label:after {
		opacity: 1;
	}

	${p =>
		p.white &&
		css`
			input:checked + label:before {
				border: 1px solid ${p => p.theme.colors.primary};
				background-color: ${p => p.theme.colors.primary};
			}

			${Label} {
				&:after {
					background-image: url('/images/check-white.svg');
				}
			}
		`}
`

const Label = styled('label')`
	padding-left: 26px;
	position: relative;

	&:before {
		content: '';
		background-color: #fff;
		display: block;
		width: 18px;
		height: 18px;
		border: 1px solid #c4c4c4;
		border-radius: 3px;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		transition: all 0.2s linear;
	}

	&:after {
		opacity: 0;
		content: '';
		display: block;
		width: 12px;
		height: 8.5px;
		border-radius: 3px;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(32%, -50%);
		transition: all 0.2s linear;
		background-image: url('/images/check.svg');
	}

	span {
		font-size: 1.2em;
		line-height: 18px;
	}
`

const Checkbox = ({ name, label, white, ...props }) => {
	return (
		<Container white={white}>
			<input
				id={name}
				name={name}
				type="checkbox"
				className="hide"
				{...props}
			/>
			<Label htmlFor={name}>
				<span>{label}</span>
			</Label>
		</Container>
	)
}

export default Checkbox
