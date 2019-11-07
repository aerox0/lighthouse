import React from 'react'
import styled from 'styled-components'
import Checkbox from '../form/Checkbox'

const Container = styled('div')`
	overflow: auto;
`

const CheckboxTable = ({ list }) => {
	return (
		<Container>
			<table>
				<tbody>
					<tr>
						{Object.keys(list[0]).map((el, i) => {
							return <th key={i}>{el}</th>
						})}
					</tr>
					{list.map((el, i) => {
						return (
							<tr key={i}>
								<td>
									<Checkbox white name={i} />
								</td>
								<td>{el.unit}</td>
								<td>{el.beds}</td>
								<td>{el.bath}</td>
								<td>{el.sqft}</td>
								<td>{el.price}</td>
								<td>{el.availability}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</Container>
	)
}

export default React.memo(CheckboxTable)
