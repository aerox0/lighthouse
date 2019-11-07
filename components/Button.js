import styled, { css } from 'styled-components'

export const TagButton = styled('div')`
	background-color: ${p => (p.circle ? '' : p.theme.colors.gray)};
	border-radius: ${p => (p.bdrs ? p.bdrs : '50px')};
	padding: 10px 15px;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: all 0.2s linear;

	${p =>
		p.circle &&
		css`
			border: 1px solid ${p => p.theme.colors.gray};
			padding: 0px;
			width: 36px;
			height: 36px;
			position: relative;

			img {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		`}
	${p =>
		p.bordered &&
		css`
			border: 1px solid ${p => p.theme.colors.gray};
			padding: 10px 17px;
			background-color: transparent;
		`};
`

const Button = styled('button')`
	padding-top: 5.5px;
	padding-bottom: 7.5px;
	padding-right: 27.5px;
	padding-left: 27.5px;
	border: 1px solid ${p => p.theme.colors.gray};
	color: ${p => p.theme.colors.primary};
	border-radius: 64px;
	font-size: 1.4em;
	font-weight: bold;
	background-color: #fff;
	transition: all 0.2s linear;
	line-height: 1.8em;
	font-family: 'Eina 03';

	&:hover {
		color: #fff;
		background-color: ${p => p.theme.colors.primary};
		border: 1px solid ${p => p.theme.colors.primary};
	}
`

export default Button
