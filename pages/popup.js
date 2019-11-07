import React, { useCallback, useState } from 'react'
import VisitPopup, { useVisitPopup } from '../components/popup/VisitPopup'
import Button from '../components/Button'

const Popup = () => {
	const { isShowing, toggle } = useVisitPopup()
	const handleOpen = useCallback(() => {
		toggle(true)
	}, [toggle, isShowing])

	return (
		<>
			<VisitPopup isShowing={isShowing} toggle={toggle} />
			<Button onClick={handleOpen}>Click Me</Button>
		</>
	)
}

export default React.memo(Popup)
