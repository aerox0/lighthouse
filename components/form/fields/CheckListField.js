import { getIn } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { Label } from '../Label'
import CheckboxTable from '../../table/CheckboxTable'

const Container = styled('div')`
	margin-bottom: 24px;
`

export const CheckListField = ({ field, form, label, checkList, ...props }) => {
	const errorText =
		getIn(form.touched, field.name) && getIn(form.errors, field.name)

	return (
		<>
			<Container>
				<Label>
					<span style={{ marginBottom: 16 }}>{label}</span>
					{!!checkList && <CheckboxTable list={checkList} />}
				</Label>
				{!!errorText ? (
					<p style={{ color: 'red', fontSize: 11 }}>{errorText}</p>
				) : null}
			</Container>
		</>
	)
}
