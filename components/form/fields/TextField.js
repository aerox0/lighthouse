import { getIn } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { Label } from '../Label'

const Container = styled('div')`
	margin-bottom: 24px;
`

const Input = styled('input')`
	box-shadow: 0;
	border: 0;
	border-bottom: 1px solid ${p => p.theme.colors.gray};
	padding: 7px 0px;
	font-weight: normal;
	font-size: 1.6em;
	width: 100%;
	margin-bottom: 8px;
	font-family: 'Eina 03';
	transition: all 0.2s ease;

	&::placeholed {
		color: #3c3c3b;
	}

	&:focus,
	&:valid {
		border-bottom: 1px solid ${p => p.theme.colors.secondary};
	}
`

export const TextField = ({ field, form, label, ...props }) => {
	const errorText =
		getIn(form.touched, field.name) && getIn(form.errors, field.name)

	return (
		<>
			<Container>
				<Label>
					<span>{label}</span>
					<Input type="text" {...field} {...props} />
				</Label>
				{!!errorText ? (
					<p style={{ color: 'red', fontSize: 11 }}>{errorText}</p>
				) : null}
			</Container>
		</>
	)
}
