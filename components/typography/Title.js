import styled from 'styled-components'

export const PageTitle = styled('h1')`
	color: ${p => (p.primary ? p.theme.colors.primary : p.theme.colors.black)};
	line-height: 1.3;
	font-size: ${p => p.fz || '2.4em'};
	font-family: 'PlayfairDisplay';
`

export const BlockTitle = styled('h2')`
	color: ${p => p.theme.colors.black};
	line-height: 1;
	font-size: ${p => (p.fz ? p.fz : '2.4em')};
	margin-bottom: 13px;
	font-family: 'PlayfairDisplay';
`

export const Title = styled('h3')`
	color: ${p => p.theme.colors.black};
	line-height: 2.3;
	font-size: 0.9em;
	margin-bottom: 8px;
	font-weight: bold;
`

export const SmallTitle = styled('h4')`
	color: ${p => p.theme.colors.black};
	line-height: 1;
	font-size: 1.6em;
	margin-bottom: 16px;
	font-weight: bold;
`
