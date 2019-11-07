import React from 'react'
import Head from 'next/head'
import { global } from '../../config/global'

const DefaultLayout = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>
					{title ? `${title} | ${global.title}` : `${global.title}`}
				</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<main>{children}</main>
		</>
	)
}

export default React.memo(DefaultLayout)
