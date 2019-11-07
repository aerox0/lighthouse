import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'
import DefaultStyles from '../components/DefaultStyles'
import '../public/libs/slick/slick.css'
import '../public/libs/slick/slick-theme.css'

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<ThemeProvider theme={theme}>
				<DefaultStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		)
	}
}
