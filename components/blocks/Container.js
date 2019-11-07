import styled from 'styled-components'

export const Container = styled('div')`
	padding: ${p => p.gutter && p.theme.gutter} 0;
	width: 100%;
	padding-left: ${p => p.gtl && p.theme.gutter};
	padding-top: ${p => p.gtt && p.theme.gutter};
	padding-right: ${p => p.gtr && p.theme.gutter};
	padding-bottom: ${p => p.gtb && p.theme.gutter};
	display: flex;
	flex-wrap: ${p => p.fw && 'wrap'};
	justify-content: ${p => p.jc};
	align-items: ${p => p.ai};
	flex-direction: ${p => (p.row ? 'row' : 'column')};
`

export const BlockHeader = styled('div')``

export const BlockContent = styled('div')`
	margin-top: ${p => (p.gtt ? '50px' : null)};
	margin-bottom: ${p => (p.gtb ? '50px' : null)};
`

export const BlockFooter = styled('div')``

export const Block = styled('div')`
	width: ${p => p.width || 'auto'};
	max-width: ${p => p.maxWidth};
	display: flex;
	flex-wrap: ${p => p.fw && 'wrap'};
	justify-content: ${p => p.jc};
	align-items: ${p => p.ai};
	flex-direction: ${p =>
		p.row ? (typeof p.row === 'string' ? p.row : 'row') : 'column'};

	${BlockHeader} {
		margin-bottom: 30px;
	}

	${BlockFooter} {
		margin-top: 50px;
	}
`
