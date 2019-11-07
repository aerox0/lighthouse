import React, { useState, useCallback } from 'react'
import ListView from '../components/pages/Home/ListView'
import Top from '../components/pages/Home/Top'
import Layout from '../components/pages/Layout'

const index = () => {
	const [listView, setListView] = useState(true)

	const handleChangeListState = useCallback(() => {
		setListView(s => !s)
	}, [listView])

	return (
		<Layout title="Search" hideFooter>
			<Top handleListChange={handleChangeListState} listView={listView} />
			{listView ? (
				<ListView />
			) : (
				<div style={{ textAlign: 'center', margin: 20 }}>
					Here should be map!
				</div>
			)}
		</Layout>
	)
}

export default React.memo(index)
