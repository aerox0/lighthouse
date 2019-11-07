import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import DefaultLayout from './DefaultLayout'

const LayoutContainer = styled('div')`
	width: 100%;
	/* padding-left: 20px;
	padding-right: 20px; */
	max-width: 1240px;
	margin-left: auto;
	margin-right: auto;
	flex: 1;
	display: flex;
	flex-direction: column;
`

const Container = styled('div')`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

const Layout = ({ children, hideFooter, hideHeader, ...props }) => {
	return (
		<DefaultLayout {...props}>
			<Container>
				{!hideHeader && <Header />}
				<LayoutContainer>{children}</LayoutContainer>
				{!hideFooter && <Footer />}
			</Container>
		</DefaultLayout>
	)
}

export default React.memo(Layout)
