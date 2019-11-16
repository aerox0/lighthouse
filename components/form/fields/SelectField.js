import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 4px;

	.label {
		font-weight: bold;
		margin-right: 10px;
		font-weight: 600;
		font-size: 1.2em;
		display: flex;
		align-items: center;

		span {
			font-size: 1em;
		}
	}

	label {
		font-size: 1.2em;
		font-weight: 600;
		cursor: pointer;
		font-weight: bold;
		transition: all 0.2s linear;
		border-radius: 30px;
		padding: 3px 10px;
		&:hover {
			background-color: #d9deee;
		}
	}

	i,
	img {
		margin-right: 10px;
		height: 14px;
	}

	input {
		display: none;
	}

	.checkboxes {
		display: flex;
		align-items: center;
	}

	.item {
		input:checked + label {
			background-color: #d9deee;
		}
	}
`

const SelectField = ({ options, label, name, icon }) => {
	return (
		<Container>
			<div className="label">
				{icon && icon()}
				<span>{label}</span>
			</div>
			<div className="checkboxes">
				{options.map((op, i) => {
					return (
						<div className="item" key={i}>
							<input
								type="checkbox"
								id={`${name}-${i}`}
								name={name}
								value={op.value || op.label}
							/>
							<label htmlFor={`${name}-${i}`}>{op.label}</label>
						</div>
					)
				})}
			</div>
		</Container>
	)
}

export default SelectField
