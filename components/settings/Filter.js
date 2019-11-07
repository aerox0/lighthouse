import React, { useContext, useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import CheckboxList from '../form/CheckboxList'
import { SettingContext } from '../../utils/SettingContext'

const Container = styled('div')`
	padding: 20px;
	position: absolute;
	top: 100%;
	left: 0;
	background-color: #fff;
	width: 100%;
	z-index: 100;
	box-shadow: 0px 2px 4px rgba(40, 40, 40, 0.16);
`

const Content = styled('div')``

const Footer = styled('div')`
	margin-top: 16px;
	text-align: right;
`

const Filter = () => {
	const { setting, setSetting } = useContext(SettingContext)
	const [show, setShow] = useState(false)

	useEffect(() => {
		if (setting.activeId === null) setShow(false)
		else setShow(true)
	}, [setting])

	const handleClickDone = useCallback(() => {
		let tmpSetting = { ...setting }
		tmpSetting.activeId = null

		const tmpSettingList = tmpSetting.settingList[setting.activeId]
		tmpSettingList.count = tmpSettingList.settings.filter(
			el => el.active == true
		).length

		setSetting(tmpSetting)
		setShow(false)
	}, [show])

	const handleClickCancel = useCallback(() => {
		setSetting({ ...setting, activeId: null })
		setShow(false)
	}, [show])

	if (show == false) return <></>

	return (
		<Container>
			<Content>
				<CheckboxList list={setting.settingList} id={setting.activeId} />
			</Content>

			<Footer>
				<div>
					<Button style={{ marginRight: 8 }} onClick={handleClickCancel}>
						Cancel
					</Button>
					<Button primary onClick={handleClickDone}>
						Done
					</Button>
				</div>
			</Footer>
		</Container>
	)
}

export default React.memo(Filter)
