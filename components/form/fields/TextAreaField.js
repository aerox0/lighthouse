import { getIn } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { Label } from '../Label'

const Container = styled('div')`
	margin-bottom: 24px;
`

const TextArea = styled('textarea')`
	box-shadow: 0;
	border: 0;
	border: 1px solid ${p => p.theme.colors.gray};
	padding: 12px 10px;
	font-weight: normal;
	height: 88px;
	font-size: 1.6em;
	width: 100%;
	margin-bottom: 8px;
	font-family: 'Eina 03';
	transition: all 0.2s ease;
	border-radius: 4px;
	margin-top: 8px;

	&::placeholed {
		color: #3c3c3b;
	}

	&:focus,
	&:valid {
		border: 1px solid ${p => p.theme.colors.secondary};
	}
`

export const TextAreaField = ({ field, form, label, ...props }) => {
	const errorText =
		getIn(form.touched, field.name) && getIn(form.errors, field.name)

	return (
		<>
			<Container>
				<Label>
					<span>{label}</span>
					<TextArea type="text" {...field} {...props} />
				</Label>
				{!!errorText ? (
					<p style={{ color: 'red', fontSize: 11 }}>{errorText}</p>
				) : null}
			</Container>
		</>
	)
}
